import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Ticket, 
  Kanban, 
  BookOpen, 
  Bot, 
  BarChart3, 
  Settings, 
  Search, 
  Bell, 
  Plus, 
  Filter, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  User, 
  MessageSquare, 
  Send, 
  Sparkles, 
  FileText, 
  ChevronRight, 
  ArrowUpRight, 
  ShieldCheck, 
  HelpCircle,
  LogOut,
  Mail,
  UserCheck,
  Tag
} from 'lucide-react';

interface FaveoAppProps {
  onBackToMarketing: () => void;
}

interface TicketItem {
  id: string;
  ticketNumber: string;
  subject: string;
  requester: string;
  email: string;
  department: 'IT Infrastructure' | 'Software Engineering' | 'HR Support' | 'Customer Success';
  priority: 'Urgent (P1)' | 'High (P2)' | 'Medium (P3)' | 'Low (P4)';
  status: 'Open' | 'Pending' | 'Resolved' | 'Closed';
  assignedTo: string;
  createdTime: string;
  dueDate: string;
  slaStatus: 'on-track' | 'warning' | 'breached';
  messages: { sender: string; text: string; time: string; isAgent: boolean }[];
}

const INITIAL_TICKETS: TicketItem[] = [
  {
    id: '1',
    ticketNumber: 'TKT-9402',
    subject: 'Core Database Connection Timeout on Prod-Cluster-02',
    requester: 'Marcus Vance',
    email: 'm.vance@enterprise.com',
    department: 'IT Infrastructure',
    priority: 'Urgent (P1)',
    status: 'Open',
    assignedTo: 'Jibin John',
    createdTime: '12 mins ago',
    dueDate: '28 mins remaining',
    slaStatus: 'warning',
    messages: [
      { sender: 'Marcus Vance', text: 'Our main database cluster threw a connection timeout error across 14 microservices at 05:30 UTC.', time: '12 mins ago', isAgent: false },
      { sender: 'Elea AI Bot', text: 'Automated triage: Correlated with AWS RDS CPU spike alert. Escalated to Tier-2 Infrastructure.', time: '10 mins ago', isAgent: true }
    ]
  },
  {
    id: '2',
    ticketNumber: 'TKT-9398',
    subject: 'SSO Login Failure for Remote Engineering Team in EMEA',
    requester: 'Sarah Jenkins',
    email: 's.jenkins@enterprise.com',
    department: 'Software Engineering',
    priority: 'High (P2)',
    status: 'Pending',
    assignedTo: 'Alex Mercer',
    createdTime: '1 hour ago',
    dueDate: '2 hours remaining',
    slaStatus: 'on-track',
    messages: [
      { sender: 'Sarah Jenkins', text: 'SAML 2.0 authentication is throwing error 403 for all London engineering staff.', time: '1 hour ago', isAgent: false }
    ]
  },
  {
    id: '3',
    ticketNumber: 'TKT-9385',
    subject: 'Request for New MacBook Pro M3 Max (Hardware Provisioning)',
    requester: 'David Chen',
    email: 'd.chen@enterprise.com',
    department: 'HR Support',
    priority: 'Medium (P3)',
    status: 'Open',
    assignedTo: 'Unassigned',
    createdTime: '3 hours ago',
    dueDate: '1 day remaining',
    slaStatus: 'on-track',
    messages: [
      { sender: 'David Chen', text: 'Joining as Lead Product Designer next Monday. Need hardware requisition approved.', time: '3 hours ago', isAgent: false }
    ]
  },
  {
    id: '4',
    ticketNumber: 'TKT-9371',
    subject: 'API Rate Limiting Incident on Billing Webhook Integration',
    requester: 'Elena Rostova',
    email: 'elena@partnercorp.io',
    department: 'Customer Success',
    priority: 'High (P2)',
    status: 'Resolved',
    assignedTo: 'Jibin John',
    createdTime: '5 hours ago',
    dueDate: 'Completed',
    slaStatus: 'on-track',
    messages: [
      { sender: 'Elena Rostova', text: 'Billing webhooks are failing with 429 Too Many Requests.', time: '5 hours ago', isAgent: false },
      { sender: 'Jibin John', text: 'Rate limit threshold increased from 1000/min to 5000/min. Issue resolved.', time: '2 hours ago', isAgent: true }
    ]
  }
];

export const FaveoServiceDeskApp: React.FC<FaveoAppProps> = ({ onBackToMarketing }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'tickets' | 'kanban' | 'kb' | 'ai' | 'reports' | 'settings'>('dashboard');
  const [tickets, setTickets] = useState<TicketItem[]>(INITIAL_TICKETS);
  const [selectedTicket, setSelectedTicket] = useState<TicketItem | null>(INITIAL_TICKETS[0]);
  const [replyText, setReplyText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [isNewTicketModalOpen, setIsNewTicketModalOpen] = useState(false);
  const [portalMode, setPortalMode] = useState<'agent' | 'customer'>('agent');

  // New ticket form state
  const [newSubj, setNewSubj] = useState('');
  const [newReq, setNewReq] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newDept, setNewDept] = useState<'IT Infrastructure' | 'Software Engineering' | 'HR Support' | 'Customer Success'>('IT Infrastructure');
  const [newPri, setNewPri] = useState<'Urgent (P1)' | 'High (P2)' | 'Medium (P3)' | 'Low (P4)'>('Medium (P3)');
  const [newDesc, setNewDesc] = useState('');

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedTicket) return;

    const updatedMessages = [
      ...selectedTicket.messages,
      { sender: 'Jibin John (Senior Admin)', text: replyText, time: 'Just now', isAgent: true }
    ];

    const updatedTicket = { ...selectedTicket, messages: updatedMessages };
    setSelectedTicket(updatedTicket);
    setTickets(tickets.map(t => t.id === updatedTicket.id ? updatedTicket : t));
    setReplyText('');
  };

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubj || !newReq) return;

    const created: TicketItem = {
      id: Date.now().toString(),
      ticketNumber: `TKT-${Math.floor(1000 + Math.random() * 9000)}`,
      subject: newSubj,
      requester: newReq,
      email: newEmail || 'user@enterprise.com',
      department: newDept,
      priority: newPri,
      status: 'Open',
      assignedTo: 'Jibin John',
      createdTime: 'Just now',
      dueDate: '4 hours remaining',
      slaStatus: 'on-track',
      messages: [
        { sender: newReq, text: newDesc || newSubj, time: 'Just now', isAgent: false },
        { sender: 'Elea AI Bot', text: 'Ticket automatically ingested and categorized via Faveo Smart Triage.', time: 'Just now', isAgent: true }
      ]
    };

    setTickets([created, ...tickets]);
    setIsNewTicketModalOpen(false);
    setNewSubj('');
    setNewReq('');
    setNewEmail('');
    setNewDesc('');
  };

  const filteredTickets = tickets.filter(t => {
    const matchesSearch = t.subject.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.ticketNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.requester.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPriority = filterPriority === 'all' || t.priority.includes(filterPriority);
    return matchesSearch && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-[#00aeef] selection:text-white">
      
      {/* Top Header */}
      <header className="bg-slate-950 border-b border-slate-800 h-16 px-6 flex items-center justify-between shrink-0 sticky top-0 z-40">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00aeef] to-blue-700 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">
              F
            </div>
            <div>
              <div className="font-extrabold text-base tracking-tight flex items-center gap-2">
                Faveo Service Desk
                <span className="text-[10px] bg-blue-500/20 text-[#00aeef] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider border border-blue-500/30">
                  ITIL v4 Enterprise
                </span>
              </div>
              <div className="text-xs text-slate-400">Connected to AWS us-east-1 Cluster</div>
            </div>
          </div>

          <div className="hidden md:flex items-center bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 w-80 text-sm">
            <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search tickets, assets, KB articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-slate-100 placeholder-slate-500 w-full text-xs"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Portal Switcher */}
          <div className="bg-slate-900 p-1 rounded-xl border border-slate-800 flex items-center text-xs font-medium">
            <button
              onClick={() => setPortalMode('agent')}
              className={`px-3 py-1.5 rounded-lg transition-all ${portalMode === 'agent' ? 'bg-[#00aeef] text-white font-bold shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Agent Portal
            </button>
            <button
              onClick={() => setPortalMode('customer')}
              className={`px-3 py-1.5 rounded-lg transition-all ${portalMode === 'customer' ? 'bg-[#00aeef] text-white font-bold shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Customer Portal
            </button>
          </div>

          <button
            onClick={() => setIsNewTicketModalOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-[#00aeef] hover:bg-[#009cd7] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-500/20 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            New Ticket
          </button>

          <button className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 relative transition-all">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          </button>

          <div className="h-6 w-px bg-slate-800 mx-1"></div>

          <div className="flex items-center gap-3 pl-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-xs text-white ring-2 ring-blue-500/30">
              JJ
            </div>
            <div className="hidden lg:block text-left">
              <div className="text-xs font-bold text-slate-200">Jibin John</div>
              <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Online & Available
              </div>
            </div>
          </div>

          <button
            onClick={onBackToMarketing}
            title="Return to Marketing Landing Page"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-red-500/20 hover:border-red-500/40 text-slate-400 hover:text-red-400 transition-all ml-2"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar */}
        <aside className="w-64 bg-slate-950/70 border-r border-slate-800 p-4 flex flex-col justify-between shrink-0 hidden md:flex">
          <nav className="space-y-1.5">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pb-2">Workspace Navigation</div>
            
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${activeTab === 'dashboard' ? 'bg-[#00aeef] text-white shadow-md shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Agent Dashboard
            </button>

            <button
              onClick={() => setActiveTab('tickets')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${activeTab === 'tickets' ? 'bg-[#00aeef] text-white shadow-md shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}
            >
              <div className="flex items-center gap-3">
                <Ticket className="w-4 h-4" />
                Tickets Queue
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${activeTab === 'tickets' ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-300'}`}>
                {tickets.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('kanban')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${activeTab === 'kanban' ? 'bg-[#00aeef] text-white shadow-md shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}
            >
              <Kanban className="w-4 h-4" />
              Kanban Board
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${activeTab === 'ai' ? 'bg-[#00aeef] text-white shadow-md shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}
            >
              <Bot className="w-4 h-4" />
              Elea AI Copilot
              <span className="ml-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[9px] px-1.5 py-0.5 rounded font-bold animate-pulse">PRO</span>
            </button>

            <button
              onClick={() => setActiveTab('kb')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${activeTab === 'kb' ? 'bg-[#00aeef] text-white shadow-md shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}
            >
              <BookOpen className="w-4 h-4" />
              Knowledge Base
            </button>

            <button
              onClick={() => setActiveTab('reports')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${activeTab === 'reports' ? 'bg-[#00aeef] text-white shadow-md shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}
            >
              <BarChart3 className="w-4 h-4" />
              Reports & SLAs
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${activeTab === 'settings' ? 'bg-[#00aeef] text-white shadow-md shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}
            >
              <Settings className="w-4 h-4" />
              Helpdesk Settings
            </button>
          </nav>

          {/* SLA Compliance card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-300">SLA Compliance</span>
              <span className="text-xs font-extrabold text-emerald-400">98.4%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
              <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '98.4%' }}></div>
            </div>
            <p className="text-[10px] text-slate-400">All P1 critical incidents under active 15m resolution window.</p>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-slate-900 p-6">
          
          {portalMode === 'customer' ? (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-800/50 rounded-3xl p-8 text-center relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <h1 className="text-2xl font-black text-white mb-2">Welcome to Enterprise IT Support Portal</h1>
                <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">Need help with hardware requisition, software access, or system outages? Submit a ticket below or search our knowledge base.</p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setIsNewTicketModalOpen(true)}
                    className="bg-[#00aeef] hover:bg-[#009cd7] text-white font-bold px-6 py-3 rounded-2xl text-sm shadow-lg shadow-blue-500/20 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> Submit New Support Request
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
                    <Ticket className="w-4 h-4 text-[#00aeef]" /> Your Active Tickets
                  </h3>
                  <div className="space-y-3">
                    {tickets.slice(0, 3).map(t => (
                      <div key={t.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-[#00aeef] mb-0.5">{t.ticketNumber}</div>
                          <div className="text-sm font-semibold text-white">{t.subject}</div>
                          <div className="text-[11px] text-slate-400 mt-1">Status: <span className="text-emerald-400 font-medium">{t.status}</span></div>
                        </div>
                        <span className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-lg border border-blue-500/20 font-medium">{t.priority}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#00aeef]" /> Popular Knowledge Base Articles
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl hover:border-slate-700 transition-all cursor-pointer">
                      <div className="font-bold text-white mb-1">How to setup VPN & AWS SSO Access for Remote Work</div>
                      <div className="text-slate-400">Updated 2 days ago • 1,420 views</div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl hover:border-slate-700 transition-all cursor-pointer">
                      <div className="font-bold text-white mb-1">Requesting Hardware & Peripherals through Faveo Catalog</div>
                      <div className="text-slate-400">Updated 5 days ago • 890 views</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'dashboard' ? (
            <div className="space-y-6">
              {/* Top Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center justify-between text-slate-400 mb-3">
                    <span className="text-xs font-semibold">Total Open Tickets</span>
                    <div className="p-2 rounded-xl bg-blue-500/10 text-[#00aeef]">
                      <Ticket className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-white">24</div>
                  <div className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1 font-medium">
                    <ArrowUpRight className="w-3.5 h-3.5" /> 12 resolved today
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center justify-between text-slate-400 mb-3">
                    <span className="text-xs font-semibold">Average Response Time</span>
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-white">14 mins</div>
                  <div className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1 font-medium">
                    <ArrowUpRight className="w-3.5 h-3.5" /> 18% faster than SLA
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center justify-between text-slate-400 mb-3">
                    <span className="text-xs font-semibold">SLA Compliance Rate</span>
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-white">98.4%</div>
                  <div className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Zero P1 breaches
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center justify-between text-slate-400 mb-3">
                    <span className="text-xs font-semibold">Customer CSAT Score</span>
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-white">4.9 / 5.0</div>
                  <div className="text-[11px] text-purple-400 mt-2 flex items-center gap-1 font-medium">
                    Based on 340 ratings
                  </div>
                </div>
              </div>

              {/* Main Queue & Quick Inspector */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Tickets list */}
                <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-bold text-white flex items-center gap-2">
                      <Ticket className="w-4 h-4 text-[#00aeef]" /> Live Incident Queue
                    </h2>
                    <div className="flex items-center gap-2">
                      <select
                        value={filterPriority}
                        onChange={(e) => setFilterPriority(e.target.value)}
                        className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300 outline-none"
                      >
                        <option value="all">All Priorities</option>
                        <option value="Urgent">Urgent (P1)</option>
                        <option value="High">High (P2)</option>
                        <option value="Medium">Medium (P3)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3 overflow-y-auto max-h-[500px]">
                    {filteredTickets.map(t => (
                      <div
                        key={t.id}
                        onClick={() => setSelectedTicket(t)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${selectedTicket?.id === t.id ? 'bg-blue-950/40 border-[#00aeef]' : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'}`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[#00aeef]">{t.ticketNumber}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                              t.priority.includes('Urgent') ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                              t.priority.includes('High') ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                              'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            }`}>
                              {t.priority}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-400">{t.createdTime}</span>
                        </div>
                        <div className="text-sm font-bold text-white mb-2">{t.subject}</div>
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <div>Requester: <span className="text-slate-200 font-medium">{t.requester}</span> ({t.department})</div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            <span className="text-emerald-400 font-medium">{t.status}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ticket Inspector & Thread */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
                  {selectedTicket ? (
                    <div className="flex flex-col h-full">
                      <div className="border-b border-slate-800 pb-3 mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold font-mono text-[#00aeef]">{selectedTicket.ticketNumber}</span>
                          <span className="text-xs font-semibold bg-slate-900 px-2 py-1 rounded-lg border border-slate-800 text-slate-300">
                            {selectedTicket.assignedTo}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-white mb-1">{selectedTicket.subject}</h3>
                        <div className="text-xs text-slate-400">From: <span className="text-slate-200">{selectedTicket.requester}</span> ({selectedTicket.email})</div>
                      </div>

                      {/* Conversation thread */}
                      <div className="flex-1 overflow-y-auto space-y-3 max-h-[300px] pr-2 mb-4">
                        {selectedTicket.messages.map((m, idx) => (
                          <div key={idx} className={`p-3 rounded-xl text-xs ${m.isAgent ? 'bg-blue-950/40 border border-blue-900/50 ml-4' : 'bg-slate-900 border border-slate-800 mr-4'}`}>
                            <div className="flex items-center justify-between mb-1 font-bold text-slate-300">
                              <span>{m.sender}</span>
                              <span className="text-[10px] text-slate-400 font-normal">{m.time}</span>
                            </div>
                            <div className="text-slate-200 leading-relaxed">{m.text}</div>
                          </div>
                        ))}
                      </div>

                      {/* Reply input */}
                      <form onSubmit={handleSendReply} className="flex gap-2 pt-2 border-t border-slate-800">
                        <input
                          type="text"
                          placeholder="Type reply or note..."
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-[#00aeef]"
                        />
                        <button
                          type="submit"
                          className="bg-[#00aeef] hover:bg-[#009cd7] text-white p-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center text-slate-400 py-12">
                      <Ticket className="w-10 h-10 mb-3 opacity-40" />
                      <div className="text-sm font-semibold">Select a ticket to inspect conversation & SLA</div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ) : activeTab === 'kanban' ? (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Kanban className="w-5 h-5 text-[#00aeef]" /> Interactive Kanban Ticket Board
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {['Open', 'Pending', 'Resolved', 'Closed'].map((status) => (
                  <div key={status} className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">{status}</span>
                      <span className="text-[10px] font-bold bg-slate-900 px-2 py-0.5 rounded-full text-slate-400">
                        {tickets.filter(t => t.status === status).length}
                      </span>
                    </div>
                    <div className="space-y-3 flex-1">
                      {tickets.filter(t => t.status === status).map(t => (
                        <div key={t.id} className="bg-slate-900 border border-slate-800 p-3 rounded-xl hover:border-slate-700 transition-all cursor-pointer">
                          <div className="text-[10px] font-mono font-bold text-[#00aeef] mb-1">{t.ticketNumber}</div>
                          <div className="text-xs font-bold text-white mb-2">{t.subject}</div>
                          <div className="flex items-center justify-between text-[10px] text-slate-400">
                            <span>{t.requester}</span>
                            <span className="text-blue-400 font-medium">{t.department}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === 'ai' ? (
            <div className="max-w-3xl mx-auto space-y-6 bg-slate-950 border border-slate-800 rounded-3xl p-8">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-white">Elea AI Intelligent Service Desk Copilot</h2>
                  <p className="text-xs text-slate-400">Powered by advanced LLM inference & RAG knowledge synthesis</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                  <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" /> Automated Incident Triage & Resolution Suggestion
                  </h3>
                  <p className="text-sm text-slate-200 mb-3">Elea AI has scanned 24 open tickets. 3 tickets require immediate intervention due to potential AWS cloud infrastructure anomaly.</p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-md shadow-purple-500/20 cursor-pointer">
                    Run Automated Batch Resolution & KB Draft
                  </button>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                  <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Ask Elea AI about ITIL Workflows</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. How do I configure multi-tier CAB approval for emergency production changes?"
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-purple-500"
                    />
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer">
                      Ask AI
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'kb' ? (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#00aeef]" /> Knowledge Base & SOP Management
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Cloud Infrastructure Runbooks', count: 18, desc: 'AWS/Azure failover procedures & database recovery steps.' },
                  { title: 'Information Security & Compliance', count: 12, desc: 'SOC2 Type II audits, SSO policies, and GDPR workflows.' },
                  { title: 'Hardware & Workstation Setup', count: 24, desc: 'MacBook/Dell provisioning guides and peripheral requests.' },
                ].map((kb, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all cursor-pointer">
                    <h3 className="text-sm font-bold text-white mb-2">{kb.title}</h3>
                    <p className="text-xs text-slate-400 mb-4">{kb.desc}</p>
                    <span className="text-[11px] text-[#00aeef] font-semibold">{kb.count} Articles published</span>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === 'reports' ? (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#00aeef]" /> ITSM Performance & SLA Reports
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-white mb-4">First Response Time (FRT) Trends</h3>
                  <div className="h-48 flex items-end gap-3 pt-6 px-2">
                    {[40, 65, 30, 85, 50, 95, 75].map((val, i) => (
                      <div key={i} className="flex-1 bg-slate-900 rounded-t-lg flex flex-col justify-end items-center h-full group relative">
                        <div className="w-full bg-[#00aeef] rounded-t-lg transition-all group-hover:bg-blue-400" style={{ height: `${val}%` }}></div>
                        <span className="text-[10px] text-slate-400 mt-2">Day {i+1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-white mb-4">Ticket Distribution by Department</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'IT Infrastructure', pct: '45%', color: 'bg-blue-500' },
                      { name: 'Software Engineering', pct: '30%', color: 'bg-indigo-500' },
                      { name: 'HR Support', pct: '15%', color: 'bg-purple-500' },
                      { name: 'Customer Success', pct: '10%', color: 'bg-emerald-500' },
                    ].map((d, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1 font-medium">
                          <span className="text-slate-300">{d.name}</span>
                          <span className="text-white font-bold">{d.pct}</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-2">
                          <div className={`${d.color} h-2 rounded-full`} style={{ width: d.pct }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-8 space-y-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#00aeef]" /> Helpdesk Configuration & SLAs
              </h2>
              <div className="space-y-4 text-xs">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">Email Ingestion Gateway</div>
                    <div className="text-slate-400">support@faveo.enterprise.com (IMAP/OAuth)</div>
                  </div>
                  <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">Connected</span>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">Active Directory / LDAP Sync</div>
                    <div className="text-slate-400">Auto-sync user directory every 6 hours</div>
                  </div>
                  <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">Active</span>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* New Ticket Modal */}
      {isNewTicketModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white">Create New Support Ticket</h3>
              <button
                onClick={() => setIsNewTicketModalOpen(false)}
                className="text-slate-400 hover:text-white text-lg font-bold px-2"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateTicket} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Subject / Summary</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. VPN connection failing after macOS update"
                  value={newSubj}
                  onChange={(e) => setNewSubj(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 outline-none focus:border-[#00aeef]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Requester Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={newReq}
                    onChange={(e) => setNewReq(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 outline-none focus:border-[#00aeef]"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@enterprise.com"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 outline-none focus:border-[#00aeef]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Department</label>
                  <select
                    value={newDept}
                    onChange={(e) => setNewDept(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white outline-none"
                  >
                    <option value="IT Infrastructure">IT Infrastructure</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="HR Support">HR Support</option>
                    <option value="Customer Success">Customer Success</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Priority Level</label>
                  <select
                    value={newPri}
                    onChange={(e) => setNewPri(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white outline-none"
                  >
                    <option value="Urgent (P1)">Urgent (P1)</option>
                    <option value="High (P2)">High (P2)</option>
                    <option value="Medium (P3)">Medium (P3)</option>
                    <option value="Low (P4)">Low (P4)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Description / Details</label>
                <textarea
                  rows={3}
                  placeholder="Describe the issue in detail..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 outline-none focus:border-[#00aeef] resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsNewTicketModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-slate-300 hover:bg-slate-800 transition-all font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#00aeef] hover:bg-[#009cd7] text-white font-bold transition-all shadow-md shadow-blue-500/20"
                >
                  Create Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
