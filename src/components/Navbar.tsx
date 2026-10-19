import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
  onOpenTrialModal: () => void;
  onLaunchApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal, onOpenTrialModal: _onOpenTrialModal, onLaunchApp }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Brand Wordmark & Faveo Logo */}
          <a
            href="#"
            className="text-xl font-extrabold tracking-tight text-slate-950 flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
          >
            <img
              src="/faveo-logo.png"
              alt="Faveo Helpdesk Logo"
              className="h-9 w-auto object-contain hidden sm:block"
            />
            <div className="flex items-center gap-2 sm:hidden">
              <span className="w-8 h-8 rounded-lg bg-[#00aeef] flex items-center justify-center text-white font-black text-lg shadow-sm">
                F
              </span>
              <span className="text-lg font-extrabold text-slate-950">Faveo Service Desk</span>
            </div>
          </a>

          {/* Primary Action */}
          <div className="flex items-center gap-3 shrink-0">

            <button
              onClick={onOpenDemoModal}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#00aeef] hover:bg-[#009cd7] active:scale-98 rounded-xl shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Schedule Live Demo
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
