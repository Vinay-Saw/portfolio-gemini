
export interface Project {
  id: string;
  title: string;
  category: 'ML' | 'NLP' | 'Vision' | 'Analytics' | 'Engineering' | 'Finance' | 'GenAI';
  image: string;
  desc: string;
  longDesc: string;
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
