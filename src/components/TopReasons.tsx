import React from 'react';
import {
  Globe,
  FileCheck2,
  LineChart,
  Users2,
  Puzzle,
  Workflow
} from 'lucide-react';
import { TOP_REASONS } from '../data/faveoData';

export const TopReasons: React.FC = () => {
  const getReasonIcon = (iconType: string) => {
    switch (iconType) {
      case 'solution':
        return (
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs">
            <Globe className="w-6 h-6 text-blue-600" />
          </div>
        );
      case 'itil':
        return (
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100 shadow-2xs">
            <FileCheck2 className="w-6 h-6 text-amber-600" />
          </div>
        );
      case 'analytics':
        return (
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs">
            <LineChart className="w-6 h-6 text-emerald-600" />
          </div>
        );
      case 'global':
        return (
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100 shadow-2xs">
            <Users2 className="w-6 h-6 text-indigo-600" />
          </div>
        );
      case 'sizes':
        return (
          <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100 shadow-2xs">
            <Puzzle className="w-6 h-6 text-orange-600" />
          </div>
        );
      case 'integration':
        return (
          <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 border border-cyan-100 shadow-2xs">
            <Workflow className="w-6 h-6 text-cyan-600" />
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
            <Globe className="w-6 h-6" />
          </div>
        );
    }
  };

  return (
    <section id="why-faveo" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#00aeef]">
            Why IT Leaders Choose Faveo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight text-balance">
            Top Reasons to Choose Faveo for Your ITSM Solutions
          </h2>
          <p className="text-sm text-slate-500">
            Engineered for reliability, enterprise scale, transparent compliance, and rapid adoption
          </p>
        </div>

        {/* 6 Grid Items from screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {TOP_REASONS.map((reason) => (
            <div
              key={reason.id}
              className="flex items-start gap-5 p-5 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-all text-left group"
            >
              {getReasonIcon(reason.iconType)}
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
