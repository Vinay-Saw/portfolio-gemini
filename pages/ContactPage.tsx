
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex-grow flex justify-center py-8 px-4 sm:px-6 lg:px-12">
      <div className="layout-content-container flex flex-col w-full max-w-[1100px] gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 pt-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">Get In Touch</h1>
              <p className="text-slate-600 dark:text-text-secondary text-lg font-normal leading-relaxed">
                Looking for a dedicated Data Analyst with proficiency in MIS and ERP management? Feel free to reach out via email or phone.
              </p>
            </div>
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark hover:border-primary/50 transition-colors group shadow-sm">
                <div className="flex items-center justify-center size-10 rounded-lg bg-slate-100 dark:bg-background-dark text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 dark:text-text-secondary text-sm font-medium">Email</span>
                  <a href="mailto:vinaysaw@duck.com" className="text-slate-900 dark:text-white text-base font-semibold hover:text-primary transition-colors">vinaysaw@duck.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark hover:border-primary/50 transition-colors group shadow-sm">
                <div className="flex items-center justify-center size-10 rounded-lg bg-slate-100 dark:bg-background-dark text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 dark:text-text-secondary text-sm font-medium">Phone</span>
                  <span className="text-slate-900 dark:text-white text-base font-semibold">+91 737******48</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark hover:border-primary/50 transition-colors group shadow-sm">
                <div className="flex items-center justify-center size-10 rounded-lg bg-slate-100 dark:bg-background-dark text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 dark:text-text-secondary text-sm font-medium">Location</span>
                  <span className="text-slate-900 dark:text-white text-base font-semibold">Surat, India</span>
                  <span className="text-slate-500 text-xs mt-1">Ready to relocate within India or work remotely outside India.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark p-6 sm:p-8 shadow-xl dark:shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-black">Message Sent!</h3>
                <p className="text-slate-500">Vinay will get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="text-primary font-bold">New Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">Hire Me</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col flex-1">
                    <p className="text-slate-700 dark:text-white text-sm font-medium leading-normal pb-2">Name</p>
                    <input required className="form-input flex w-full min-w-0 flex-1 rounded-lg text-slate-900 dark:text-white border border-gray-200 dark:border-input-border bg-slate-50 dark:bg-background-dark focus:border-primary h-12 px-4 text-base font-normal transition-all" placeholder="John Doe" type="text"/>
                  </label>
                  <label className="flex flex-col flex-1">
                    <p className="text-slate-700 dark:text-white text-sm font-medium leading-normal pb-2">Email</p>
                    <input required className="form-input flex w-full min-w-0 flex-1 rounded-lg text-slate-900 dark:text-white border border-gray-200 dark:border-input-border bg-slate-50 dark:bg-background-dark focus:border-primary h-12 px-4 text-base font-normal transition-all" placeholder="john@example.com" type="email"/>
                  </label>
                </div>
                <label className="flex flex-col w-full">
                  <p className="text-slate-700 dark:text-white text-sm font-medium leading-normal pb-2">Inquiry</p>
                  <textarea required className="form-textarea flex w-full min-w-0 flex-1 rounded-lg text-slate-900 dark:text-white border border-gray-200 dark:border-input-border bg-slate-50 dark:bg-background-dark focus:border-primary min-h-[160px] p-4 text-base font-normal transition-all" placeholder="How can I help you today?"></textarea>
                </label>
                <button className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-4 bg-primary hover:bg-blue-600 text-white text-base font-bold transition-all transform active:scale-[0.98]" type="submit">
                  <span className="truncate">Send Inquiry</span>
                  <span className="material-symbols-outlined ml-2 text-sm">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
