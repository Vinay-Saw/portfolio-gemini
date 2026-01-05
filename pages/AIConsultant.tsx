
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hi! I'm Vinay's AI consultant. Ask me anything about his projects or how his data analyst skills can help your business." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-80 md:w-96 bg-white dark:bg-card-dark rounded-2xl shadow-2xl border border-border-light dark:border-border-dark flex flex-col h-[500px] overflow-hidden">
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">smart_toy</span>
              <span className="font-bold">Vinay's AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-80">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t dark:border-border-dark bg-slate-50 dark:bg-background-dark/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about a project..."
                className="flex-1 bg-white dark:bg-slate-900 border dark:border-border-dark rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary text-white p-2 rounded-xl hover:opacity-90 disabled:opacity-50"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        >
          <span className="material-symbols-outlined text-3xl">chat_bubble</span>
        </button>
      )}
    </div>
  );
};

export default AIConsultant;
