
export interface Project {
  id: string;
  title: string;
  categories: ('ML' | 'NLP' | 'Vision' | 'Analytics' | 'Ecommerce' | 'Finance' | 'GenAI')[];
  image: string;
  desc: string;
  longDesc: string;
  approach: { 
    title: string; 
    content: string;
    image?: string; // New field for approach-specific visuals
    codeSnippetTitle?: string;
    codeSnippetName?: string;
    codeSnippetLanguage?: 'python' | 'sql' | 'javascript' | 'json';
    codeSnippet?: string;
  }[];
  codeSnippetTitle?: string;
  codeSnippetName?: string;
  codeSnippetLanguage?: 'python' | 'sql' | 'javascript' | 'json';
  codeSnippet?: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
    icon: string;
  }[];
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  credentialUrl?: string;
  fullReportUrl?: string; // New field for project report
  dashboardUrl?: string;   // New field for interactive dashboard
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
