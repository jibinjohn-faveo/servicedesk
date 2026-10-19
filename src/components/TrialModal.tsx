import React, { useState } from 'react';
import { X, CheckCircle2, Cloud, Server, Sparkles } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [subdomain, setSubdomain] = useState('');
  const [email, setEmail] = useState('');
  const [deploymentPreference, setDeploymentPreference] = useState<'cloud' | 'selfhosted'>('cloud');
  const [teamSize, setTeamSize] = useState('5-20');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
        
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div className="space-y-6">
            
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Full Feature Free Trial</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                Start Your Faveo Free Trial
              </h3>
              <p className="text-xs text-slate-500">
                Zero commitment. No credit card required. Full access to Elea AI and ITIL workflows.
              </p>
            </div>

            {/* Deployment Choice */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Deployment Model:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeploymentPreference('cloud')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    deploymentPreference === 'cloud'
                      ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-600/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <Cloud className="w-5 h-5 text-blue-600 mb-1" />
                  <div className="text-xs font-bold text-slate-900">Faveo Cloud</div>
                  <div className="text-[10px] text-slate-500">Instant hosted SaaS</div>
                </button>

                <button
                  type="button"
                  onClick={() => setDeploymentPreference('selfhosted')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    deploymentPreference === 'selfhosted'
                      ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-600/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <Server className="w-5 h-5 text-slate-800 mb-1" />
                  <div className="text-xs font-bold text-slate-900">Self-Hosted</div>
                  <div className="text-[10px] text-slate-500">On-premise source code</div>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Desired Cloud Workspace Subdomain:
                </label>
                <div className="flex rounded-lg border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-600">
                  <input
                    type="text"
                    required
                    placeholder="yourcompany"
                    value={subdomain}
                    onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                    className="px-3 py-2.5 text-xs text-slate-900 w-full focus:outline-none"
                  />
                  <span className="bg-slate-100 px-3 py-2.5 text-xs font-mono text-slate-500 border-l border-slate-200 shrink-0">
                    .faveohelpdesk.com
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Work Email:
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Estimated IT Support Team Size:
                </label>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                >
                  <option value="1-5">1 – 5 IT Technicians</option>
                  <option value="5-20">5 – 20 IT Technicians</option>
                  <option value="20-50">20 – 50 IT Technicians</option>
                  <option value="50+">50+ Enterprise Technicians</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg uppercase tracking-wider transition-all shadow-xs cursor-pointer mt-2"
              >
                SIGN UP FOR FREE
              </button>
            </form>

            <div className="pt-2 text-center text-[11px] text-slate-500">
              No credit card required. Auto-renews to free tier or pause anytime.
            </div>

          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Workspace Initialized!
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
              Your trial instance is being deployed at: <br />
              <strong className="text-blue-600 font-mono text-sm">
                https://{subdomain || 'myteam'}.faveohelpdesk.com
              </strong>
            </p>
            <p className="text-xs text-slate-500">
              Check <strong>{email}</strong> for your temporary root administrator password and onboarding setup guide.
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="px-6 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
