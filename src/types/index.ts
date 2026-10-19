export interface CapabilityItem {
  id: string;
  title: string;
  category: 'itsm' | 'operations' | 'platform';
  description: string;
  bulletPoints: string[];
  metrics: string;
  iconName: string;
  itilPhase: string;
}

export interface FlowchartStep {
  id: number;
  title: string;
  shortDesc: string;
  actor: 'End User' | 'Elea AI Engine' | 'IT Support / Tier 2' | 'CAB / Manager' | 'Automated System';
  inputs: string[];
  actions: string[];
  outputs: string[];
  itilStandard: string;
  icon: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  summary: string;
  keyUseCases: string[];
  compliance: string;
  impactMetric: string;
  iconName: string;
}

export interface AccoladeItem {
  id: string;
  title: string;
  category: string;
  year: string;
  source: string;
  accentColor: string;
}

export interface CustomerStory {
  id: string;
  name: string;
  sector: string;
  quote: string;
  author: string;
  role: string;
  metric: string;
  logoText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Features' | 'Deployment' | 'Pricing';
}

export interface ScreenshotCard {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  tag: string;
}

export interface TopReasonItem {
  id: string;
  title: string;
  description: string;
  iconType: 'solution' | 'itil' | 'analytics' | 'global' | 'sizes' | 'integration';
}

export interface CoreItsmCardItem {
  id: string;
  title: string;
  description: string;
  bannerBg: string;
  accentColor: string;
  iconName: string;
}
