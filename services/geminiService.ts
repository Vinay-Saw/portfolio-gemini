
import { GoogleGenAI } from "@google/genai";
import { portfolio } from "../data/portfolio";

/**
 * Fetches the resume PDF and converts it to a base64 string for the Gemini API.
 * Uses the proxy-free direct download link.
 */
async function fetchResumeAsBase64(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch resume');
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        const base64String = result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.warn("Could not fetch PDF for AI analysis. Falling back to structured web content.", error);
    return null;
  }
}

/**
 * Interface with Vinay's custom Gemini Consultant.
 * The model receives both the structured web content and the actual PDF document.
 */
export const getAIResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const { profile, experience, projects, education, certifications, skills } = portfolio;

    // Build a structured "Web Content" summary for the AI
    const webContentContext = `
      [WEB PROFILE]
      Name: ${profile.name}
      Role: ${profile.role}
      Tagline: ${profile.tagline}
      Location: ${profile.location}
      Availability: ${profile.relocationInfo}
      
      [WEB EXPERIENCE SUMMARY]
      ${experience.map(e => `- ${e.title} at ${e.company} (${e.period}): ${e.points.join(". ")}`).join("\n")}
      
      [WEB PROJECTS]
      ${projects.map(p => `- ${p.title}: ${p.desc} (Tech: ${p.tech.join(", ")})`).join("\n")}
      
      [WEB EDUCATION]
      ${education.map(ed => `- ${ed.degree} from ${ed.institution}`).join("\n")}
      
      [WEB SKILLS]
      ${skills.map(s => `${s.name} (${s.level}%)`).join(", ")}
    `;

    // Fetch PDF Binary from the resume link
    const pdfBase64 = await fetchResumeAsBase64(profile.links.resumeDownload);

    const systemInstruction = `
      You are "Vinay's AI Portfolio Assistant", an expert consultant representing Vinay Saw.
      
      SOURCES OF TRUTH:
      1. ${pdfBase64 ? 'ATTACHED PDF: This is Vinay\'s official full-length resume.' : 'PDF NOT AVAILABLE: Use web content only.'}
      2. WEB CONTENT: Structured data from his live portfolio website (provided below).
      
      INSTRUCTIONS:
      - Cross-reference both sources when available.
      - Use Markdown formatting: **bold** for emphasis, lists, and [links](url).
      - Be professional, helpful, and concise.
      - Resume download link (It should redirect in a new tab.): ${profile.links.resume} 
      - - Never hallucinate certifications, skills, education or projects not listed above.
      
      STRUCTURED WEB CONTENT:
      ${webContentContext}
    `;

    const parts: any[] = [{ text: userMessage }];
    
    // Attach PDF if successfully fetched
    if (pdfBase64) {
      parts.unshift({
        inlineData: {
          mimeType: 'application/pdf',
          data: pdfBase64
        }
      });
    }

    // Add user message
    parts.push({ text: userMessage });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts }],
      config: {
        systemInstruction,
        temperature: 0.15,
        topP: 0.8,
      },
    });

    const resultText = response.text?.trim();
    return resultText || "I've analyzed Vinay's profile, but I couldn't find that specific detail. You can view his full resume here: " + profile.links.resume;
  } catch (error) {
    console.error("Gemini AI Service Error:", error);
    return "I'm having a technical difficulty reading Vinay's full documents. You can contact him directly at vinaysaw@duck.com or view his resume manually here: " + portfolio.profile.links.resume;
  }
};
