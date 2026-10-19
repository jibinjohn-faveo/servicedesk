import React, { useState } from 'react';
import { Plus, Minus, Search, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faveoData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
  });

  const displayedFaqs = showAllFaqs ? filteredFaqs : filteredFaqs.slice(0, 5);

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title matching screenshot */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            FAQs
          </h2>
          <p className="text-sm text-slate-500">
            Everything you need to know about Faveo Service Desk features, architecture, and deployments
          </p>

          {/* Quick search input */}
          <div className="pt-2 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
            />
          </div>
        </div>

        {/* FAQs Accordion List matching screenshot */}
        <div className="space-y-3">
          {displayedFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-slate-200/90 rounded-lg overflow-hidden bg-white transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Read More FAQs Button matching screenshot */}
        {!showAllFaqs && filteredFaqs.length > 5 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllFaqs(true)}
              className="px-6 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 rounded-lg shadow-xs cursor-pointer inline-flex items-center gap-2 transition-all uppercase tracking-wider"
            >
              <span>Read More FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
