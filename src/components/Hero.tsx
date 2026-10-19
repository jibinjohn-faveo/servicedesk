import React, { useState } from 'react';
import {
  Check,
  User,
  Mail,
  Phone,
  Building2,
  ArrowRight,
  CheckCircle2,
  RotateCcw
} from 'lucide-react';

interface HeroProps {
  onOpenDemo?: () => void;
  onOpenTrial?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [deploymentType, setDeploymentType] = useState<'cloud' | 'on-premise'>('cloud');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }
    if (!companyName.trim()) {
      setErrorMsg('Please enter your company name.');
      return;
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setCompanyName('');
    setErrorMsg('');
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-white border-b border-slate-200/80">
      {/* Subtle ambient background grid */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0284c7 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: Original Service Desk Content with New Layout Design ================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean Editorial Kicker (Zero-Pill Discipline, No decorative pulsing dots) */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-slate-600">
              <span className="font-semibold normal-case tracking-normal">ITIL-Compliant Enterprise ITSM</span>
            </div>

            {/* Banner Headline with Faveo Brand Color */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 leading-[1.12] text-balance">
              AI-Service Desk Control IT Support. <br className="hidden sm:inline" />
              <span className="text-[#00aeef]">Close Tickets Faster.</span>
            </h1>

            {/* Subtitle / Description Content with AI-Servicedesk */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Faveo AI-Servicedesk is an enterprise service desk software powered by ITSM best practices
              and ITIL-compliant workflows. Manage your internal IT ticketing system, SLAs,
              and assets from one unified AI-powered IT support service desk.
            </p>

            {/* 3 Core Checklist items matching the new design layout */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm font-medium text-slate-800 leading-snug">
                  Proactive anomaly alerts, automated Elea AI triage, and zero-touch ticket routing
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm font-medium text-slate-800 leading-snug">
                  Unified IT Asset Management, CMDB CI topology, and multi-tier SLA matrices
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm font-medium text-slate-800 leading-snug">
                  ITIL-aligned Incident, Problem, Change &amp; Release Management with CAB workflows
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: New Card Design with Service Desk Content ================= */}
          <div className="lg:col-span-5">
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              
              {/* Form Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Get Started with Faveo AI-Servicedesk
              </h2>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-lg shadow-slate-100">
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* CHOOSE DEPLOYMENT TYPE */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 tracking-wider uppercase mb-2">
                        CHOOSE DEPLOYMENT TYPE:
                      </label>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {/* Cloud Option */}
                        <button
                          type="button"
                          onClick={() => setDeploymentType('cloud')}
                          className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 cursor-pointer ${
                            deploymentType === 'cloud'
                              ? 'border-sky-500 bg-sky-50/30 ring-1 ring-sky-500/20'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                              deploymentType === 'cloud'
                                ? 'border-sky-600 bg-white'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {deploymentType === 'cloud' && (
                              <span className="w-2 h-2 rounded-full bg-sky-600" />
                            )}
                          </span>
                          <div>
                            <div className="text-xs font-bold text-slate-900 leading-tight">
                              Cloud
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              Hosted SaaS
                            </div>
                          </div>
                        </button>

                        {/* On-Premise Option */}
                        <button
                          type="button"
                          onClick={() => setDeploymentType('on-premise')}
                          className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 cursor-pointer ${
                            deploymentType === 'on-premise'
                              ? 'border-sky-500 bg-sky-50/30 ring-1 ring-sky-500/20'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                              deploymentType === 'on-premise'
                                ? 'border-sky-600 bg-white'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {deploymentType === 'on-premise' && (
                              <span className="w-2 h-2 rounded-full bg-sky-600" />
                            )}
                          </span>
                          <div>
                            <div className="text-xs font-bold text-slate-900 leading-tight">
                              On-Premise
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              Self-Hosted Server
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* NAME * */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-800 tracking-wider uppercase mb-1.5">
                        NAME <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-slate-900 placeholder:text-slate-400 transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* EMAIL * */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-800 tracking-wider uppercase mb-1.5">
                        EMAIL <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-slate-900 placeholder:text-slate-400 transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* PHONE NUMBER * */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-800 tracking-wider uppercase mb-1.5">
                        PHONE NUMBER <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-slate-900 placeholder:text-slate-400 transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* COMPANY NAME * */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-800 tracking-wider uppercase mb-1.5">
                        COMPANY NAME <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          placeholder="Acme Technologies"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-slate-900 placeholder:text-slate-400 transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Error message if any */}
                    {errorMsg && (
                      <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg font-medium">
                        {errorMsg}
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl bg-[#00aeef] hover:bg-[#009cd7] active:scale-98 text-white font-bold text-sm shadow-md shadow-[#00aeef]/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <span>Start Free Trial</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>

                    <div className="text-center pt-2.5">
                      <p className="text-xs font-semibold text-[#0082c8] flex items-center justify-center gap-2">
                        <span>14-Day Free Trial</span>
                        <span className="text-slate-300 font-normal">·</span>
                        <span>No Credit Card Required</span>
                      </p>
                    </div>

                  </form>
                ) : (
                  /* Confirmation State */
                  <div className="text-center py-6 space-y-4 animate-in fade-in duration-300">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-extrabold text-slate-900">
                        AI-Servicedesk Initialized!
                      </h3>
                      <p className="text-xs text-slate-500">
                        Thank you, <strong className="text-slate-800">{fullName}</strong>!
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-2">
                      <div className="flex justify-between text-slate-600">
                        <span>Organization:</span>
                        <strong className="text-slate-900">{companyName}</strong>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Deployment:</span>
                        <strong className="text-sky-600 capitalize">{deploymentType} Mode</strong>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Admin Email:</span>
                        <strong className="text-slate-900">{email}</strong>
                      </div>
                      <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-500">
                        Your 14-day full-featured Faveo AI-Servicedesk environment and admin credentials have been sent to your inbox.
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-center gap-3">
                      <button
                        onClick={handleReset}
                        className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Configure another workspace</span>
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
