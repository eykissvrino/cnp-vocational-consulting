'use client';

import { useEffect, useRef, useState } from 'react';
import type { StatItem } from '@/types';

interface ServiceStatsProps {
  stats: StatItem[];
  color?: string;
}

function AnimatedNumber({ value, suffix }: { value: string; suffix?: string }) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);
  const numericValue = parseInt(value, 10);

  useEffect(() => {
    if (isNaN(numericValue)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1200;
          const steps = 40;
          const stepTime = duration / steps;
          let current = 0;
          const increment = numericValue / steps;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setDisplayed(numericValue);
              clearInterval(timer);
            } else {
              setDisplayed(Math.floor(current));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <span ref={ref}>
      {displayed}
      {suffix}
    </span>
  );
}

export default function ServiceStats({ stats, color }: ServiceStatsProps) {
  const valueColor = color === 'green' ? 'text-green' : 'text-primary';

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white rounded-xl p-6 border border-border shadow-sm"
            >
              <p className={`text-3xl md:text-4xl font-bold ${valueColor} mb-1`}>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-text-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
