
import { Project, Skill } from '../types';

export const portfolio = {
  "profile": {
    "name": "Vinay Saw",
    "firstName": "Vinay",
    "lastName": "Saw",
    "role": "Data Analyst",
    "email": "vinaysaw@duck.com",
    "phone": "+91 737******48",
    "location": "Surat, India",
    "tagline": "Analytical insights from complex data",
    "description": "Hi, I'm Vinay K. Saw. I'm an IIT Madras Data Science student with experience managing large datasets, creating daily reports, and optimizing business processes through advanced Excel automation.",
    "relocationInfo": "Ready to relocate within India or work remotely outside India.",
    "links": {
      "linkedin": "https://linkedin.com/in/iitianscientist",
      "github": "https://github.com/vinaysaw",
      "resume": "#"
    }
  },
  "education": [
    {
      "degree": "B. S. Data Science And Applications",
      "institution": "Indian Institute of Technology, Madras, India",
      "period": "2023 - Present",
      "short": "IIT Madras - Data Science"
    },
    {
      "degree": "Bachelor of Arts History",
      "institution": "Vinoba Bhave University, Hazaribag, JH",
      "period": "2019 - 2022"
    }
  ],
  "experience": [
    {
      "title": "Admin & Sales Coordinator",
      "company": "Fujitec Express Limited",
      "period": "02/2024 — Present",
      "points": [
        "Specializes in elevator installation and maintenance reporting.",
        "Generate weekly and monthly sales performance reports for strategic planning.",
        "Manage detailed records of sales and customer information in ERP software.",
        "Prioritize tasks and allocate resources to increase productivity and revenue."
      ]
    },
    {
      "title": "MIS Executive & Analyst",
      "company": "Pure Cultured Diamonds LLP",
      "period": "02/2023 — 01/2024",
      "points": [
        "Managed extensive diamond industry datasets to develop meaningful analysis.",
        "Streamlined day-to-day operations using automated Excel templates (VLOOKUP, Pivots).",
        "Monitored ageing data of memos to reduce holding periods.",
        "Automated pricing updates and set profitable margins for online vendor products."
      ]
    }
  ],
  "expertise": [
    {
      "title": "Machine Learning",
      "desc": "Supervised & unsupervised learning, deep learning, and model optimization",
      "icon": "smart_toy",
      "color": "blue"
    },
    {
      "title": "Data Visualization",
      "desc": "Interactive dashboards, statistical charts, and compelling data stories",
      "icon": "bar_chart",
      "color": "emerald"
    },
    {
      "title": "Statistical Analysis",
      "desc": "Hypothesis testing, regression analysis, and predictive modeling",
      "icon": "query_stats",
      "color": "orange"
    }
  ],
  "stats": [
    { "value": "1.5+", "label": "Years Exp." },
    { "value": "Google", "label": "Certified" },
    { "value": "IIT M", "label": "B.S. Program" },
    { "value": "700k+", "label": "Data Points" }
  ],
  "certifications": [
    { 
      "name": "Google Data Analytics Professional Certificate", 
      "date": "06/2023 - 01/2024",
      "url": "https://www.coursera.org/account/accomplishments/professional-cert/S2E4L5N6P7R8" 
    },
    { 
      "name": "Excel Skills for Data Analytics and Visualization Specialization", 
      "date": "10/2023",
      "url": "https://www.coursera.org/account/accomplishments/specialization/G4H5J6K7L8M9" 
    },
    { 
      "name": "IBM Data Analysis and Visualization Foundations Specialization", 
      "date": "05/2023",
      "url": "https://www.coursera.org/account/accomplishments/specialization/IBM-DAV-SAMPLE" 
    },
    { 
      "name": "Statistics for Business Analytics with MS Excel", 
      "date": "03/2023",
      "url": "https://www.coursera.org/account/accomplishments/verify/STAT-SAMPLE" 
    }
  ],
  "projects": [
    {
      "id": "1",
      "title": "Diamond Industry MIS Reporting",
      "category": "Analytics",
      "image": "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800",
      "desc": "Streamlined day-to-day operations for a lab-grown diamond manufacturer using advanced Excel automation.",
      "longDesc": "At Pure Cultured Diamonds LLP, I managed extensive datasets in the diamond industry. I developed automated Excel templates utilizing VLOOKUP, pivot tables, and conditional formatting to reduce workforce requirements and create meaningful reports for international sales teams.",
      "tags": ["Excel", "MIS", "Data Analysis"],
      "tech": ["Advanced Excel", "VLOOKUP", "Pivot Tables", "ERP Software"],
      "metrics": [
        { "label": "Efficiency", "value": "Streamlined", "icon": "groups" },
        { "label": "Industry", "value": "Diamond", "icon": "diamond" },
        { "label": "Tools", "value": "MIS", "icon": "analytics" }
      ]
    },
    {
      "id": "2",
      "title": "Sales Performance Analytics",
      "category": "Analytics",
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      "desc": "Weekly and monthly sales performance reporting for Fujitec Express Limited to drive revenue growth.",
      "longDesc": "Managed customer records and tracked performance metrics for an elevator installation specialist. By providing weekly and monthly data-driven recommendations, I supported the sales team in prioritizing tasks and allocating resources efficiently.",
      "tags": ["Sales Analysis", "ERP", "Reporting"],
      "tech": ["ERP Software", "Excel", "Data Visualization"],
      "metrics": [
        { "label": "Impact", "value": "Increased", "icon": "trending_up" },
        { "label": "Frequency", "value": "Weekly", "icon": "calendar_month" },
        { "label": "System", "value": "ERP", "icon": "database" }
      ]
    }
  ] as Project[],
  "skills": [
    // Programming
    { "name": "Python", "level": 85, "category": "Programming" },
    { "name": "SQL", "level": 90, "category": "Programming" },
    { "name": "DAX", "level": 75, "category": "Programming" },
    { "name": "Basic R", "level": 60, "category": "Programming" },
    // Tools
    { "name": "MS Excel", "level": 98, "category": "Tools" },
    { "name": "MS Power BI", "level": 85, "category": "Tools" },
    { "name": "PostGre SQL", "level": 80, "category": "Tools" },
    { "name": "LLM Prompting", "level": 90, "category": "Tools" },
    // Soft Skills
    { "name": "Team Collaboration", "level": 95, "category": "Soft Skills" },
    { "name": "Communication", "level": 90, "category": "Soft Skills" },
    { "name": "Presentation", "level": 85, "category": "Soft Skills" },
    { "name": "Story Telling", "level": 90, "category": "Soft Skills" }
  ] as Skill[]
};
