
import { GoogleGenAI } from "@google/genai";
import { portfolio } from "../data/portfolio";

/**
 * Robustly fetches the resume PDF and converts it to a base64 string.
 * Optimized for browser environments using ArrayBuffer and btoa.
 */
async function fetchResumeAsBase64(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch resume');
    const arrayBuffer = await response.arrayBuffer();
    
    // Convert ArrayBuffer to Base64 string safely in browser
    let binary = '';
    const bytes = new Uint8Array(arrayBuffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  } catch (error) {
    console.warn("PDF Context unavailable. Falling back to structured web data.", error);
    return null;
  }
}

/**
 * Interface with Vinay's AI Portfolio Assistant.
 * Combines live web data and the binary resume PDF for comprehensive answers.
 */
export const getAIResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const { profile, experience, projects, education, skills } = portfolio;

    // Structured Web Content (Parsed from portfolio.ts)
    const webContentContext = `
[LIVE PORTFOLIO DATA]
Name: ${profile.name}
Current Role: ${profile.role}
Summary: ${profile.description}
Location: ${profile.location} (${profile.relocationInfo})

[EXPERIENCE SUMMARY]
${experience.map(e => `- ${e.title} at ${e.company} (${e.period}): ${e.points.join(". ")}`).join("\n")}

[PROJECTS]
${projects.map(p => `- ${p.title}: ${p.desc} (Tech: ${p.tech.join(", ")})`).join("\n")}

[SKILLS]
${skills.map(s => `${s.name} (${s.level}%)`).join(", ")}
    `;

    // Fetch the binary PDF for detailed multi-modal reasoning
    const pdfBase64 = await fetchResumeAsBase64(profile.links.resumeDownload);

    const systemInstruction = `
You are "Vinay's AI Portfolio Assistant". You represent Vinay Saw, a Data Analyst and IIT Madras Data Science student.

KNOWLEDGE SOURCES:
1. ATTACHED PDF: Use this for specific details (contacts, references, specific names like "Rajesh Sir") not in the web data.
2. WEB CONTENT: Use this for live project descriptions and general profile info.

BEHAVIOR:
- ALWAYS check both sources. If a specific person is mentioned, it is likely in the PDF's references or experience section.
- NEVER guess. If info is missing from both, politely state that it's not in the official records.
- FORMATTING: Use strict Markdown. **Bold** key terms, use bulleted lists, and format links as [Link Text](url).
- If asked for his resume document, use: ${profile.links.resume}
- Provide analytical, professional, and concise answers.
    `;

    // Build the multimodal parts array
    const parts: any[] = [];
    
    // 1. Add PDF binary part if available
    if (pdfBase64) {
      parts.push({
        inlineData: {
          mimeType: 'application/pdf',
          data: pdfBase64
        }
      });
    }

    // 2. Add the web context as a text part
    parts.push({ text: `WEB CONTEXT:\n${webContentContext}` });

    // 3. Add the user's specific query
    parts.push({ text: `USER QUERY: ${userMessage}` });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: { parts },
      config: {
        systemInstruction,
        temperature: 0.1, // High precision
        topP: 0.9,
      },
    });

    return response.text?.trim() || "I couldn't process that request properly. You can find Vinay's full details in his resume here: " + profile.links.resume;
  } catch (error) {
    console.error("Gemini AI Service Error:", error);
    return "I'm having a technical issue reading the documents. Please contact Vinay directly at vinaysaw@duck.com.";
  }
};
