import React, { useState } from 'react';
import {
  Layers,
  AlertCircle,
  GitPullRequest,
  Rocket,
  MonitorCheck,
  ShieldAlert,
  FileCheck,
  FileBadge,
  Database,
  Network,
  Cloud,
  Bot,
  ArrowRight,
  X,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { CAPABILITIES } from '../data/faveoData';
import { CapabilityItem } from '../types';

interface CapabilitiesGridProps {
  onOpenDemo: () => void;
}

export const CapabilitiesGrid: React.FC<CapabilitiesGridProps> = ({ onOpenDemo }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'itsm' | 'operations' | 'platform'>('all');
  const [selectedCapability, setSelectedCapability] = useState<CapabilityItem | null>(null);

  const filteredItems = CAPABILITIES.filter((cap) => {
    if (activeFilter === 'all') return true;
    return cap.category === activeFilter;
  });

  const getModuleIcon = (iconName: string) => {
    const iconClass = "w-6 h-6";
    switch (iconName) {
      case 'Layers': return <Layers className={iconClass} />;
      case 'AlertCircle': return <AlertCircle className={iconClass} />;
      case 'GitPullRequest': return <GitPullRequest className={iconClass} />;
      case 'Rocket': return <Rocket className={iconClass} />;
      case 'MonitorCheck': return <MonitorCheck className={iconClass} />;
      case 'ShieldAlert': return <ShieldAlert className={iconClass} />;
      case 'FileCheck': return <FileCheck className={iconClass} />;
      case 'FileBadge': return <FileBadge className={iconClass} />;
      case 'Database': return <Database className={iconClass} />;
      case 'Network': return <Network className={iconClass} />;
      case 'CloudServer': return <Cloud className={iconClass} />;
      case 'Bot': return <Bot className={iconClass} />;
      default: return <Layers className={iconClass} />;
    }
  };

  return (
    <section id="capabilities" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#00aeef]">
            Enterprise ITSM Capabilities Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Complete Toolkit for Modern IT Operations
          </h2>
          <p className="text-base text-slate-600">
            Enterprise IT control with MSP-ready service workflows. Inspect specifications
            tailored for modern infrastructure teams, compliance officers, and IT service managers.
          </p>

          {/* Interactive Filter Tabs (Zero-candy, functional buttons) */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1 bg-slate-100 rounded-lg border border-slate-200/80">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Capabilities (12)
              </button>
              <button
                onClick={() => setActiveFilter('itsm')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeFilter === 'itsm'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Core ITSM
              </button>
              <button
                onClick={() => setActiveFilter('operations')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeFilter === 'operations'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                IT Asset & Operations
              </button>
              <button
                onClick={() => setActiveFilter('platform')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeFilter === 'platform'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Infrastructure & AI
              </button>
            </div>
          </div>
        </div>

        {/* 12-Card Grid matching the user's screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCapability(item)}
              className="group bg-white rounded-xl p-6 border border-slate-200/80 hover:border-blue-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between text-left"
            >
              <div>
                {/* Module Icon and Metadata */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {getModuleIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-400">
                    {item.metrics}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                {/* Unboxed ITIL category */}
                <div className="text-[11px] font-medium text-blue-700/80 mt-1 mb-2">
                  {item.itilPhase}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Action footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                <span>Explore Specifications</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust banner for capabilities */}
        <div className="mt-14 p-6 bg-slate-50 rounded-xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Need custom integrations with your existing IT stack?
            </h4>
            <p className="text-xs text-slate-600">
              Faveo supports REST APIs, Webhooks, LDAP/Active Directory, Azure AD, Okta, and major RMM agents.
            </p>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg whitespace-nowrap shadow-xs cursor-pointer transition-all"
          >
            Request Technical Architecture Walkthrough
          </button>
        </div>

      </div>

      {/* Modal / Drawer for Capability Deep-Dive */}
      {selectedCapability && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  {getModuleIcon(selectedCapability.iconName)}
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {selectedCapability.itilPhase}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-950">
                    {selectedCapability.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedCapability(null)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedCapability.description}
            </p>

            {/* Feature Highlights */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Core Enterprise Functionality:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedCapability.bulletPoints.map((bp, i) => (
                  <div
                    key={i}
                    className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 text-xs text-slate-800 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric proof strip */}
            <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-200 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-blue-950">Verified SLA Benchmark:</span>
                <div className="text-slate-600">Measured across 5,000+ production instances</div>
              </div>
              <span className="text-sm font-mono font-bold text-blue-700 bg-white px-3 py-1 rounded-md border border-blue-200">
                {selectedCapability.metrics}
              </span>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                onClick={() => setSelectedCapability(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedCapability(null);
                  onOpenDemo();
                }}
                className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
              >
                <span>Book Live Walkthrough for {selectedCapability.title}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
