import {
  ClipboardList,
  Scale,
  Wallet,
  Building2,
  AlertTriangle,
  FileWarning,
  Clock,
  GraduationCap,
  Target,
  BarChart3,
  Route,
  ScanSearch,
  Map,
  BrainCircuit,
  Workflow,
  Presentation,
} from 'lucide-react';
import type { ServiceItem } from '@/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList,
  Scale,
  Wallet,
  Building2,
  AlertTriangle,
  FileWarning,
  Clock,
  GraduationCap,
  Target,
  BarChart3,
  Route,
  ScanSearch,
  Map,
  BrainCircuit,
  Workflow,
  Presentation,
};

interface SolutionCardProps {
  // String-based icon (used by hrm/page.tsx via data)
  icon?: string | React.ComponentType<{ className?: string }>;
  title?: string;
  description?: string;
  // Object-based item (used by hrd/page.tsx)
  item?: ServiceItem;
  color?: string;
}

export default function SolutionCard({ icon, title, description, item, color }: SolutionCardProps) {
  const resolvedTitle = title ?? item?.title ?? '';
  const resolvedDescription = description ?? item?.description ?? '';
  const resolvedIconName = typeof icon === 'string' ? icon : (item?.icon ?? '');

  const accentColor = color === 'green' ? 'text-green bg-green/10 group-hover:bg-green/20 border-l-green' : 'text-primary bg-primary/10 group-hover:bg-primary/20 border-l-primary';
  const iconColor = color === 'green' ? 'text-green' : 'text-primary';
  const iconBg = color === 'green' ? 'bg-green/10 group-hover:bg-green/20' : 'bg-primary/10 group-hover:bg-primary/20';

  // Support both: string icon name (looked up in map) or direct component
  let IconComponent: React.ComponentType<{ className?: string }> | null = null;
  if (typeof icon === 'function') {
    IconComponent = icon;
  } else if (typeof resolvedIconName === 'string' && resolvedIconName) {
    IconComponent = iconMap[resolvedIconName] ?? null;
  }

  return (
    <div className="group bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-l-4 hover:border-l-primary">
      <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4 transition-colors`}>
        {IconComponent ? (
          <IconComponent className={`w-6 h-6 ${iconColor}`} />
        ) : (
          <span className="w-6 h-6 bg-primary/40 rounded" />
        )}
      </div>
      <h3 className="text-base font-semibold text-navy mb-2">{resolvedTitle}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{resolvedDescription}</p>
    </div>
  );
}
