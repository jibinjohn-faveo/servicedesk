import React from 'react';
import {
  Layers,
  Database,
  ShoppingBag,
  Clock,
  BarChart3,
  Bot,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface FeatureSpotlightsProps {
  onOpenDemo: () => void;
}

export const FeatureSpotlights: React.FC<FeatureSpotlightsProps> = ({ onOpenDemo }) => {
  const GRID_FEATURES = [
    {
      title: '360° ITSM Administration',
      desc: 'Complete ITIL administration suite with 17+ pre-built modules for vendors, contracts, CAB governance, and assets.',
      icon: Layers,
      badge: 'ITIL v4 Aligned',
      color: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      title: 'Advanced CMDB & Assets',
      desc: 'Bi-directional configuration item (CI) dependency mapping and hardware/software lifecycle tracking.',
      icon: Database,
      badge: 'Topology Mapping',
      color: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      title: 'Enterprise Service Catalog',
      desc: 'Self-service employee store for hardware, software licenses, and access with automated approval workflows.',
      icon: ShoppingBag,
      badge: 'Store & Approvals',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      title: 'Multi-Tier SLA Management',
      desc: 'Priority-based response and resolution timers with proactive breach warnings and auto-escalations.',
      icon: Clock,
      badge: 'Automated SLAs',
      color: 'bg-amber-50 text-amber-600 border-amber-100'
    },
    {
      title: 'Executive BI & Analytics',
      desc: 'Real-time telemetry tracking MTTR, CSAT satisfaction ratings, technician utilization, and TAT metrics.',
      icon: BarChart3,
      badge: 'Reports & Telemetry',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100'
    },
    {
      title: 'Elea AI Copilot & Triage',
      desc: 'Autonomous assistant that summarizes threads, suggests verified fixes, and auto-routes tickets.',
      icon: Bot,
      badge: 'Artificial Intelligence',
      color: 'bg-purple-50 text-purple-600 border-purple-100'
    }
  ];

  return (
    <section id="spotlights" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#00aeef]">
            Product Feature Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight text-balance">
            Interactive Workspaces Built for High-Volume IT Operations
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Everything your enterprise needs to deliver stellar IT support, maintain compliance, and close tickets faster.
          </p>
        </div>

        {/* Clean 3x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GRID_FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                onClick={onOpenDemo}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#00aeef] transition-all flex flex-col justify-between text-left group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${feat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {feat.badge}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#00aeef] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-[#00aeef] transition-colors">
                  <span>Explore Workspace</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
