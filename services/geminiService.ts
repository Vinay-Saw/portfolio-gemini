
import { GoogleGenAI } from "@google/genai";
import { portfolio } from "../data/portfolio";

/**
 * Interface with Vinay's AI Portfolio Assistant.
 * Relies exclusively on high-fidelity structured data from the portfolio data source.
 */
export const getAIResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const { profile, experience, projects, education, skills, certifications } = portfolio;

    // Structured context for the AI to understand the full professional profile
    const context = `
[PROFESSIONAL PROFILE]
Name: ${profile.name}
Role: ${profile.role}
Summary: ${profile.description}
Location: ${profile.location}
Availability: ${profile.relocationInfo}

[WORK EXPERIENCE]
${experience.map(e => `- ${e.title} at ${e.company} (${e.period}): ${e.points.join(". ")}`).join("\n")}

[PROJECTS & CASE STUDIES]
${projects.map(p => `- ${p.title} (${p.categories.join(", ")}): ${p.desc}. Key Tech: ${p.tech.join(", ")}`).join("\n")}

[EDUCATION]
${education.map(ed => `- ${ed.degree} from ${ed.institution} (${ed.period})`).join("\n")}

[SKILLS & PROFICIENCIES]
${skills.map(s => `${s.name} (${s.level}%)`).join(", ")}

[CERTIFICATIONS]
${certifications.map(c => `- ${c.name} (${c.date})`).join("\n")}
    `;

    const systemInstruction = `
      You are "Vinay's AI Portfolio Consultant". You represent Vinay Saw, a Data Analyst and IIT Madras Data Science student.
      
      CORE GUIDELINES:
      - Use ONLY the provided context to answer questions about Vinay's professional background.
      - If asked about something not in the context, politely state that you represent Vinay's professional work and suggest contacting him directly at ${profile.email}.
      - Maintain a professional, analytical, yet approachable tone.
      - Use Markdown for formatting: **bold** for key terms, bullet points for lists, and [Link Text](URL) for links.
      - If asked for his resume, provide this direct link: ${profile.links.resume}
      
      USER INTERACTION:
      - Be concise but thorough.
      - Highlight Vinay's strengths in MIS, Operations, Data Analysis and Data Science.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: { 
        parts: [
          { text: `CONTEXT DATA:\n${context}` },
          { text: `USER QUESTION: ${userMessage}` }
        ] 
      },
      config: {
        systemInstruction,
        temperature: 0.2,
        topP: 0.8,
      },
    });

    return response.text?.trim() || "I'm sorry, I couldn't generate a response. Please check Vinay's contact page for more information.";
  } catch (error) {
    console.error("Gemini AI Consultant Error:", error);
    return "I'm currently experiencing a high volume of requests. Please try again in a moment or contact Vinay directly at vinaysaw@duck.com.";
  }
};
