'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { ProcessStep } from '@/types';

interface ProcessTimelineProps {
  steps: ProcessStep[];
  color?: 'primary' | 'teal' | 'navy' | 'slate';
}

const COLOR_MAP: Record<string, { circleBg: string; circleText: string; connectorBg: string; dotRing: string }> = {
  primary: {
    circleBg: 'bg-[#E07B39]',
    circleText: 'text-white',
    connectorBg: 'bg-gradient-to-r from-[#E07B39]/60 to-[#E07B39]/20',
    dotRing: 'ring-[#FDF6F0]',
  },
  teal: {
    circleBg: 'bg-[#1A6B72]',
    circleText: 'text-white',
    connectorBg: 'bg-gradient-to-r from-[#1A6B72]/60 to-[#1A6B72]/20',
    dotRing: 'ring-[#EEF7F8]',
  },
  navy: {
    circleBg: 'bg-[#0F1729]',
    circleText: 'text-white',
    connectorBg: 'bg-gradient-to-r from-[#1E2B4A]/60 to-[#1E2B4A]/20',
    dotRing: 'ring-[#EEF1F8]',
  },
  slate: {
    circleBg: 'bg-[#475569]',
    circleText: 'text-white',
    connectorBg: 'bg-gradient-to-r from-[#475569]/50 to-[#475569]/15',
    dotRing: 'ring-[#F1F3F7]',
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] },
  },
};

export default function ProcessTimeline({ steps, color = 'navy' }: ProcessTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const c = COLOR_MAP[color] ?? COLOR_MAP.navy;

  return (
    <div ref={ref}>
      {/* Desktop: horizontal */}
      <motion.div
        className="hidden lg:flex items-start gap-0"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {steps.map((step, index) => (
          <motion.div key={step.number} className="flex-1 relative" variants={itemVariants}>
            {/* Connector line between steps */}
            {index < steps.length - 1 && (
              <div className={`absolute top-6 left-1/2 w-full h-0.5 ${c.connectorBg} z-0`} />
            )}
            <div className="relative z-10 flex flex-col items-center text-center px-4">
              {/* Numbered circle */}
              <div
                className={`w-12 h-12 rounded-full ${c.circleBg} flex items-center justify-center ${c.circleText} font-bold text-sm mb-4 ring-4 ${c.dotRing} shadow-md`}
              >
                {step.number}
              </div>
              <h4 className="font-semibold text-navy mb-1.5 text-sm">{step.title}</h4>
              <p className="text-text-muted text-xs leading-relaxed max-w-[140px]">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile: vertical */}
      <motion.div
        className="flex flex-col gap-0 lg:hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {steps.map((step, index) => (
          <motion.div key={step.number} className="flex gap-4" variants={itemVariants}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full ${c.circleBg} flex items-center justify-center ${c.circleText} font-bold text-sm flex-shrink-0 shadow-md ring-2 ${c.dotRing}`}
              >
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-0.5 flex-1 min-h-8 ${c.circleBg} my-1 opacity-30`} />
              )}
            </div>
            <div className="pb-8 pt-1">
              <h4 className="font-semibold text-navy mb-1">{step.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
