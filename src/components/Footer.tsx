import React from 'react';
import { ShieldCheck, Mail, Globe, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 px-2.5 py-1 bg-white rounded-lg flex items-center justify-center shadow-xs">
                <img
                  src="/faveo-logo.png"
                  alt="Faveo Helpdesk Logo"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Faveo Service Desk
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Enterprise service desk software powered by ITSM best practices and ITIL-compliant workflows.
              Empowering over 10,000+ organizations across 50+ countries with Cloud and 100% Self-Hosted solutions.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ITIL v4 Aligned</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISO 27001 & SOC-2</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>HIPAA & GDPR</span>
              </div>
            </div>
          </div>

          {/* Solutions Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              ITSM Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#capabilities" className="hover:text-white transition-colors">Incident Management</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Asset Management (ITAM)</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Change Management (CAB)</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Configuration DB (CMDB)</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Patch & RMM Integration</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Elea AI & Service Catalog</a></li>
            </ul>
          </div>

          {/* Industries Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Industries Served
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#industries" className="hover:text-white transition-colors">Healthcare & Hospitals</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Banking & Financial</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Higher Education</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Retail & POS Uptime</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Manufacturing & SCADA</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Managed Service Providers</a></li>
            </ul>
          </div>

          {/* Contact & Global Offices */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Global Support
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>sales@faveohelpdesk.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>www.faveohelpdesk.com</span>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>Ladybird Web Solution Pvt Ltd · Bangalore, India & Global Offices</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Faveo Service Desk / Ladybird Web Solution. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security Whitepaper</a>
            <a href="#demo" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">Schedule Demo</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
