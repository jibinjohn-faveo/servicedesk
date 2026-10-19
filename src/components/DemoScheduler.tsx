import React, { useState } from 'react';
import {
  MonitorPlay,
  BarChart2,
  Users,
  Lock,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';

const COUNTRY_CODES = [
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+1', name: 'USA / Canada', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
];

export const DemoScheduler: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [workEmail, setWorkEmail] = useState('');
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
    if (!phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }
    if (!workEmail.trim() || !workEmail.includes('@')) {
      setErrorMsg('Please provide a valid work email.');
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <section id="demo" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Schedule a Demo
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Experience the full Faveo ITIL suite configured for your organization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column matching screenshot */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00aeef] uppercase tracking-wider">
                <span>Interactive Walkthrough</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-slate-500 font-medium normal-case tracking-normal">30-Minute Tailored Session</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight text-balance">
                Resolve Tickets Faster. Schedule a 30 Minute Live Faveo Demo
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Get a live, personalized walkthrough to see how teams use AI-powered automation to resolve
                tickets faster, automate workflows, and meet SLAs with ease.
              </p>
            </div>

            {/* 3 bullet points with icons from screenshot */}
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <MonitorPlay className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">
                    Live demo tailored to your support or IT workflow
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    See Faveo configured to match how your support or IT team actually works.
                    No generic walkthroughs, only relevant use cases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <BarChart2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">
                    See automation, SLAs, and reporting in real use cases
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Watch automation and SLA tracking in action across real scenarios.
                    Understand how reports help teams stay on track and informed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">
                    Ask questions directly to a product expert
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Get real-time answers from a Faveo product expert.
                    Discuss features, use cases, and next steps with confidence.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Lead Form Card matching screenshot */}
          <div className="lg:col-span-5">
            <div className="bg-blue-600 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-500">
              
              {!isSubmitted ? (
                <>
                  <h3 className="text-xl font-bold tracking-tight mb-6 text-white text-center sm:text-left">
                    See How Faveo Can Work for Your Support Team
                  </h3>

                  {errorMsg && (
                    <div className="mb-4 p-3 bg-red-900/40 border border-red-300 rounded-lg text-xs text-red-100">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 text-slate-900">
                    
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name*"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
                        required
                      />
                    </div>

                    <div className="flex gap-2">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-28 px-2 py-3 rounded-lg bg-white text-slate-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-white shrink-0 cursor-pointer"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        placeholder="Phone*"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Work Email*"
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-lg bg-slate-950 hover:bg-slate-900 active:scale-98 text-white font-extrabold text-sm uppercase tracking-wider shadow-md transition-all cursor-pointer mt-2"
                    >
                      SCHEDULE A DEMO
                    </button>

                    <div className="pt-3 text-center space-y-2 text-white/90">
                      <div className="flex items-center justify-center gap-1.5 text-xs">
                        <Lock className="w-3.5 h-3.5 text-blue-200" />
                        <span>Your information is 100% secure</span>
                      </div>
                      <p className="text-[11px] text-blue-100/80 leading-normal">
                        By clicking &quot;Schedule a Demo&quot; you agree to our Terms & Privacy Policy
                      </p>
                    </div>

                  </form>
                </>
              ) : (
                <div className="text-center py-6 space-y-4 animate-in fade-in duration-200">
                  <div className="w-16 h-16 rounded-full bg-white text-blue-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Demo Scheduled!</h3>
                  <p className="text-xs text-blue-100 leading-relaxed max-w-xs mx-auto">
                    Thank you, <strong>{fullName}</strong>. A dedicated Faveo product specialist will contact you at <strong>{workEmail}</strong> ({countryCode} {phone}) with your personalized calendar invitation.
                  </p>
                  <div className="p-4 bg-blue-700/60 rounded-xl border border-blue-400/40 text-xs text-left space-y-2 text-blue-50">
                    <div className="font-bold flex items-center gap-1.5 text-white">
                      <Calendar className="w-4 h-4 text-white" />
                      <span>Demo Session Details:</span>
                    </div>
                    <div>• 30-Minute Live Walkthrough via Google Meet / Zoom</div>
                    <div>• Tailored ITSM, ITIL & Elea AI Demonstration</div>
                    <div>• Migration & Deployment Architecture Review</div>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-white/90 underline hover:text-white pt-2"
                  >
                    Schedule another demo session
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
