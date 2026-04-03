// ===== Service Types =====
export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  methodology?: string;      // 방법론 설명
  deliverables?: string[];   // 주요 산출물
}

export interface ServiceData {
  id: string;
  tag: string;
  tagColor: string;
  team: string;
  title: string;
  subtitle: string;
  description: string;
  items: ServiceItem[];
  process: ProcessStep[];
  stats: StatItem[];
  cta: {
    text: string;
    href: string;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

// ===== Portfolio Types =====
export interface PortfolioProject {
  id: number;
  name: string;
  client: string;
  period: string;
  year: number;
  category: string;
  status: string;
  overview?: string;
  tasks?: string[];
  results?: string[];
  deliverables?: string[];
}

// ===== FAQ Types =====
export interface FAQItem {
  question: string;
  answer: string;
}

// ===== About Tab Types =====
export interface TimelineItem {
  year: string;
  events: string[];
}

// ===== Navigation Types =====
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ===== Team Types =====
export interface Team {
  id: string;
  name: string;
  description: string;
  serviceArea: string;
}

// ===== Featured Client Types =====
export interface FeaturedClient {
  name: string;
  category: string;
}

// ===== AX Maturity Diagnostic Types =====
export interface MaturityQuestion {
  id: number;
  dimension: string;
  question: string;
  options: { label: string; score: number }[];
}
