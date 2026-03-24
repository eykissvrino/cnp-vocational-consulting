import Link from 'next/link';
import type { ServiceData } from '@/types';

interface ServiceHeroProps {
  // Direct props (used by services/page.tsx and hrm/page.tsx)
  tag?: string;
  tagColor?: string;
  team?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  breadcrumbService?: string;
  // Object prop (used by hrd/page.tsx and ax/page.tsx)
  service?: ServiceData;
}

export default function ServiceHero({
  tag,
  tagColor,
  team,
  title,
  subtitle,
  description,
  breadcrumbService,
  service,
}: ServiceHeroProps) {
  const resolvedTag = tag ?? service?.tag ?? '';
  const resolvedTagColor = tagColor ?? service?.tagColor ?? 'primary';
  const resolvedTeam = team ?? service?.team ?? '';
  const resolvedTitle = title ?? service?.title ?? '';
  const resolvedSubtitle = subtitle ?? service?.subtitle ?? '';
  const resolvedDescription = description ?? service?.description ?? '';

  return (
    <section className="bg-gradient-to-br from-navy via-navy to-navy/90 text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            홈
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition-colors">
            서비스
          </Link>
          {breadcrumbService && (
            <>
              <span>/</span>
              <span className="text-white/80">{breadcrumbService}</span>
            </>
          )}
        </nav>

        {/* Tag + Team */}
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary-light">
            {resolvedTag}
          </span>
          <span className="text-white/50 text-sm">{resolvedTeam}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          {resolvedTitle}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-primary-light font-medium mb-4">
          {resolvedSubtitle}
        </p>

        {/* Description */}
        <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
          {resolvedDescription}
        </p>
      </div>
    </section>
  );
}
