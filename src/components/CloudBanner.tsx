import React from 'react';
import { ArrowRight, Cloud, CheckCircle, ShieldCheck } from 'lucide-react';

interface CloudBannerProps {
  onOpenTrial: () => void;
}

export const CloudBanner: React.FC<CloudBannerProps> = ({ onOpenTrial }) => {
  return (
    <section id="trial" className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Banner Title */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-wider uppercase text-[#00aeef]">
            <Cloud className="w-4 h-4 text-[#00aeef]" />
            <span>Instant Global Cloud Provisioning</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Yes, We have a Servicedesk Cloud Version
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to revolutionize your IT support? Get started with Faveo Cloud or Self-Hosted today
            and elevate your service desk to new heights.
          </p>
        </div>

        {/* Action Button & Disclaimer */}
        <div className="pt-2 space-y-3">
          <button
            onClick={onOpenTrial}
            className="px-8 py-4 text-sm font-extrabold text-white bg-[#00aeef] hover:bg-[#009cd7] active:scale-98 rounded-xl shadow-md shadow-[#00aeef]/25 transition-all uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
          >
            <span>START YOUR FREE TRIAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-xs text-slate-500 font-medium">
            14-day free trial. No credit card required.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Deploy in &lt; 2 minutes</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>SOC-2 & GDPR Compliant</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>One-click export to Self-Hosted anytime</span>
          </span>
        </div>

      </div>
    </section>
  );
};
