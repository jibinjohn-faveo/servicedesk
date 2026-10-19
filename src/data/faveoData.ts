import {
  CapabilityItem,
  FlowchartStep,
  IndustryItem,
  AccoladeItem,
  CustomerStory,
  FaqItem,
  ScreenshotCard,
  TopReasonItem,
  CoreItsmCardItem,
} from '../types';

export const ENTERPRISE_LOGOS = [
  { name: 'teksalah', subtitle: 'BEYOND SOLUTIONS', color: '#881337' },
  { name: 'bmb', subtitle: 'ENTERPRISE TECH', color: '#1E293B' },
  { name: 'EYE-Q', subtitle: 'SUPER-SPECIALITY EYE HOSPITALS', color: '#0369A1' },
  { name: 'ALLIANCE', subtitle: 'BROADBAND NETWORKS', color: '#4338CA' },
  { name: 'Club Mahindra', subtitle: 'HOSPITALITY RESORTS', color: '#047857' },
  { name: 'SHIVALIK', subtitle: 'SMALL FINANCE BANK', color: '#15803D' },
  { name: 'Business 1st', subtitle: 'GLOBAL SERVICES', color: '#0284C7' },
];

export const FLOWCHART_STEPS: FlowchartStep[] = [
  {
    id: 1,
    title: 'Multi-Channel Ingestion',
    shortDesc: 'Omnichannel requests captured instantly across email, web portal, API, chat & RMM probes.',
    actor: 'End User',
    inputs: ['Email inbound', 'Self-service catalog order', 'RMM alert ping', 'Elea AI chatbot prompt'],
    actions: [
      'Normalizes tickets into unified JSON schema',
      'Strips spam, duplicates & out-of-office loops',
      'Generates unique tracking ticket ID (#TKT-8402)',
    ],
    outputs: ['Unified incident ticket created in centralized queue'],
    itilStandard: 'ITIL v4 Service Desk Practice',
    icon: 'Inbox',
  },
  {
    id: 2,
    title: 'Smart Triage & SLA Matrix',
    shortDesc: 'Elea AI classifies intent, calculates business urgency, correlates CMDB asset & starts SLA timer.',
    actor: 'Elea AI Engine',
    inputs: ['Raw ticket payload', 'User directory / Active Directory', 'CMDB asset inventory'],
    actions: [
      'Runs sentiment & intent classification',
      'Maps issue to CI asset (e.g., Core-Switch-04, SAP-DB-01)',
      'Assigns response SLA (e.g., 15m P1 vs 4h P3)',
      'Auto-routes to specialized skill team',
    ],
    outputs: ['Prioritized ticket assigned to Tier-2 SysAdmin with live SLA clock'],
    itilStandard: 'ITIL v4 Incident & Asset Management',
    icon: 'Cpu',
  },
  {
    id: 3,
    title: 'ITSM Resolution & Co-Pilot',
    shortDesc: 'Support engineers leverage Elea AI suggestions, remote RMM diagnostics, and past knowledge base records.',
    actor: 'IT Support / Tier 2',
    inputs: ['Pre-populated incident context', 'Asset health telemetry', 'Historical resolution notes'],
    actions: [
      'Elea AI recommends verified fix scripts',
      'One-click RMM remote terminal connection',
      'Internal engineering collaboration notes',
      'Customer communication with automated status pings',
    ],
    outputs: ['Patch applied or service restored in staging/production'],
    itilStandard: 'ITIL v4 Service Operation & Problem Management',
    icon: 'Wrench',
  },
  {
    id: 4,
    title: 'Change Control & Verification',
    shortDesc: 'If resolution requires system modification, automated CAB approval workflows and verification kick in.',
    actor: 'CAB / Manager',
    inputs: ['Change advisory request', 'Rollback plan documentation', 'Downtime impact assessment'],
    actions: [
      'Triggers multi-approver CAB email/mobile vote',
      'Schedules deployment in maintenance window',
      'Automated health check verification across endpoints',
    ],
    outputs: ['Approved change ticket executed with full audit trail'],
    itilStandard: 'ITIL v4 Change Enablement & Release Management',
    icon: 'ShieldCheck',
  },
  {
    id: 5,
    title: 'Closure, CSAT & Knowledge Synthesis',
    shortDesc: 'Ticket closes upon user sign-off, CSAT triggers, and Elea AI drafts new KB documentation.',
    actor: 'Automated System',
    inputs: ['Resolved ticket confirmation', 'User satisfaction survey rating'],
    actions: [
      'Calculates First Response Time (FRT) & MTTR',
      'Collects 5-star CSAT with feedback comments',
      'Elea AI extracts solution into drafted Knowledge Base article for future zero-touch deflection',
    ],
    outputs: ['Audited ticket closure record + updated self-service KB'],
    itilStandard: 'ITIL v4 Continual Improvement',
    icon: 'CheckCircle2',
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'asset-management',
    title: 'Asset Management',
    category: 'operations',
    description: 'Track, manage, and audit hardware and software assets from procurement to decommissioning. Maintain comprehensive lifecycle logs, warranty tracking, and assignment records.',
    bulletPoints: [
      'Complete hardware & software lifecycle management',
      'Financial depreciation calculation & warranty tracking',
      'Barcode and QR-code scanning support',
      'Automatic owner and department asset assignment'
    ],
    metrics: '99.4% Asset Visibility',
    iconName: 'Layers',
    itilPhase: 'IT Asset Management (ITAM)'
  },
  {
    id: 'incident-management',
    title: 'Incident Management',
    category: 'itsm',
    description: 'Rapidly identify, record, and resolve unexpected service interruptions. Prevent business downtime with smart ticket queues, priority matrices, and escalation policies.',
    bulletPoints: [
      'Multi-level SLA rule engine with auto-escalation alerts',
      'Pre-built response templates & macro actions',
      'P1 critical incident war room coordination',
      'Real-time omnichannel communication channels'
    ],
    metrics: '62% Faster MTTR',
    iconName: 'AlertCircle',
    itilPhase: 'ITIL Service Operation'
  },
  {
    id: 'change-management',
    title: 'Change Management',
    category: 'itsm',
    description: 'Streamline standard, normal, and emergency changes. Minimize risk and service disruptions with structured CAB (Change Advisory Board) reviews and rollback safeguards.',
    bulletPoints: [
      'Configurable multi-tier CAB approval workflows',
      'Change calendar to prevent release collisions',
      'Automated risk & business impact assessment scoring',
      'Rollback plans and post-implementation review (PIR)'
    ],
    metrics: 'Zero Unscheduled Outages',
    iconName: 'GitPullRequest',
    itilPhase: 'ITIL Change Enablement'
  },
  {
    id: 'release-management',
    title: 'Release Management',
    category: 'itsm',
    description: 'Plan, test, schedule, and control software and infrastructure rollouts. Ensure safe transitions from development and staging into enterprise production environments.',
    bulletPoints: [
      'Integrated release schedules and milestone tracking',
      'Stage-gate sign-offs between QA, Security & Ops',
      'Automated stakeholder notifications across deploy stages',
      'Traceability back to originating change requests'
    ],
    metrics: '100% Release Traceability',
    iconName: 'Rocket',
    itilPhase: 'ITIL Release Management'
  },
  {
    id: 'rmm-integration',
    title: 'RMM Software Integration',
    category: 'operations',
    description: 'Bridge remote monitoring with your service desk. Ingest hardware alerts, launch remote sessions, and execute administrative diagnostic scripts directly from the ticket.',
    bulletPoints: [
      'Native integration with leading RMM tools and custom APIs',
      'Instant remote desktop and terminal launcher',
      'Live CPU, RAM, and disk utilization telemetry in ticket',
      'MSP multi-tenant client site isolation'
    ],
    metrics: '1-Click Remote Access',
    iconName: 'MonitorCheck',
    itilPhase: 'Infrastructure Monitoring'
  },
  {
    id: 'patch-management',
    title: 'Patch Management',
    category: 'operations',
    description: 'Automate endpoint vulnerability scans and patch distribution. Keep operating systems and mission-critical enterprise applications patched and audit-compliant.',
    bulletPoints: [
      'Automated scanning for missing OS and third-party patches',
      'Scheduled deployment during non-business hours',
      'Immediate patch rollback upon detected regression',
      'Compliance reporting for ISO 27001, SOC-2, and HIPAA'
    ],
    metrics: '99.8% Patch Compliance',
    iconName: 'ShieldAlert',
    itilPhase: 'Endpoint Security'
  },
  {
    id: 'contract-management',
    title: 'Contract Management',
    category: 'operations',
    description: 'Consolidate vendor agreements, maintenance contracts, and third-party SLAs. Receive automated notifications before renewals, price adjustments, or expirations.',
    bulletPoints: [
      'Centralized contract repository with attachment storage',
      'Automated 30/60/90-day renewal notification alerts',
      'Tie vendor contracts directly to covered CIs and assets',
      'Payment milestone and penalty SLA clauses tracking'
    ],
    metrics: '100% Expiry Awareness',
    iconName: 'FileCheck',
    itilPhase: 'Supplier Management'
  },
  {
    id: 'software-license',
    title: 'Software License',
    category: 'operations',
    description: 'Eliminate over-licensing costs and avoid non-compliance penalties. Track OEM, perpetual, user-based, and SaaS subscription seats in real-time.',
    bulletPoints: [
      'License allocation tracking per user and workstation',
      'Real-time under-allocation and over-allocation alarms',
      'Software harvest automation for inactive users',
      'Vendor audit-ready compliance reporting export'
    ],
    metrics: 'Up to 30% License Savings',
    iconName: 'FileBadge',
    itilPhase: 'Software Asset Management'
  },
  {
    id: 'cmdb',
    title: 'Configuration Management Database (CMDB)',
    category: 'platform',
    description: 'Maintain a single source of truth for all IT infrastructure components. Visualize complex upstream and downstream relationship topologies to evaluate incident blast radius.',
    bulletPoints: [
      'Interactive visual CI dependency relationship mapping',
      'Upstream/downstream impact analysis on ticket creation',
      'Granular attribute schemas for servers, switches, apps & DBs',
      'Automatic configuration baseline versioning'
    ],
    metrics: '360° Topology View',
    iconName: 'Database',
    itilPhase: 'Service Configuration Management'
  },
  {
    id: 'network-discovery',
    title: 'Network Discovery',
    category: 'operations',
    description: 'Automatically discover every IP-enabled asset across subnets, VLANs, and cloud environments via agentless SNMP, WMI, and SSH probes.',
    bulletPoints: [
      'Scheduled IP range subnet sweeps & port scans',
      'Agentless hardware and installed software discovery',
      'Automatic CI creation inside the Faveo CMDB',
      'Rogue device detection and instant security notification'
    ],
    metrics: 'Auto-Detect in Minutes',
    iconName: 'Network',
    itilPhase: 'Discovery & Inventory'
  },
  {
    id: 'deployment-options',
    title: 'Self-Hosted & Cloud Based',
    category: 'platform',
    description: 'Choose between fully managed global cloud hosting or on-premises self-hosted deployment. Get 100% source code access for internal security audits and regulatory isolation.',
    bulletPoints: [
      'Self-Hosted: Complete source code ownership & air-gapped support',
      'Cloud SaaS: Automated backups, 99.99% uptime, global CDN',
      'Runs on modern Linux, Docker, MySQL/MariaDB & PHP/Laravel stack',
      'Zero vendor lock-in with one-click data portability'
    ],
    metrics: 'Cloud or 100% On-Premises',
    iconName: 'CloudServer',
    itilPhase: 'Architecture Agility'
  },
  {
    id: 'elea-ai-service-catalog',
    title: 'Elea AI & Service Catalog',
    category: 'platform',
    description: 'Empower end-users with an intuitive e-commerce style service catalog, backed by Elea AI conversational Copilot for instant self-service deflection.',
    bulletPoints: [
      'Elea AI copilot for ticket summarization & auto-replies',
      'Dynamic request forms with conditional field validation',
      'Automatic knowledge base authoring from resolved tickets',
      'Sentiment analysis that prioritizes frustrated user issues'
    ],
    metrics: '40% Deflection via AI',
    iconName: 'Bot',
    itilPhase: 'Service Request Management'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    summary: 'Manage medical IT assets, secure patient data workstations, and ensure HIPAA/regulatory compliance across hospital networks.',
    keyUseCases: [
      'Biomedical & IoT device tracking with maintenance logs',
      '24/7 priority SLA response for ICU & ER workstations',
      'Strict audit trails complying with HIPAA and NABH regulations'
    ],
    compliance: 'HIPAA & ISO 27799 Compliant',
    impactMetric: '99.98% Medical System Uptime',
    iconName: 'HeartPulse'
  },
  {
    id: 'education',
    name: 'Education',
    summary: 'Support distributed campuses, student e-learning portals, lab computers, and faculty IT requests seamlessly.',
    keyUseCases: [
      'Self-service student portal for Wi-Fi and LMS tickets',
      'Lab workstation mass deployment & patch scheduling',
      'Seasonal semester ticket surge auto-triage'
    ],
    compliance: 'FERPA & Edu-Trust Ready',
    impactMetric: '70% Self-Service Resolution',
    iconName: 'GraduationCap'
  },
  {
    id: 'corporate',
    name: 'Corporate & Enterprises',
    summary: 'Streamline multi-department workflows for large workforces across HR, Facilities, Finance, and IT operations.',
    keyUseCases: [
      'Cross-department ticket routing with confidential HR views',
      'Single Sign-On (SSO) with Azure AD, Okta & Google Workspace',
      'Global multi-timezone shift handovers and SLA escalation'
    ],
    compliance: 'SOC 2 Type II & GDPR Ready',
    impactMetric: '4.8/5 Internal Employee CSAT',
    iconName: 'Building2'
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    summary: 'Maintain high availability for POS terminals, barcode scanners, warehouse inventory tablets, and online shopping portals.',
    keyUseCases: [
      'Store manager mobile ticket submission with photo uploads',
      'POS crash incident escalation to on-call engineers in <3 mins',
      'Scheduled off-peak patch deployment across 500+ store terminals'
    ],
    compliance: 'PCI-DSS Compliant Logging',
    impactMetric: '5-Minute Critical Store SLA',
    iconName: 'ShoppingBag'
  },
  {
    id: 'banking',
    name: 'Banking & Financial Services',
    summary: 'Air-gapped on-premises deployment offering complete source code ownership, audit defensibility, and ironclad security.',
    keyUseCases: [
      'Self-hosted deployment behind banking intranet firewalls',
      'Rigorous Change Advisory Board (CAB) digital voting',
      'Encrypted ticket records with granular RBAC permissions'
    ],
    compliance: 'RBI, PCI-DSS & ISO 27001 Certified',
    impactMetric: 'Zero Data Leakage Guarantee',
    iconName: 'Landmark'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    summary: 'Monitor SCADA, shop-floor terminals, and automated assembly systems to resolve operational disruptions before line halts.',
    keyUseCases: [
      'Factory-floor equipment CI mapping in CMDB',
      'Shift-based SLA tracking for round-the-clock plant shifts',
      'Preventative maintenance tickets triggered via IoT SNMP pings'
    ],
    compliance: 'ISO 9001 & Industry 4.0 Standards',
    impactMetric: '45% Drop in Production Downtime',
    iconName: 'Factory'
  },
  {
    id: 'msps',
    name: 'MSPs (Managed Service Providers)',
    summary: 'Deliver multi-tenant remote monitoring, customized client portals, and SLA-backed billable service desk contracts.',
    keyUseCases: [
      'Multi-company data isolation with branded client sub-domains',
      'Automated time tracking per technician for billing export',
      'Direct integration with RMM agents for remote patch pushes'
    ],
    compliance: 'Multi-Tenant Partitioned Architecture',
    impactMetric: '3x Client Capacity per Technician',
    iconName: 'Server'
  },
  {
    id: 'startups',
    name: 'Startups & SMBs',
    summary: 'Affordable, transparent per-agent pricing that scales effortlessly from 3 technicians to hundreds as your company expands.',
    keyUseCases: [
      'Quick 15-minute setup with no complex consulting required',
      'Shared team inboxes for customer and IT support combined',
      'Elea AI agent copilot to handle support without expanding headcount'
    ],
    compliance: 'Transparent Predictable Pricing',
    impactMetric: '50% Savings vs Legacy ITSM',
    iconName: 'Sparkles'
  }
];

export const ACCOLADES: AccoladeItem[] = [
  {
    id: 'softwaresuggest',
    title: 'Most Affordable',
    category: 'Enterprise Service Desk',
    year: '2020',
    source: 'SoftwareSuggest',
    accentColor: '#0284C7'
  },
  {
    id: 'softwareadvice-2026',
    title: 'Front Runners',
    category: 'ITSM & Helpdesk Software',
    year: '2026',
    source: 'Software Advice (Gartner Digital)',
    accentColor: '#1E293B'
  },
  {
    id: 'capterra-2026',
    title: 'Shortlist',
    category: 'Top Rated Service Desk',
    year: '2026',
    source: 'Capterra',
    accentColor: '#D97706'
  },
  {
    id: 'softwareadvice-2025',
    title: 'Front Runners',
    category: 'Customer Service Software',
    year: '2025',
    source: 'Software Advice',
    accentColor: '#4338CA'
  },
  {
    id: 'getapp-2025',
    title: 'Category Leaders',
    category: 'Help Desk & ITSM',
    year: '2025',
    source: 'GetApp',
    accentColor: '#0D9488'
  }
];

export const MILESTONE_METRICS = [
  { value: '12+', label: 'Years of Experience', detail: 'Serving global businesses since 2014' },
  { value: '10,000+', label: 'Customers', detail: 'Trusted by world-class IT & support teams' },
  { value: '50+', label: 'Team Size', detail: 'Dedicated engineers, ITSM experts & support' },
  { value: '50+', label: 'Countries', detail: 'Deployed across North America, Europe & APAC' }
];

export const CUSTOMER_STORIES: CustomerStory[] = [
  {
    id: 'borbone',
    name: 'Caffè Borbone',
    sector: 'Consumer Goods & Retail',
    quote: 'Faveo gave us complete visibility into our distributed logistics and retail IT tickets. Our incident resolution speed increased by 58% in the first quarter.',
    author: 'Marco Valente',
    role: 'Head of IT Infrastructure',
    metric: '58% faster resolution',
    logoText: 'BORBONE'
  },
  {
    id: 'ecs',
    name: 'ECS Technology',
    sector: 'Managed IT & Telecom',
    quote: 'The ability to self-host Faveo with full source code access was a non-negotiable requirement for our banking clients. It gave us enterprise ITSM power at a fraction of legacy vendor pricing.',
    author: 'Khurram Shaikh',
    role: 'Chief Technology Officer',
    metric: '65% cost savings',
    logoText: 'ECS'
  },
  {
    id: 'gep',
    name: 'GEP Worldwide',
    sector: 'Supply Chain & Enterprise Software',
    quote: 'Elea AI auto-categorization and smart ticket dispatch eliminated manual assignment bottlenecks completely. Our team closes tickets before SLA breaches happen.',
    author: 'Sunil Rao',
    role: 'Director of Global Support Operations',
    metric: '99.4% SLA adherence',
    logoText: 'GEP'
  },
  {
    id: 'blue-group',
    name: 'The Blue Group',
    sector: 'Retail & Multi-brand Conglomerate',
    quote: 'Managing store-level hardware assets, warranties, and emergency POS replacement tickets across hundreds of outlets is effortless with Faveo CMDB.',
    author: 'Tariq Al-Mansoor',
    role: 'VP Information Technology',
    metric: '400+ retail outlets connected',
    logoText: 'THE BLUE GROUP'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is a Faveo Service desk software?',
    answer: 'Faveo Service desk software is an enterprise-grade, centralized platform that streamlines incident management, customer support, IT asset tracking, and service delivery to dramatically enhance operational efficiency and user satisfaction. It complies with ITIL best practices and offers both cloud and self-hosted on-premises deployments.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'What key features does Faveo Service desk offer?',
    answer: 'Faveo provides an integrated ITSM suite including Incident, Problem, Change, and Release Management, Configuration Management Database (CMDB) with relationship mapping, IT Asset Tracking (ITAM), Network Discovery via SNMP/WMI, Patch & Contract Management, Elea AI Copilot, customizable Service Catalogs, and multi-channel ticketing.',
    category: 'Features'
  },
  {
    id: 'faq-3',
    question: 'What KPIs improve after implementing the Faveo Service desk Software?',
    answer: 'Organizations routinely observe a 40–60% reduction in Mean Time to Resolution (MTTR), 45% faster First Response Time (FRT), over 99% SLA adherence compliance, and an average employee CSAT score elevation to 94%+. Furthermore, Elea AI deflections reduce Tier-1 ticket volumes by up to 35%.',
    category: 'Features'
  },
  {
    id: 'faq-4',
    question: 'What pricing plans are available for Faveo Service desk?',
    answer: 'Faveo offers two flexible models: 1) Cloud SaaS subscription with instant provisioning, automated updates, and zero server maintenance; and 2) Perpetual or annual Self-Hosted licenses with full source code ownership, allowing air-gapped on-premises deployment on your private servers.',
    category: 'Pricing'
  },
  {
    id: 'faq-5',
    question: 'What industries benefit most from using Faveo Service desk?',
    answer: 'Faveo is tailored for Healthcare, Banking & Financial Services, Higher Education, Corporate Enterprises, Manufacturing, Retail & E-Commerce, and Managed Service Providers (MSPs) requiring strict regulatory compliance (HIPAA, SOC-2, ISO 27001, RBI).',
    category: 'General'
  },
  {
    id: 'faq-6',
    question: 'Can we migrate existing tickets and assets from Jira, Zendesk, or Freshservice?',
    answer: 'Yes! Faveo provides built-in migration wizards and automated CSV/API import tools for Jira Service Management, Zendesk, Freshservice, and ManageEngine, preserving historical ticket threads, users, tags, and asset databases.',
    category: 'Deployment'
  },
  {
    id: 'faq-7',
    question: 'Does Faveo require internet connectivity to run?',
    answer: 'Not for Self-Hosted installations! Faveo Self-Hosted can operate in completely air-gapped, offline intranets, government defense networks, and secure banking perimeters without phone-home requirements.',
    category: 'Deployment'
  }
];

export const SCREENSHOT_CARDS: ScreenshotCard[] = [
  {
    id: 'sc-1',
    title: 'Enterprise Incident & SLA Workspace',
    subtitle: 'Unified Agent Console',
    category: 'ITSM Operations',
    description: 'High-density ticket command center showing real-time P1-P4 priority indicators, SLA countdown timers, linked hardware assets from CMDB, and Elea AI copilot draft answers.',
    highlights: ['Multi-tab ticket switcher', 'Live SLA countdown breach warning', '1-click canned responses & macros', 'Full audit trail & activity timeline'],
    tag: 'Core Console'
  },
  {
    id: 'sc-2',
    title: 'CMDB Visual Topology & Dependency Graph',
    subtitle: 'Configuration Management Database',
    category: 'Infrastructure',
    description: 'Interactive node graph illustrating upstream and downstream dependencies across virtual machines, databases, firewalls, and business applications for blast-radius calculation.',
    highlights: ['Interactive SVG relationship nodes', 'Upstream dependency impact warnings', 'Detailed CI specification drawer', 'Automated network scan sync'],
    tag: 'CMDB & Assets'
  },
  {
    id: 'sc-3',
    title: 'Change Advisory Board (CAB) Workflow',
    subtitle: 'Change & Release Control',
    category: 'ITIL Governance',
    description: 'Structured approval matrix for standard, emergency, and normal changes with voting logs, blackout date calendar collision checks, and rollback documentation.',
    highlights: ['Multi-stakeholder vote tally', 'Maintenance window clash prevention', 'Rollback playbook attachments', 'Audited post-implementation review'],
    tag: 'Change Management'
  },
  {
    id: 'sc-4',
    title: 'Elea AI Copilot & Knowledge Synthesis',
    subtitle: 'Autonomous Support Assistant',
    category: 'Artificial Intelligence',
    description: 'Intelligent copilot that summarizes convoluted email threads, performs real-time sentiment analysis, and synthesizes resolved tickets into verified knowledge base entries.',
    highlights: ['Thread summarization in 3 bullet points', 'Sentiment indicator (Urgent / Frustrated)', 'Automated solution suggestion engine', 'Turn resolved tickets into KB articles'],
    tag: 'Elea AI'
  },
  {
    id: 'sc-5',
    title: 'RMM Telemetry & Remote Endpoint Control',
    subtitle: 'Endpoint Operations & Patching',
    category: 'Remote Management',
    description: 'Real-time CPU/RAM/Disk metrics embedded inside the ticket drawer with one-click remote PowerShell execution and automated security patch deployment.',
    highlights: ['Real-time workstation health metrics', 'Remote desktop session launch', 'Scheduled off-hours patch policies', 'Software harvest for unassigned seats'],
    tag: 'RMM & Patching'
  },
  {
    id: 'sc-6',
    title: 'Executive Analytics & SLA Performance',
    subtitle: 'Reporting & Compliance',
    category: 'Intelligence',
    description: 'Comprehensive business intelligence dashboard tracking First Contact Resolution (FCR), Mean Time to Detect (MTTD), MTTR, technician utilization, and customer CSAT.',
    highlights: ['Customizable drag-and-drop widgets', 'Scheduled PDF & CSV executive exports', 'Departmental chargeback tracking', 'Technician performance scorecards'],
    tag: 'Analytics'
  }
];

export const TOP_REASONS: TopReasonItem[] = [
  {
    id: 'tr-1',
    title: 'Comprehensive ITSM Solution',
    description: 'A comprehensive ITSM solution for managing tickets, assets, changes, and monitoring.',
    iconType: 'solution'
  },
  {
    id: 'tr-2',
    title: 'ITIL-Compliant & Certified',
    description: 'Certified in ITIL for optimal service management and industry best practices.',
    iconType: 'itil'
  },
  {
    id: 'tr-3',
    title: 'Advanced Analytics & Insights',
    description: 'Use clear visuals and reports to track performance and make smart decisions.',
    iconType: 'analytics'
  },
  {
    id: 'tr-4',
    title: 'Trusted by Global Customers',
    description: 'Over 10,000 customers across 50+ countries trust Faveo around the globe.',
    iconType: 'global'
  },
  {
    id: 'tr-5',
    title: 'Tailored for All Business Sizes',
    description: 'Designed for startups, SMEs, and enterprises to fit every organizational need.',
    iconType: 'sizes'
  },
  {
    id: 'tr-6',
    title: 'Customizable & Easy Integration',
    description: 'Seamlessly integrate with your systems and customize workflows for efficiency.',
    iconType: 'integration'
  }
];

export const CORE_ITSM_CARDS: CoreItsmCardItem[] = [
  {
    id: 'core-network',
    title: 'Network Discovery',
    description: 'Automatically scan and detect devices in your IT landscape. Gather real-time data like IP, OS, and device type to keep your asset inventory accurate and up to date for smarter, faster, and efficient device management.',
    bannerBg: 'bg-sky-100',
    accentColor: '#0284C7',
    iconName: 'Monitor'
  },
  {
    id: 'core-incident',
    title: 'Incident Management',
    description: 'Log, track, and resolve incidents with ease. Identify root causes of recurring issues to prevent downtime, reduce operational risks, enhance team productivity, and significantly improve service continuity across your IT operations',
    bannerBg: 'bg-amber-100/70',
    accentColor: '#D97706',
    iconName: 'Workflow'
  },
  {
    id: 'core-sla',
    title: 'Service Level Management',
    description: 'Track SLA performance in real-time. Automate escalations and monitor resolution times to maintain service quality, ensure accountability, improve customer satisfaction, and meet support commitments consistently.',
    bannerBg: 'bg-slate-100',
    accentColor: '#475569',
    iconName: 'ClockGears'
  },
  {
    id: 'core-rmm',
    title: 'Remote Monitoring with Agent Software',
    description: 'The Agent Software offers real-time asset insights, remote access, and patch management solutions. It is easily installed on Windows and Mac for scanning, control, updates, and troubleshooting.',
    bannerBg: 'bg-yellow-100/70',
    accentColor: '#CA8A04',
    iconName: 'FolderClock'
  },
  {
    id: 'core-asset',
    title: 'IT Asset Inventory Management',
    description: 'Track the entire lifecycle of hardware and software—from purchase to disposal. Maintain an accurate IT asset inventory and ensure control with real-time status and location data.',
    bannerBg: 'bg-rose-100/60',
    accentColor: '#E11D48',
    iconName: 'CubeCycle'
  },
  {
    id: 'core-security',
    title: 'Security & Compliance',
    description: 'Safeguard data with secure authentication and role-based access. Ensure compliance and maintain data integrity across all user actions and system events in your IT environment, enhancing accountability and reducing security risks.',
    bannerBg: 'bg-slate-100',
    accentColor: '#334155',
    iconName: 'ShieldLock'
  }
];
