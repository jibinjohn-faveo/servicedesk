import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface CustomerPainPointsProps {
  onOpenDemo: () => void;
}

export const CustomerPainPoints: React.FC<CustomerPainPointsProps> = ({ onOpenDemo }) => {
  const items = [
    {
      challenge: "Scattered support channels & missed tickets",
      solution: "Faveo Unified Omni-Channel Inbox",
    },
    {
      challenge: "Zero visibility into IT assets & CMDB",
      solution: "Integrated ITIL-Compliant Asset Topology",
    },
    {
      challenge: "Manual triage bottlenecks & SLA breaches",
      solution: "AI Auto-Routing & Multi-Tier SLAs",
    },
    {
      challenge: "Cloud vendor lock-in & privacy risks",
      solution: "Flexible On-Premise & Cloud Deployment",
    },
  ];

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Compact Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-[#00aeef] uppercase tracking-wider block mb-1">
              Problem & Solution
            </span>
            <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
              Why IT Teams Switch to Faveo
            </h2>
          </div>
          <button
            onClick={onOpenDemo}
            className="text-xs font-bold text-slate-700 hover:text-[#00aeef] inline-flex items-center gap-1 transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>Explore all capabilities</span>
            <span>→</span>
          </button>
        </div>

        {/* Simple 4-Column One-Line / Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:border-[#00aeef]/50 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    <span className="font-semibold text-slate-900">Challenge:</span> {item.challenge}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-900 font-semibold leading-relaxed">
                  <span className="text-[#00aeef]">Faveo:</span> {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
