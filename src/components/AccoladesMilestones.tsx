import React from 'react';
import { Star } from 'lucide-react';
import { MILESTONE_METRICS, CUSTOMER_STORIES } from '../data/faveoData';

export const AccoladesMilestones: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 4 Milestone Stats Banner matching Screenshot 9 */}
        <div className="bg-gradient-to-r from-[#0082c8] to-[#00aeef] rounded-2xl p-8 sm:p-10 shadow-lg text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-blue-500/60">
            {MILESTONE_METRICS.map((metric, idx) => (
              <div key={idx} className={`space-y-1.5 ${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''}`}>
                <div className="text-4xl sm:text-5xl font-black tracking-tight font-mono">
                  {metric.value}
                </div>
                <div className="text-sm font-bold uppercase tracking-wider text-blue-100">
                  {metric.label}
                </div>
                <div className="text-xs text-blue-200">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Proof: "What Do Our Valuable Customers Say About Us?" */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              What Do Our Valuable Customers Say About Us?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Enterprise testimonials from retail, banking, hospitality, and supply chain leaders
            </p>
          </div>

          {/* Customer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUSTOMER_STORIES.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between text-left space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-black tracking-tight text-slate-900 font-mono">
                      {story.logoText}
                    </span>
                    <span className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-semibold">
                      {story.metric}
                    </span>
                  </div>

                  <div className="flex gap-1 text-amber-400 my-3">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    &quot;{story.quote}&quot;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-900">{story.author}</div>
                  <div className="text-[11px] text-slate-500">{story.role}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{story.sector}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
