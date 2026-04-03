'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface ServiceHeroProps {
  tag: string;
  tagColor: string;
  team?: string;
  title: string;
  subtitle: string;
  description: string;
  /** Breadcrumb leaf label, e.g. "HRM 컨설팅" */
  breadcrumb?: string;
}

const THEME_MAP: Record<string, { from: string; to: string; tagBg: string; tagText: string; accentLine: string }> = {
  navy: {
    from: 'from-[#0F1729]',
    to: 'to-[#1A3A5C]',
    tagBg: 'bg-[#E07B39]',
    tagText: 'text-white',
    accentLine: 'bg-[#E07B39]',
  },
  teal: {
    from: 'from-[#0F1729]',
    to: 'to-[#0D4A50]',
    tagBg: 'bg-[#1A6B72]',
    tagText: 'text-white',
    accentLine: 'bg-[#1A6B72]',
  },
  green: {
    from: 'from-[#0F1729]',
    to: 'to-[#0D4A50]',
    tagBg: 'bg-[#1A6B72]',
    tagText: 'text-white',
    accentLine: 'bg-[#1A6B72]',
  },
  slate: {
    from: 'from-[#1E2430]',
    to: 'to-[#2A3550]',
    tagBg: 'bg-[#475569]',
    tagText: 'text-white',
    accentLine: 'bg-[#475569]',
  },
  primary: {
    from: 'from-[#0F1729]',
    to: 'to-[#1A3A5C]',
    tagBg: 'bg-[#E07B39]',
    tagText: 'text-white',
    accentLine: 'bg-[#E07B39]',
  },
};

export default function ServiceHero({
  tag,
  tagColor,
  team,
  title,
  subtitle,
  description,
  breadcrumb,
}: ServiceHeroProps) {
  const theme = THEME_MAP[tagColor] ?? THEME_MAP.navy;
  const breadcrumbLabel = breadcrumb ?? tag;

  return (
    <section className={`relative bg-gradient-to-br ${theme.from} ${theme.to} py-24 lg:py-36 overflow-hidden`}>
      {/* Geometric background pattern */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        {/* Large faint circle top-right */}
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full border border-white/5" />
        <div className="absolute -top-16 -right-16 w-[320px] h-[320px] rounded-full border border-white/5" />
        {/* Small dot grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        {/* Diagonal accent line bottom-left */}
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[2px] opacity-10 origin-bottom-left rotate-[-20deg]"
          style={{ background: 'linear-gradient(90deg, transparent, white)' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex items-center gap-1.5 text-xs text-white/40 mb-10"
          aria-label="breadcrumb"
        >
          <Link href="/" className="inline-flex items-center gap-1 hover:text-white/80 transition-colors">
            <Home className="w-3 h-3" />
            <span>홈</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-white/25" />
          <span className="text-white/40">서비스</span>
          <ChevronRight className="w-3 h-3 text-white/25" />
          <span className="text-white/80">{breadcrumbLabel}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
        >
          {/* Tag badge */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`inline-flex items-center gap-2 ${theme.tagBg} ${theme.tagText} label-caps px-3.5 py-1.5 rounded-full font-semibold tracking-widest text-xs shadow-lg`}
            >
              {tag}
            </span>
            {team && (
              <span className="text-xs text-white/40 tracking-wide">{team}</span>
            )}
          </div>

          {/* Accent line */}
          <div className={`w-10 h-1 rounded-full ${theme.accentLine} mb-6 opacity-80`} />

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-white mb-5 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-white/80 font-medium mb-4">
            {subtitle}
          </p>

          {/* Description */}
          <p className="text-base lg:text-lg text-white/55 max-w-2xl leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
