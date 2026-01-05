
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { portfolio } from '../data/portfolio';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { profile, expertise, stats, projects } = portfolio;

  const youtubeId = 'dQw4w9WgXcQ'; 

  return (
    <div className="flex flex-col grow">
      <div className="px-4 sm:px-6 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          
          <div className="flex flex-col gap-10 py-10 md:py-16 md:flex-row md:items-center">
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex flex-col gap-4 text-left items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-[#1e293b] rounded-full border border-slate-200 dark:border-slate-700">
                  <span className="size-2 rounded-full bg-primary"></span>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{profile.role}</span>
                </div>
                <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-7xl">
                  Analytical insights from <span className="text-primary">complex data</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-normal leading-relaxed max-w-xl">
                  {profile.description}
                </p>
              </div>
              
              {/* Button Container: Aligned in a single row on larger screens, wraps on smaller */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
                <button 
                  onClick={() => navigate('/projects')} 
                  className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-all text-white text-sm font-bold shadow-lg shadow-primary/20 min-w-[160px]"
                >
                  Explore Analysis
                  <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                </button>
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-sm font-bold shadow-sm dark:shadow-none min-w-[160px]"
                >
                  Watch Portfolio
                  <span className="material-symbols-outlined ml-2 text-lg">play_circle</span>
                </button>
                <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-sm font-bold shadow-sm dark:shadow-none min-w-[160px]">
                  Resume
                  <span className="material-symbols-outlined ml-2 text-lg">download</span>
                </button>
              </div>
            </div>
            
            <div className="w-full md:w-[45%] flex justify-center md:justify-end mt-12 md:mt-0">
              <div className="relative w-full aspect-[4/5] max-w-[380px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-slate-800">
                <div 
                  className="w-full h-full bg-cover bg-center grayscale-[0.2] dark:grayscale-[0.4]" 
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800')"}}
                ></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-200 dark:border-white/10 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xl">school</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Education</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">IIT Madras - Data Science</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KPI Stats Section - Rounded Card Style */}
          <div className="py-12 md:py-20">
             <div className="bg-white dark:bg-[#1a2230] rounded-[2.5rem] p-10 md:p-14 border border-slate-200 dark:border-slate-800/50 shadow-xl shadow-slate-200/50 dark:shadow-none">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center gap-2">
                      <p className="text-primary text-4xl md:text-5xl font-black tracking-tight leading-none">{stat.value}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap">{stat.label}</p>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-[#1a2230] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center group hover:border-primary transition-all shadow-sm dark:shadow-none">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  item.color === 'blue' ? 'bg-blue-100 dark:bg-blue-600/20' : 
                  item.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-600/20' : 'bg-orange-100 dark:bg-orange-600/20'
                }`}>
                  <span className={`material-symbols-outlined text-3xl ${
                    item.color === 'blue' ? 'text-blue-600 dark:text-blue-500' : 
                    item.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-500' : 'text-orange-600 dark:text-orange-500'
                  }`}>{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8 py-16">
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2">
                <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight">Featured Case Studies</h2>
                <p className="text-slate-500 text-sm">My work in MIS reporting and business intelligence.</p>
              </div>
              <Link to="/projects" className="text-primary text-xs font-bold hover:underline flex items-center gap-1 uppercase tracking-widest">
                View all projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(0, 2).map(project => (
                <div key={project.id} className="flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2230] group shadow-sm dark:shadow-none">
                  <div className="h-56 overflow-hidden relative">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                      style={{backgroundImage: `url('${project.image}')`}}
                    ></div>
                    <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-widest">Analytics</div>
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-500 text-sm leading-relaxed line-clamp-2">{project.desc}</p>
                    <Link to={`/projects/${project.id}`} className="mt-2 text-primary text-sm font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                      Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA Section */}
          <div className="py-20">
            <div className="rounded-[2.5rem] bg-slate-50 dark:bg-[#1a2230] border border-slate-200 dark:border-slate-800/50 p-12 md:p-16 text-center shadow-inner relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full -ml-16 -mb-16 blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              
              <h2 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-black mb-6 tracking-tight relative z-10">Ready to collaborate?</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed relative z-10">
                Looking for a data analyst with technical expertise and business sense? Let's discuss how my skills in MIS reporting and Excel automation can help your team.
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl h-14 px-10 bg-primary hover:bg-blue-600 transition-all text-white font-bold text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95"
                >
                  Contact Vinay
                  <span className="material-symbols-outlined ml-2">mail</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 text-white w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <iframe 
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title="Portfolio Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
