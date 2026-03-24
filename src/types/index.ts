// ===== Service Types =====
export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
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
  category: string;
  status: string;
  overview?: string;
  tasks?: string[];
  results?: string[];
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
