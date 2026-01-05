
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../services/constants';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <Navigate to="/projects" />;

  return (
    <div className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
      <aside className="hidden lg:block lg:col-span-3 relative">
        <div className="sticky top-28 space-y-8">
          <div>
            <Link to="/projects" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary mb-6 transition-colors">
              <span className="material-symbols-outlined text-lg mr-1">arrow_back</span>
              Back to Projects
            </Link>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 pl-3">Sections</h3>
            <nav className="space-y-1 border-l-2 border-slate-200 dark:border-slate-800">
              <a className="block pl-4 py-2 text-sm border-l-2 border-primary -ml-0.5 text-primary font-medium" href="#overview">Overview</a>
              <a className="block pl-4 py-2 text-sm border-l-2 border-transparent hover:border-slate-400 text-slate-600 dark:text-slate-400 hover:text-slate-900 transition-colors" href="#methodology">Approach</a>
            </nav>
          </div>
          <div className="bg-card-light dark:bg-card-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Project Summary</h4>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Role</span><span className="font-medium dark:text-slate-200">Data Analyst</span></div>
              <div className="flex justify-between">
                <span className="text-slate-500">Focus</span>
                <span className="font-medium dark:text-slate-200 text-right">{project.categories.join(', ')}</span>
              </div>
              <div className="flex justify-between"><span className="text-slate-500">Status</span><span className="font-medium text-emerald-500">Completed</span></div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <h5 className="text-xs font-semibold text-slate-500 mb-3 uppercase">Stack</h5>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 uppercase tracking-tighter">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      <article className="col-span-1 lg:col-span-9 space-y-12">
        <header className="space-y-6" id="overview">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.categories.map(cat => (
              <span key={cat} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 tracking-wider uppercase">{cat}</span>
            ))}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 tracking-wider uppercase">
              <span className="size-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
              Project Status: Completed
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 tracking-wider uppercase">Verified</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">{project.title}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">{project.desc}</p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white text-base font-medium rounded-lg shadow-sm hover:bg-blue-600 transition-all">
              <span className="material-symbols-outlined mr-2">description</span> Full Report
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-50 transition-all">
              <span className="material-symbols-outlined mr-2 text-sm">visibility</span> View Dashboard
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {project.metrics.map(m => (
            <div key={m.label} className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <span className="material-symbols-outlined">{m.icon}</span>
              </div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{m.value}</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mt-1">{m.label}</p>
            </div>
          ))}
        </section>

        <hr className="border-slate-200 dark:border-slate-800"/>
        
        <section id="content" className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <span className="w-1.5 h-8 bg-primary rounded-full mr-3"></span> Project Objective
          </h2>
          <p className="leading-relaxed text-lg mb-8">{project.longDesc}</p>
          
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center" id="methodology">
            <span className="w-1.5 h-8 bg-primary rounded-full mr-3"></span> Analytical Approach
          </h2>
          <div className="space-y-4">
             <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border dark:border-border-dark">
                <h4 className="font-bold mb-2">1. Data Preparation & Cleaning</h4>
                <p>Standardized inconsistent ERP data entries and structured large datasets for streamlined reporting. Utilized Advanced Excel for outlier detection and missing value imputation.</p>
             </div>
             <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border dark:border-border-dark">
                <h4 className="font-bold mb-2">2. Business Logic Integration</h4>
                <p>Collaborated with stakeholders to define key performance indicators (KPIs) and translated complex business requirements into automated MIS templates.</p>
             </div>
          </div>
        </section>

        <footer className="pt-8 mt-12 border-t border-slate-200 dark:border-slate-800">
          <Link to="/projects" className="group flex items-center p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all w-full sm:w-auto">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary mr-3 transition-colors">arrow_back</span>
            <div>
              <span className="block text-xs text-slate-500 uppercase">Back to List</span>
              <span className="block font-semibold text-slate-900 dark:text-white">All Projects</span>
            </div>
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default ProjectDetailPage;
