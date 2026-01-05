
import React, { useState, useMemo, memo } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../services/constants';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const categories = useMemo(() => ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))], []);

  const filteredProjects = useMemo(() => PROJECTS.filter(p => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.desc.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  }), [filter, search]);

  return (
    <div className="container mx-auto max-w-[1200px] px-4 md:px-6 py-10 md:py-16">
      <div className="flex flex-col gap-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">My Projects</h2>
            <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
              Explore a collection of my data analysis work, featuring automated MIS reports, industry analytics, and business intelligence projects.
            </p>
          </div>
          <div className="w-full md:w-auto min-w-[300px]">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
              </div>
              <input 
                aria-label="Search through projects"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" 
                placeholder="Search projects..." 
                type="text"
              />
            </div>
          </div>
        </div>
        <nav className="flex flex-wrap gap-3" aria-label="Project Categories">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-gray-300 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list">
        {filteredProjects.length > 0 ? filteredProjects.map(proj => (
          <article 
            key={proj.id} 
            role="listitem"
            className="group relative flex flex-col bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img 
                src={proj.image}
                alt={`Screenshot of ${proj.title}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-4 right-4 z-20">
                <span className="px-2 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded uppercase tracking-wider">{proj.category}</span>
              </div>
            </div>
            <div className="flex flex-col flex-1 p-5 md:p-6">
              <div className="flex gap-2 mb-3">
                {proj.tags.slice(0, 2).map(t => (
                  <span key={t} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-primary transition-colors">{proj.title}</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 mb-6 flex-1 line-clamp-3">{proj.desc}</p>
              <Link to={`/projects/${proj.id}`} className="flex items-center justify-center h-10 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors active:scale-95">
                View Case Study
              </Link>
            </div>
          </article>
        )) : (
          <div className="col-span-full py-20 text-center">
            <span className="material-symbols-outlined text-5xl text-slate-300 mb-4">search_off</span>
            <p className="text-slate-500">No projects found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(ProjectsPage);
