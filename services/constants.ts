
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Diamond Industry MIS Reporting',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800',
    desc: 'Streamlined day-to-day operations for a lab-grown diamond manufacturer using advanced Excel automation.',
    longDesc: 'At Pure Cultured Diamonds LLP, I managed extensive datasets in the diamond industry. I developed automated Excel templates utilizing VLOOKUP, pivot tables, and conditional formatting to reduce workforce requirements and create meaningful reports for international sales teams.',
    tags: ['Excel', 'MIS', 'Data Analysis'],
    tech: ['Advanced Excel', 'VLOOKUP', 'Pivot Tables', 'ERP Software'],
    credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/S2E4L5N6P7R8',
    metrics: [
      { label: 'Workforce Efficiency', value: 'Streamlined', icon: 'groups' },
      { label: 'Industry', value: 'Diamond', icon: 'diamond' },
      { label: 'Tools Used', value: 'MIS', icon: 'analytics' }
    ]
  },
  {
    id: '2',
    title: 'Sales Performance Analytics',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    desc: 'Weekly and monthly sales performance reporting for Fujitec Express Limited to drive revenue growth.',
    longDesc: 'Managed customer records and tracked performance metrics for an elevator installation specialist. By providing weekly and monthly data-driven recommendations, I supported the sales team in prioritizing tasks and allocating resources efficiently.',
    tags: ['Sales Analysis', 'ERP', 'Reporting'],
    tech: ['ERP Software', 'Excel', 'Data Visualization', 'Outlook'],
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/G4H5J6K7L8M9',
    metrics: [
      { label: 'Revenue Impact', value: 'Increased', icon: 'trending_up' },
      { label: 'Data Points', value: 'Weekly/Monthly', icon: 'calendar_month' },
      { label: 'System', value: 'ERP', icon: 'database' }
    ]
  },
  {
    id: '3',
    title: 'Customer Ageing Data Analysis',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800',
    desc: 'Monitoring ageing data of customer and vendor memos to improve operational holding periods.',
    longDesc: 'Implemented a monitoring system for ageing data, which significantly contributed to reduced holding periods for customer and vendor memos. This analysis improved overall performance by identifying bottlenecks in the transaction pipeline.',
    tags: ['Data Monitoring', 'Performance', 'Excel'],
    tech: ['Excel', 'Data Analytics', 'Reporting'],
    credentialUrl: 'https://www.credly.com/badges/sample-credential-id',
    metrics: [
      { label: 'Holding Period', value: 'Reduced', icon: 'timer' },
      { label: 'Process', value: 'Optimization', icon: 'settings' },
      { label: 'Focus', value: 'Vendor Memos', icon: 'assignment' }
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Advanced MS Excel', level: 95, category: 'Core' },
  { name: 'Data Visualization', level: 85, category: 'Core' },
  { name: 'Data Analytics', level: 80, category: 'Core' },
  { name: 'Basic Python & R', level: 65, category: 'Languages' },
  { name: 'MS Power BI', level: 75, category: 'Visualization' },
  { name: 'Basic Tableau', level: 70, category: 'Visualization' },
  { name: 'ERP Software', level: 85, category: 'Systems' },
  { name: 'Outlook & Word', level: 90, category: 'General' }
];
