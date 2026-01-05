
import { GoogleGenAI } from "@google/genai";
import { PROJECTS } from "./constants";

/**
 * Interface with Vinay's custom Gemini Consultant
 * Optimized for performance and context relevance.
 */
export const getAIResponse = async (userMessage: string) => {
  try {
    // Instruction: The API key must be obtained exclusively from the environment variable process.env.API_KEY.
    // Use this process.env.API_KEY string directly when initializing.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const projectSummary = PROJECTS.map(p => `${p.title}: ${p.desc}`).join("\n");
    const systemInstruction = `
      You are "Vinay's AI Consultant". Vinay Saw is a Data Analyst and IIT Madras Data Science student.
      Use this context to answer questions about Vinay's portfolio:
      
      Expertise: Data Analytics, MIS Reporting, Advanced Excel (VLOOKUP, Pivot Tables), ERP Coordination.
      Education: B.S. Data Science from IIT Madras (Current), B.A. History from VBU.
      Certifications: Google Data Analytics, Excel for Data Analytics, IBM Data Foundations.
      
      Vinay's Projects:
      ${projectSummary}
      
      Tone: Professional, analytical, helpful.
      Rule: Answer concisely (max 3 sentences). If you don't know something, suggest contacting Vinay.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.5, // Lower temperature for more factual professional answers
      },
    });

    // Directly access the .text property from GenerateContentResponse
    return response.text?.trim() || "I'm sorry, I couldn't process that. How else can I help you today?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently unable to connect to my knowledge base. Please try again in a few moments.";
  }
};
