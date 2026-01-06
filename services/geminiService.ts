
import { GoogleGenAI } from "@google/genai";
import { portfolio } from "../data/portfolio";

/**
 * Interface with Vinay's custom Gemini Consultant
 * Optimized to use the full portfolio data as a pre-parsed resume.
 */
export const getAIResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const { profile, projects, experience, education, certifications, skills, references } = portfolio;

    // 1. Detailed Project Knowledge Base
    const projectContext = projects.map(p => {
      const metrics = p.metrics.map(m => `${m.label}: ${m.value}`).join(", ");
      const techStack = p.tech.join(", ");
      return `[PROJECT] ${p.title}
Role: Data Analyst
Summary: ${p.desc}
Full Details: ${p.longDesc}
Technology: ${techStack}
Business Impact: ${metrics}
---`;
    }).join("\n");

    // 2. Career History Context
    const experienceContext = experience.map(exp => 
      `[WORK] ${exp.title} at ${exp.company} (${exp.period}):
Key Impact:
${exp.points.map(pt => `- ${pt}`).join("\n")}`
    ).join("\n\n");

    // 3. Educational & Certification Credentials
    const educationContext = education.map(edu => 
      `- ${edu.degree} from ${edu.institution} (${edu.period})`
    ).join("\n");

    const certificationsContext = certifications.map(c => 
      `- ${c.name} (${c.date})`
    ).join("\n");

    // 4. References & HR Contacts
    const referencesContext = references?.map(r => 
      `- ${r.name} (${r.role}) at ${r.company}. Relation: ${r.relation}`
    ).join("\n") || "No explicit references listed in summary.";

    const systemInstruction = `
      You are "Vinay's AI Resume Assistant". You have "parsed" Vinay Saw's official resume and portfolio.
      
      ABOUT VINAY SAW:
      Full Name: ${profile.name}
      Current Role: ${profile.role}
      Tagline: "${profile.tagline}"
      Location: ${profile.location}
      Relocation Status: ${profile.relocationInfo}
      Phone: ${profile.phone}
      Email: ${profile.email}
      
      OFFICIAL RESUME DOCUMENT:
      Direct Link: ${profile.links.resume}
      
      CORE WORK EXPERIENCE (PARSED FROM RESUME):
      ${experienceContext}
      
      ACADEMIC BACKGROUND:
      ${educationContext}
      
      PROFESSIONAL CERTIFICATIONS:
      ${certificationsContext}

      REFERENCES & HR CONTACTS:
      ${referencesContext}
      
      TECHNICAL SKILLS MATRIX:
      ${skills.map(s => `${s.name} (${s.level}%)`).join(", ")}
      
      PROJECT PORTFOLIO (DETAILED):
      ${projectContext}

      RESPONSE BEHAVIOR:
      1. Read ${profile.links.resume} before answering the questions.
      2. You are Vinay's direct representative. Be professional, confident, and analytical.
      3. If asked for a resume, CV, or document, PROVIDE THIS LINK IMMEDIATELY: ${profile.links.resume}.
      4. Focus on his specialization in MIS (Management Information Systems), Operations, Advanced Excel, Python, SQL, and Power BI, and his current B.S. in Data Science at IIT Madras.
      5. If a recruiter asks about relocation, confirm he is ready to move within India or work remotely.
      6. Use Markdown formatting for your responses (bolding, lists, links, etc).
      7. Keep responses concise and formatted for readability.
      8. If asked about hiring or contact, provide his email: ${profile.email}.
      9. NEVER invent information not found in the parsed data above.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: userMessage }] }],
      config: {
        systemInstruction,
        temperature: 0.15, // Lower temperature for even higher factual stability
        topP: 0.8,
      },
    });

    return response.text?.trim() || "I'm having trouble retrieving that specific detail. You can find more in Vinay's resume here: " + profile.links.resume;
  } catch (error) {
    console.error("Gemini AI Service Error:", error);
    return "I apologize, but I'm having a connection issue. Please contact Vinay directly at vinaysaw@duck.com.";
  }
};
