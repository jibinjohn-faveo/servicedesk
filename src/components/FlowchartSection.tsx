import React, { useState } from 'react';
import {
  Mail,
  MessageSquare,
  FileText,
  Phone,
  MoreHorizontal,
  AlertCircle,
  Settings,
  Info,
  CheckCircle2,
  Users,
  Star,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const FlowchartSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#00aeef]">
            End-to-End Workflow Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            How Faveo Service Desk Works
          </h2>
          <p className="text-sm text-slate-600">
            From multi-channel issue intake to automated AI triage, ITIL change governance, and resolution.
          </p>
        </div>

        {/* 5-Step Visual Flowchart Cards */}
        <div className="relative">
          
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-3 lg:gap-2">
            
            {/* ================= CARD 01: Multi-Channel Ingestion ================= */}
            <div
              onClick={() => setSelectedStep(1)}
              className={`flex-1 min-w-[210px] max-w-sm mx-auto lg:max-w-none w-full bg-white rounded-2xl p-5 border text-center transition-all duration-200 cursor-pointer flex flex-col justify-between relative shadow-xs ${
                selectedStep === 1
                  ? 'border-purple-500 ring-2 ring-purple-500/20 shadow-md'
                  : 'border-purple-200/90 hover:border-purple-300'
              }`}
            >
              {/* Step Pill */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-purple-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md border-2 border-white">
                01
              </div>

              <div className="pt-2">
                <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">
                  Multi-Channel Ingestion
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  End users raise requests from multiple channels.
                </p>
              </div>

              {/* Graphic Mockup Box: 6 Channels Grid */}
              <div className="mt-5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-3 gap-2.5">
                  {/* Email */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shadow-2xs">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-600">Email</span>
                  </div>

                  {/* Chat */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shadow-2xs">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-600">Chat</span>
                  </div>

                  {/* Web Portal */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shadow-2xs">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-600">Web Portal</span>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shadow-2xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-600">Phone</span>
                  </div>

                  {/* Teams/Slack */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-2xs">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-600">Teams/Slack</span>
                  </div>

                  {/* Other */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shadow-2xs">
                      <MoreHorizontal className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-600">Other</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="hidden lg:flex items-center justify-center text-slate-300 px-0.5">
              <ArrowRight className="w-5 h-5 text-slate-400" />
            </div>

            {/* ================= CARD 02: Smart Triage & SLA Matrix ================= */}
            <div
              onClick={() => setSelectedStep(2)}
              className={`flex-1 min-w-[210px] max-w-sm mx-auto lg:max-w-none w-full bg-white rounded-2xl p-5 border text-center transition-all duration-200 cursor-pointer flex flex-col justify-between relative shadow-xs ${
                selectedStep === 2
                  ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-md'
                  : 'border-blue-200/90 hover:border-blue-300'
              }`}
            >
              {/* Step Pill */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md border-2 border-white">
                02
              </div>

              <div className="pt-2">
                <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">
                  Smart Triage & SLA Matrix
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  AI classifies the request, identifies intent, sets priority and maps to the right service/CI using CMDB.
                </p>
              </div>

              {/* Graphic Mockup Box: Elea AI + Priority Stack */}
              <div className="mt-5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 flex-1 flex items-center gap-2.5">
                {/* Robot Avatar */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-blue-50 to-blue-100 border border-blue-200 flex flex-col items-center justify-center shrink-0 shadow-2xs relative">
                  <span className="text-xl">🤖</span>
                  <span className="w-2 h-2 rounded-full bg-blue-600 absolute -top-1 right-2 animate-ping" />
                </div>

                {/* Priority tags stack */}
                <div className="flex-1 space-y-1.5 text-left">
                  <div className="flex items-center justify-between text-[10px] bg-white px-2 py-1 rounded border border-slate-200/70">
                    <span className="flex items-center gap-1 font-semibold text-rose-600">
                      <AlertCircle className="w-3 h-3 text-rose-500" />
                      <span>Incident</span>
                    </span>
                    <span className="text-[9px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.2 rounded border border-rose-200">
                      High
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] bg-white px-2 py-1 rounded border border-slate-200/70">
                    <span className="flex items-center gap-1 font-semibold text-amber-700">
                      <Settings className="w-3 h-3 text-amber-500" />
                      <span>Service Request</span>
                    </span>
                    <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                      Medium
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] bg-white px-2 py-1 rounded border border-slate-200/70">
                    <span className="flex items-center gap-1 font-semibold text-emerald-700">
                      <Info className="w-3 h-3 text-emerald-500" />
                      <span>Inquiry</span>
                    </span>
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                      Low
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="hidden lg:flex items-center justify-center text-slate-300 px-0.5">
              <ArrowRight className="w-5 h-5 text-slate-400" />
            </div>

            {/* ================= CARD 03: ITSM Resolution & Co-Pilot ================= */}
            <div
              onClick={() => setSelectedStep(3)}
              className={`flex-1 min-w-[210px] max-w-sm mx-auto lg:max-w-none w-full bg-white rounded-2xl p-5 border text-center transition-all duration-200 cursor-pointer flex flex-col justify-between relative shadow-xs ${
                selectedStep === 3
                  ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                  : 'border-emerald-200/90 hover:border-emerald-300'
              }`}
            >
              {/* Step Pill */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md border-2 border-white">
                03
              </div>

              <div className="pt-2">
                <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">
                  ITSM Resolution & Co-Pilot
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  Support engineers get AI suggestions, remote RMM actions and guided workflows to resolve faster.
                </p>
              </div>

              {/* Graphic Mockup Box: Agent + Elea AI Suggests Checklist */}
              <div className="mt-5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 flex-1 flex flex-col justify-between text-left">
                <div className="flex items-start gap-2.5">
                  {/* Agent with headset */}
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 text-lg border border-emerald-200">
                    🎧
                  </div>

                  {/* Elea AI Suggests Floating Card */}
                  <div className="flex-1 bg-white p-2 rounded-lg border border-emerald-200/80 shadow-2xs space-y-1">
                    <div className="text-[10px] font-bold text-slate-800 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                      <span>Elea AI suggests</span>
                    </div>

                    <div className="space-y-0.5 text-[9px] text-slate-600">
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500 shrink-0" />
                        <span className="truncate">Relevant solution</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500 shrink-0" />
                        <span className="truncate">KB article</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500 shrink-0" />
                        <span className="truncate">Remote action (RMM)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gray skeleton lines representing ticket editor */}
                <div className="space-y-1 pt-2">
                  <div className="h-1.5 bg-slate-200/70 rounded w-full" />
                  <div className="h-1.5 bg-slate-200/50 rounded w-4/5" />
                </div>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="hidden lg:flex items-center justify-center text-slate-300 px-0.5">
              <ArrowRight className="w-5 h-5 text-slate-400" />
            </div>

            {/* ================= CARD 04: Change Control & Verification ================= */}
            <div
              onClick={() => setSelectedStep(4)}
              className={`flex-1 min-w-[210px] max-w-sm mx-auto lg:max-w-none w-full bg-white rounded-2xl p-5 border text-center transition-all duration-200 cursor-pointer flex flex-col justify-between relative shadow-xs ${
                selectedStep === 4
                  ? 'border-orange-500 ring-2 ring-orange-500/20 shadow-md'
                  : 'border-orange-200/90 hover:border-orange-300'
              }`}
            >
              {/* Step Pill */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-orange-500 text-white font-extrabold text-xs flex items-center justify-center shadow-md border-2 border-white">
                04
              </div>

              <div className="pt-2">
                <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">
                  Change Control & Verification
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  If the fix requires system changes, it goes through automated CAB workflow and verification.
                </p>
              </div>

              {/* Graphic Mockup Box: Change Request -> CAB Review -> Approved & Implemented */}
              <div className="mt-5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 flex-1 flex items-center justify-center">
                <div className="flex items-center justify-between w-full gap-1">
                  
                  {/* Step 1: Change Request */}
                  <div className="flex flex-col items-center gap-1 text-center flex-1">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shadow-2xs border border-orange-100">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-medium text-slate-700 leading-tight">
                      Change Request
                    </span>
                  </div>

                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />

                  {/* Step 2: CAB Review */}
                  <div className="flex flex-col items-center gap-1 text-center flex-1">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shadow-2xs border border-purple-100">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-medium text-slate-700 leading-tight">
                      CAB Review
                    </span>
                  </div>

                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />

                  {/* Step 3: Approved & Implemented */}
                  <div className="flex flex-col items-center gap-1 text-center flex-1">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-2xs border border-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-bold text-slate-900 leading-tight">
                      Approved & Implemented
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="hidden lg:flex items-center justify-center text-slate-300 px-0.5">
              <ArrowRight className="w-5 h-5 text-slate-400" />
            </div>

            {/* ================= CARD 05: Closure, CSAT & Knowledge Synthesis ================= */}
            <div
              onClick={() => setSelectedStep(5)}
              className={`flex-1 min-w-[210px] max-w-sm mx-auto lg:max-w-none w-full bg-white rounded-2xl p-5 border text-center transition-all duration-200 cursor-pointer flex flex-col justify-between relative shadow-xs ${
                selectedStep === 5
                  ? 'border-purple-500 ring-2 ring-purple-500/20 shadow-md'
                  : 'border-purple-200/90 hover:border-purple-300'
              }`}
            >
              {/* Step Pill */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-purple-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md border-2 border-white">
                05
              </div>

              <div className="pt-2">
                <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">
                  Closure, CSAT & Knowledge Synthesis
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  Ticket closes on user confirmation, CSAT is collected, and Elea AI creates/updates knowledge articles.
                </p>
              </div>

              {/* Graphic Mockup Box: KB doc + 5 Stars + Survey comment bars */}
              <div className="mt-5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 flex-1 flex flex-col justify-between text-left">
                <div className="flex items-center gap-3">
                  {/* Purple Document Icon */}
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 shadow-2xs border border-purple-200">
                    <FileText className="w-5 h-5" />
                  </div>

                  {/* 5 Rating Stars (4 purple, 1 gray) */}
                  <div className="space-y-1">
                    <div className="flex gap-1 text-purple-600">
                      <Star className="w-3.5 h-3.5 fill-purple-600" />
                      <Star className="w-3.5 h-3.5 fill-purple-600" />
                      <Star className="w-3.5 h-3.5 fill-purple-600" />
                      <Star className="w-3.5 h-3.5 fill-purple-600" />
                      <Star className="w-3.5 h-3.5 text-slate-300" />
                    </div>
                    <span className="text-[9px] font-bold text-purple-700">
                      Verified CSAT Rating
                    </span>
                  </div>
                </div>

                {/* Gray skeleton comment lines */}
                <div className="space-y-1 pt-2">
                  <div className="h-1.5 bg-slate-200/70 rounded w-full" />
                  <div className="h-1.5 bg-slate-200/50 rounded w-3/4" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
