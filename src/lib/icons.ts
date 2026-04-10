import {
  ClipboardList,
  Scale,
  Wallet,
  Building2,
  GraduationCap,
  Target,
  BarChart3,
  Route,
  ScanSearch,
  Map,
  BrainCircuit,
  Workflow,
  Presentation,
  AlertTriangle,
  FileWarning,
  Clock,
  TrendingUp,
  Database,
  Factory,
  RefreshCw,
  Layers,
  Landmark,
  SearchCheck,
  Award,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ComponentType } from 'react';

export type IconComponent = ComponentType<LucideProps>;

export const ICON_MAP: Record<string, IconComponent> = {
  ClipboardList,
  Scale,
  Wallet,
  Building2,
  GraduationCap,
  Target,
  BarChart3,
  Route,
  ScanSearch,
  Map,
  BrainCircuit,
  Workflow,
  Presentation,
  AlertTriangle,
  FileWarning,
  Clock,
  TrendingUp,
  Database,
  Factory,
  RefreshCw,
  Layers,
  Landmark,
  SearchCheck,
  Award,
};

export function getIcon(name: string): IconComponent | null {
  return ICON_MAP[name] ?? null;
}
