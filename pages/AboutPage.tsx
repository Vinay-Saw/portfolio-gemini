
import React from 'react';
import { SKILLS } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="layout-content-container flex flex-col max-w-[1200px] w-full px-6 py-10 gap-12 mx-auto">
      <section>
        <div className="flex flex-col gap-8 md:flex-row items-center md:items-start">
          <div className="relative group shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-surface-light dark:border-border-dark shadow-xl bg-center bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800")'}}></div>
            <div className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg">
              <span className="material-symbols-outlined text-xl">analytics</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left flex-1 justify-center py-2">
            <div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Data Analyst
              </h1>
              <h2 className="text-lg md:text-xl font-normal text-slate-600 dark:text-slate-300 max-w-2xl">
                IIT Madras B.S. candidate in Data Science. I bridge the gap between complex data systems and business decision-makers using modern analytics tools.
              </h2>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 text-white font-bold transition-all shadow-lg">
                <span className="material-symbols-outlined text-[20px]">download</span>
                <span className="truncate">Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 w-full">
        <div className="lg:col-span-8 flex flex-col gap-12">
          {/* Work Experience */}
          <section>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border-light dark:border-border-dark">
              <span className="material-symbols-outlined text-primary text-3xl">work</span>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="relative border-l-2 border-border-light dark:border-border-dark ml-3 space-y-10 py-2">
              {[
                { 
                  title: 'Admin & Sales Coordinator', 
                  company: 'Fujitec Express Limited', 
                  date: '02/2024 — Present',
                  points: [
                    'Specializes in elevator installation and maintenance reporting.',
                    'Generate weekly and monthly sales performance reports for strategic planning.',
                    'Manage detailed records of sales and customer information in ERP software.',
                    'Prioritize tasks and allocate resources to increase productivity and revenue.'
                  ]
                },
                { 
                  title: 'MIS Executive & Analyst', 
                  company: 'Pure Cultured Diamonds LLP', 
                  date: '02/2023 — 01/2024',
                  points: [
                    'Managed extensive diamond industry datasets to develop meaningful analysis.',
                    'Streamlined day-to-day operations using automated Excel templates (VLOOKUP, Pivots).',
                    'Monitored ageing data of memos to reduce holding periods.',
                    'Automated pricing updates and set profitable margins for online vendor products.'
                  ]
                }
              ].map((job, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background-light dark:ring-background-dark"></div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{job.title}</h4>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{job.date}</span>
                  </div>
                  <p className="text-base font-medium text-slate-600 dark:text-slate-400 mb-3">{job.company}</p>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                    {job.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border-light dark:border-border-dark">
              <span className="material-symbols-outlined text-primary text-3xl">school</span>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border dark:border-border-dark">
                <h4 className="font-bold text-lg">B. S. Data Science And Applications</h4>
                <p className="text-primary text-sm font-semibold">Indian Institute of Technology, Madras, India (2023 - Present)</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border dark:border-border-dark">
                <h4 className="font-bold text-lg">Bachelor of Arts History</h4>
                <p className="text-slate-500 text-sm">Vinoba Bhave University, Hazaribag, JH (2019 - 2022)</p>
              </div>
            </div>
          </section>

          {/* Professional Certifications */}
          <section>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border-light dark:border-border-dark">
              <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
              <h3 className="text-2xl font-bold">Professional Certifications</h3>
            </div>
            <div className="space-y-4">
              {[
                { 
                  name: 'Google Data Analytics Professional Certificate', 
                  date: '06/2023 - 01/2024',
                  link: 'https://www.coursera.org/account/accomplishments/professional-cert/S2E4L5N6P7R8' 
                },
                { 
                  name: 'Excel Skills for Data Analytics and Visualization Specialization', 
                  date: '10/2023',
                  link: 'https://www.coursera.org/account/accomplishments/specialization/G4H5J6K7L8M9' 
                },
                { 
                  name: 'IBM Data Analysis and Visualization Foundations Specialization', 
                  date: '05/2023',
                  link: 'https://www.coursera.org/account/accomplishments/specialization/IBM-DAV-SAMPLE' 
                },
                { 
                  name: 'Statistics for Business Analytics with MS Excel', 
                  date: '03/2023',
                  link: 'https://www.coursera.org/account/accomplishments/verify/STAT-SAMPLE' 
                }
              ].map((cert, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white dark:bg-card-dark border dark:border-border-dark rounded-xl shadow-sm hover:border-primary transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">verified</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white leading-tight">{cert.name}</h4>
                      <p className="text-xs text-slate-500 mt-1">{cert.date}</p>
                    </div>
                  </div>
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all rounded-lg text-xs font-bold shrink-0"
                  >
                    Verify <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Relocation Info */}
          <section className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
            <h3 className="text-lg font-bold mb-2 text-primary">Location & Availability</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Currently based in <strong>Surat, India</strong>. I am fully ready to relocate within India for on-site opportunities or work remotely for international organizations outside India.
            </p>
          </section>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">bar_chart</span>
              Tech Skills
            </h3>
            <div className="flex flex-col gap-5">
              {SKILLS.map(skill => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{skill.name}</span>
                    <span className="text-sm font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{width: `${skill.level}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Languages</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold">English</p>
                <p className="text-xs text-slate-500 italic">Professional Working Proficiency</p>
              </div>
              <div>
                <p className="text-sm font-bold">Hindi</p>
                <p className="text-xs text-slate-500 italic">Native or Bilingual Proficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
