import React from 'react';
import {
  HeartPulse,
  GraduationCap,
  Building2,
  ShoppingBag,
  Landmark,
  Factory,
  Server,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { INDUSTRIES } from '../data/faveoData';

interface WhoWeHelpProps {
  onOpenDemo?: () => void;
}

export const WhoWeHelp: React.FC<WhoWeHelpProps> = ({ onOpenDemo }) => {
  const getIndustryIcon = (iconName: string) => {
    const iconClass = "w-6 h-6";
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className={iconClass} />;
      case 'GraduationCap': return <GraduationCap className={iconClass} />;
      case 'Building2': return <Building2 className={iconClass} />;
      case 'ShoppingBag': return <ShoppingBag className={iconClass} />;
      case 'Landmark': return <Landmark className={iconClass} />;
      case 'Factory': return <Factory className={iconClass} />;
      case 'Server': return <Server className={iconClass} />;
      case 'Sparkles': return <Sparkles className={iconClass} />;
      default: return <Building2 className={iconClass} />;
    }
  };

  return (
    <section id="industries" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching user screenshot */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#00aeef]">
            Tailored Industry Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Who We Help?
          </h2>
          <p className="text-base text-slate-600">
            Purpose-built workflows configured for healthcare compliance, high-volume retail uptime,
            air-gapped banking security, and distributed campus operations.
          </p>
        </div>

        {/* 8-Industry Grid matching screenshot layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              onClick={onOpenDemo}
              className="p-6 rounded-xl border border-slate-200/80 hover:border-[#00aeef] bg-white hover:bg-slate-50/50 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left cursor-pointer group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-slate-100 text-[#00aeef] group-hover:bg-[#00aeef] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                  {getIndustryIcon(ind.iconName)}
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#00aeef] transition-colors mb-2">
                  {ind.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {ind.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#0082c8]">
                <span>{ind.impactMetric}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
