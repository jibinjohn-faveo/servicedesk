import React from 'react';
import { ENTERPRISE_LOGOS } from '../data/faveoData';

export const TrustedEnterprises: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title matching user screenshot */}
        <div className="text-center mb-8">
          <p className="text-sm font-bold tracking-tight text-slate-800 uppercase sm:text-base">
            Over 10,000+ Leading Enterprises Trust Faveo
          </p>
          <div className="mt-2 text-xs text-slate-500">
            Powering mission-critical IT support, hospital networks, telecom backbones, and retail infrastructure globally
          </div>
        </div>

        {/* Logo Grid / Marquee matching the logos from screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
          {ENTERPRISE_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center justify-center p-3 rounded-lg border border-slate-100 hover:border-slate-300 bg-slate-50/50 hover:bg-white transition-all w-full h-20 text-center group shadow-2xs"
            >
              <span className="text-sm font-black tracking-tight text-slate-800 group-hover:text-blue-700 transition-colors">
                {logo.name}
              </span>
              <span className="text-[9px] font-semibold text-slate-500 tracking-wider uppercase mt-0.5 line-clamp-1">
                {logo.subtitle}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
