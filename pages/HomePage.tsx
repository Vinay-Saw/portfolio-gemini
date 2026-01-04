
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Replace this ID with your actual YouTube video ID
  const youtubeId = 'dQw4w9WgXcQ'; 

  const expertise = [
    {
      title: 'Machine Learning',
      desc: 'Supervised & unsupervised learning, deep learning, and model optimization',
      icon: 'smart_toy',
      gradient: 'from-blue-500/20 to-purple-500/20',
      iconColor: 'text-blue-500'
    },
    {
      title: 'Data Visualization',
      desc: 'Interactive dashboards, statistical charts, and compelling data stories',
      icon: 'bar_chart',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-500'
    },
    {
      title: 'Statistical Analysis',
      desc: 'Hypothesis testing, regression analysis, and predictive modeling',
      icon: 'query_stats',
      gradient: 'from-orange-500/20 to-rose-500/20',
      iconColor: 'text-orange-500'
    }
  ];

  return (
    <div className="flex flex-col grow">
      <div className="px-6 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          {/* Hero Section */}
          <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center">
            <div className="flex flex-col gap-6 flex-1 md:justify-center">
              <div className="flex flex-col gap-2 text-center md:text-left items-center md:items-start">
                <div className="inline-flex items-center gap-2 px-2 py-1 bg-primary/10 rounded-full w-fit mb-2 border border-primary/20">
                  <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Data Analyst</span>
                </div>
                <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
                  Analytical insights from <span className="text-primary">complex data</span>
                </h1>
                <h2 className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed mt-4 max-w-lg">
                  Hi, I'm Vinay K. Saw. I'm an IIT Madras Data Science student with experience managing large datasets, creating daily reports, and optimizing business processes through advanced Excel automation.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:justify-center md:justify-start gap-4 mt-4">
                <button 
                  onClick={() => navigate('/projects')} 
                  className="w-full sm:w-auto flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/25"
                >
                  <span className="truncate">Explore Analysis</span>
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </button>
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="w-full sm:w-auto flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-card-dark border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-base font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Watch Portfolio</span>
                  <span className="material-symbols-outlined ml-2 text-sm">play_circle</span>
                </button>
                <button className="w-full sm:w-auto flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Resume</span>
                  <span className="material-symbols-outlined ml-2 text-sm">download</span>
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full z-0 transform translate-x-10 translate-y-10"></div>
              <div className="relative z-10 w-full aspect-square max-w-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-800">
                <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800')"}}></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-dark/80 to-transparent">
                  <div className="flex items-center gap-2 p-3 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-white/10">
                    <span className="material-symbols-outlined text-primary">school</span>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500 dark:text-gray-400">Education</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">IIT Madras - Data Science</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Tiles */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertise.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-card-dark rounded-2xl p-8 border border-gray-200 dark:border-border-dark flex flex-col items-center text-center group hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className={`material-symbols-outlined ${item.iconColor} text-3xl`}>{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="py-10 border-y border-gray-200 dark:border-[#282e39] my-10">
            <div className="flex flex-wrap gap-4 justify-between">
              {[
                { val: '1+', label: 'Year Experience' },
                { val: '4+', label: 'Certifications' },
                { val: 'IIT M', label: 'B.S. Program' },
                { val: '700k+', label: 'Records Managed' }
              ].map((stat, i) => (
                <React.Fragment key={stat.label}>
                  <div className="flex min-w-[140px] flex-1 flex-col gap-1 text-center sm:text-left">
                    <p className="text-primary tracking-tight text-3xl md:text-4xl font-black leading-tight">{stat.val}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-normal uppercase tracking-wide">{stat.label}</p>
                  </div>
                  {i < 3 && <div className="hidden sm:block w-px bg-gray-200 dark:bg-[#282e39]"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Featured Projects Preview */}
          <div className="flex flex-col gap-10 py-10">
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-4">
                <h2 className="text-gray-900 dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight">Key Projects</h2>
                <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal">My work in MIS reporting and business intelligence.</p>
              </div>
              <Link to="/projects" className="hidden md:flex items-center text-primary font-bold hover:underline">
                View all projects <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.slice(0, 2).map(project => (
                <div key={project.id} className="flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] hover:shadow-xl transition-shadow group">
                  <div className="h-48 overflow-hidden relative">
                    <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: `url('${project.image}')`}}></div>
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">{project.category}</div>
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{project.desc}</p>
                    <Link to={`/projects/${project.id}`} className="mt-2 text-primary text-sm font-bold self-start flex items-center gap-1 group-hover:gap-2 transition-all">
                      Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="py-10 md:py-20">
            <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-background-dark border border-gray-200 dark:border-[#3b4354]">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/10 dark:bg-primary/20 blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600/5 dark:bg-blue-600/10 blur-[80px]"></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 py-16 text-center">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Ready to collaborate?</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed">
                    Looking for a data analyst with technical expertise and business sense? Let's connect.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                  <Link to="/contact" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary/90 transition-colors text-white text-base font-bold leading-normal shadow-lg shadow-primary/25">
                    Contact Vinay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-[1100] bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
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
