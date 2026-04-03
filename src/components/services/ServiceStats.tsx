'use client';

import { useEffect, useRef, useState } from 'react';
import type { StatItem } from '@/types';

interface ServiceStatsProps {
  stats: StatItem[];
  color?: string;
}

const VALUE_COLOR_MAP: Record<string, string> = {
  navy: 'text-navy',
  teal: 'text-teal',
  green: 'text-teal',
  slate: 'text-slate',
  primary: 'text-[#E07B39]',
};

function AnimatedNumber({
  value,
  suffix,
  started,
}: {
  value: string;
  suffix?: string;
  started: boolean;
}) {
  const numericValue = parseInt(value, 10);
  const [count, setCount] = useState(isNaN(numericValue) ? 0 : 0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!started || isNaN(numericValue)) return;

    // Reset to 0 first, then animate
    setCount(0);

    const duration = 1800;
    const fps = 60;
    const totalSteps = Math.round((duration / 1000) * fps);
    let step = 0;

    // Clear any previous timer
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      step += 1;
      // Ease-out: progress accelerates then decelerates
      const progress = 1 - Math.pow(1 - step / totalSteps, 3);
      const current = Math.round(progress * numericValue);

      if (step >= totalSteps) {
        setCount(numericValue);
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      } else {
        setCount(current);
      }
    }, duration / totalSteps);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [started, numericValue]);

  if (isNaN(numericValue)) {
    return (
      <span>
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function ServiceStats({ stats, color = 'navy' }: ServiceStatsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const valueColorClass = VALUE_COLOR_MAP[color] ?? 'text-navy';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border bg-white border border-border rounded-2xl overflow-hidden shadow-sm"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center px-6 py-10"
            >
              <p className={`text-4xl font-semibold font-[Inter] ${valueColorClass} mb-2`}>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} started={started} />
              </p>
              <p className="text-text-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
