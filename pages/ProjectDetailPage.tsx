
import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../services/constants';

// Declare Prism globally since we're loading it via CDN in index.html
declare const Prism: any;

const CodeBlock = ({ title, name, snippet, language }: { title?: string, name?: string, snippet: string, language?: string }) => {
  // Infer language if not explicitly provided
  const inferredLang = language || (name?.endsWith('.py') ? 'python' : name?.endsWith('.sql') ? 'sql' : 'python');

  return (
    <div className="mt-8 mb-6 group">
      {title && (
        <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm font-bold">terminal</span>
          {title}
        </h5>
      )}
      <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0d1117] shadow-lg transition-all duration-300 group-hover:shadow-primary/5 group-hover:border-primary/30">
        {/* Adaptive Header */}
        <div className="bg-slate-50 dark:bg-[#161b22] px-4 py-2.5 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/60 dark:bg-red-500/40"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400/60 dark:bg-amber-500/40"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400/60 dark:bg-emerald-500/40"></div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{name || 'script.py'}</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[8px] font-black uppercase tracking-tighter">{inferredLang}</span>
          </div>
          <button 
            onClick={() => {
              navigator.clipboard.writeText(snippet);
              // Simplified feedback
              const btn = document.getElementById(`copy-${name}`);
              if (btn) btn.innerText = 'check';
              setTimeout(() => { if (btn) btn.innerText = 'content_copy'; }, 2000);
            }}
            className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1.5 p-1 rounded-md hover:bg-slate-200 dark:hover:bg-white/5"
            title="Copy Code"
          >
            <span id={`copy-${name}`} className="material-symbols-outlined text-sm">content_copy</span>
            <span className="text-[10px] uppercase font-bold hidden sm:inline">Copy</span>
          </button>
        </div>
        
        {/* Code Content - Always dark for better code readability with syntax highlighting */}
        <pre className={`p-6 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-slate-300 bg-[#0d1117] scrollbar-thin scrollbar-thumb-slate-700 language-${inferredLang}`}>
          <code className={`language-${inferredLang}`}>{snippet}</code>
        </pre>
      </div>
    </div>
  );
};

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);
  const [activeSection, setActiveSection] = useState('overview');

  if (!project) return <Navigate to="/projects" />;

  useEffect(() => {
    // Trigger Prism highlighting after render
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
    
    const sections = ['overview', 'methodology', 'share'];
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [id, project]);

  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(`Check out Vinay Saw's data project: ${project.title}`);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${shareTitle}%20${encodeURIComponent(shareUrl)}`
  };

  const NavLink = ({ target, label }: { target: string, label: string }) => {
    const isActive = activeSection === target;
    return (
      <a 
        href={`#${target}`}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
        }}
        className={`block pl-4 py-2 text-sm border-l-2 transition-all duration-200 ${
          isActive 
            ? 'border-primary -ml-0.5 text-primary font-bold' 
            : 'border-transparent text-slate-600 dark:text-slate-400 hover:border-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        {label}
      </a>
    );
  };

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
              <NavLink target="overview" label="Overview" />
              <NavLink target="methodology" label="Approach" />
              <NavLink target="share" label="Share Project" />
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
        <header className="space-y-6 scroll-mt-28" id="overview">
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
          
          {project.codeSnippet && (
            <CodeBlock 
              title={project.codeSnippetTitle} 
              name={project.codeSnippetName} 
              snippet={project.codeSnippet}
              language={project.codeSnippetLanguage}
            />
          )}

          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.fullReportUrl && (
              <a 
                href={project.fullReportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white text-base font-medium rounded-lg shadow-sm hover:bg-blue-600 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined mr-2">description</span> Full Report
              </a>
            )}
            {project.dashboardUrl && (
              <a 
                href={project.dashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined mr-2 text-sm">visibility</span> View Dashboard
              </a>
            )}
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
        
        <section id="methodology" className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 scroll-mt-28 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <span className="w-1.5 h-8 bg-primary rounded-full mr-3"></span> Project Objective
            </h2>
            <p className="leading-relaxed text-lg">{project.longDesc}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <span className="w-1.5 h-8 bg-primary rounded-full mr-3"></span> Analytical Approach
            </h2>
            <div className="space-y-10">
               {project.approach.map((step, idx) => (
                 <div key={idx} className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border dark:border-border-dark shadow-sm">
                    <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{idx + 1}. {step.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{step.content}</p>
                    
                    {step.image && (
                      <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900">
                        <img 
                          src={step.image} 
                          alt={`Visual for ${step.title}`} 
                          className="w-full h-auto object-cover max-h-[400px]"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {step.codeSnippet && (
                      <CodeBlock 
                        title={step.codeSnippetTitle} 
                        name={step.codeSnippetName} 
                        snippet={step.codeSnippet}
                        language={step.codeSnippetLanguage}
                      />
                    )}
                 </div>
               ))}
            </div>
          </div>
        </section>

        <section id="share" className="pt-12 border-t border-slate-200 dark:border-slate-800 scroll-mt-28">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Share this Analysis</h3>
          <div className="flex flex-wrap gap-4">
            <a 
              href={shareLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0077b5] text-white rounded-lg hover:brightness-110 transition-all font-semibold text-sm"
            >
              <i className="fab fa-linkedin text-lg"></i> LinkedIn
            </a>
            <a 
              href={shareLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1da1f2] text-white rounded-lg hover:brightness-110 transition-all font-semibold text-sm"
            >
              <i className="fab fa-twitter text-lg"></i> Twitter
            </a>
            <a 
              href={shareLinks.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25d366] text-white rounded-lg hover:brightness-110 transition-all font-semibold text-sm"
            >
              <i className="fab fa-whatsapp text-lg"></i> WhatsApp
            </a>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(shareUrl);
                alert('Project link copied to clipboard!');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all font-semibold text-sm border border-slate-200 dark:border-slate-700"
            >
              <span className="material-symbols-outlined text-lg">link</span> Copy Link
            </button>
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
