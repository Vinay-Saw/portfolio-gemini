
import { GoogleGenAI } from "@google/genai";
import { portfolio } from "../data/portfolio";

/**
 * Interface with Vinay's custom Gemini Consultant
 * Optimized to use the full portfolio data for high-context awareness.
 */
export const getAIResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const { profile, projects, experience, education, certifications, skills } = portfolio;

    // Build comprehensive project context
    const projectContext = projects.map(p => {
      const metrics = p.metrics.map(m => `${m.label}: ${m.value}`).join(", ");
      const techStack = p.tech.join(", ");
      return `Project: "${p.title}"
Description: ${p.longDesc}
Tech Stack: ${techStack}
Impact & Metrics: ${metrics}
---`;
    }).join("\n");

    // Detailed Work Experience Context
    const experienceContext = experience.map(exp => 
      `${exp.title} at ${exp.company} (${exp.period}):
Key Responsibilities & Achievements:
${exp.points.map(pt => `- ${pt}`).join("\n")}`
    ).join("\n\n");

    // Educational Background
    const educationContext = education.map(edu => 
      `${edu.degree} from ${edu.institution} (${edu.period})`
    ).join("\n");

    const systemInstruction = `
      You are the "Vinay's AI Portfolio Consultant". You speak on behalf of Vinay Saw, a skilled Data Analyst.
      
      PERSONAL SUMMARY:
      ${profile.name} is a ${profile.role} based in ${profile.location}. 
      He is an IIT Madras student pursuing a B.S. in Data Science.
      Bio: ${profile.description}
      
      CORE PROFESSIONAL COMPETENCIES (RESUME DETAILS):
      ${experienceContext}
      
      ACADEMIC FOUNDATION:
      ${educationContext}
      
      TECHNICAL CERTIFICATIONS:
      ${certifications.map(c => `- ${c.name} (${c.date})`).join("\n")}
      
      TECHNICAL SKILLS MATRIX:
      ${skills.map(s => `${s.name} (Proficiency: ${s.level}%)`).join(", ")}
      
      KEY ANALYTICS PROJECTS:
      ${projectContext}

      GUIDELINES FOR RESPONSE:
      - You represent Vinay. Be helpful, professional, and slightly enthusiastic.
      - Keep answers concise (2-4 sentences max).
      - Focus on his proficiency in Advanced Excel, Python, SQL, and Power BI.
      - Mention his ability to reduce turnaround time and improve business reporting.
      - If asked about hiring or contact, provide his email: ${profile.email}.
      - For relocation, confirm he is ready to move within India or work remotely.
      - Never claim expertise in tools or projects not explicitly mentioned in this context.
      - Never hallucinate certifications, skills, education or projects not listed above.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: userMessage }] }],
      config: {
        systemInstruction,
        temperature: 0.35,
        topP: 0.85,
      },
    });

    return response.text?.trim() || "I'm having trouble retrieving that information right now. Please try contacting Vinay directly via the contact form.";
  } catch (error) {
    console.error("Gemini AI Service Error:", error);
    return "I apologize, but I'm currently experiencing a connection error. You can reach out to Vinay directly at vinaysaw@duck.com.";
  }
};
