'use client';

import { getIcon } from '@/lib/icons';

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  methodology?: string;
  deliverables?: string[];
  /** Border accent color: 'primary' | 'teal' | 'navy' | 'slate' */
  color?: 'primary' | 'teal' | 'navy' | 'slate';
}

const COLOR_MAP: Record<string, { border: string; iconBg: string; iconText: string; pillBg: string; pillText: string; pillBorder: string }> = {
  primary: {
    border: 'border-l-[#E07B39]',
    iconBg: 'bg-[#FDF6F0]',
    iconText: 'text-[#E07B39]',
    pillBg: 'bg-[#FDF6F0]',
    pillText: 'text-[#C06A2F]',
    pillBorder: 'border-[#E07B39]/30',
  },
  teal: {
    border: 'border-l-[#1A6B72]',
    iconBg: 'bg-[#EEF7F8]',
    iconText: 'text-[#1A6B72]',
    pillBg: 'bg-[#EEF7F8]',
    pillText: 'text-[#1A6B72]',
    pillBorder: 'border-[#1A6B72]/30',
  },
  navy: {
    border: 'border-l-[#1E2B4A]',
    iconBg: 'bg-[#EEF1F8]',
    iconText: 'text-[#1E2B4A]',
    pillBg: 'bg-[#EEF1F8]',
    pillText: 'text-[#1E2B4A]',
    pillBorder: 'border-[#1E2B4A]/20',
  },
  slate: {
    border: 'border-l-[#475569]',
    iconBg: 'bg-[#F1F3F7]',
    iconText: 'text-[#475569]',
    pillBg: 'bg-[#F1F3F7]',
    pillText: 'text-[#475569]',
    pillBorder: 'border-[#475569]/25',
  },
};

export default function SolutionCard({
  icon,
  title,
  description,
  methodology,
  deliverables,
  color = 'primary',
}: SolutionCardProps) {
  const IconComponent = getIcon(icon);
  const c = COLOR_MAP[color] ?? COLOR_MAP.primary;

  return (
    <div
      className={`group bg-white rounded-xl border border-border border-l-4 ${c.border} p-8 flex flex-col
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:shadow-black/8`}
    >
      {/* Icon */}
      <div className={`w-12 h-12 ${c.iconBg} rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
        {IconComponent ? (
          <IconComponent className={`w-6 h-6 ${c.iconText}`} />
        ) : (
          <span className="w-6 h-6 bg-border rounded" />
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-navy mb-3">{title}</h3>

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed flex-1">{description}</p>

      {/* Bottom section */}
      {(methodology || (deliverables && deliverables.length > 0)) && (
        <div className="mt-5 pt-4 border-t border-border space-y-3">
          {methodology && (
            <div className="bg-surface/50 rounded-lg px-3 py-2.5">
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">방법론</p>
              <p className="text-xs text-navy/70 leading-relaxed">{methodology}</p>
            </div>
          )}
          {deliverables && deliverables.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">주요 산출물</p>
              <div className="flex flex-wrap gap-1.5">
                {deliverables.map((d) => (
                  <span
                    key={d}
                    className={`text-xs ${c.pillBg} ${c.pillText} border ${c.pillBorder} px-2.5 py-1 rounded-full font-medium`}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
