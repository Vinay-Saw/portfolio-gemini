
import { GoogleGenAI } from "@google/genai";
import { PROJECTS } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getAIResponse = async (userMessage: string) => {
  try {
    const projectSummary = PROJECTS.map(p => `${p.title}: ${p.desc}`).join("\n");
    const systemInstruction = `
      You are "Vinay's AI Consultant". Vinay Saw is a Data Analyst and IIT Madras Data Science student.
      Use this context to answer questions about Vinay's portfolio:
      
      Expertise: Data Analytics, MIS Reporting, Advanced Excel (VLOOKUP, Pivot Tables, Dashboards), ERP Coordination.
      Education: B.S. Data Science from IIT Madras (Current), B.A. History from VBU.
      Certifications: Google Data Analytics, Excel for Data Analytics, IBM Data Foundations.
      
      Vinay's Projects:
      ${projectSummary}
      
      Your tone: Professional, analytical, but approachable. 
      Focus: Explain how Vinay's technical skills (Excel, MIS, Analytics) solve business problems like reducing holding periods or optimizing revenue via reporting.
      Keep responses concise (max 3 sentences) unless a detail is requested.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. How else can I help you today?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error: I am currently offline. Please check your internet connection and try again later.";
  }
};
