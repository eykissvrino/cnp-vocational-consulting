"use client";

import { useEffect, useRef, useState } from "react";
import { HOME_STATS } from "@/lib/constants";
import { motion } from "framer-motion";
import { BarChart3, Building2, Clock, Layers, type LucideIcon } from "lucide-react";

const ACCENT_COLORS: {
  bg: string;
  border: string;
  text: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}[] = [
  { bg: "bg-teal/10", border: "border-teal/20", text: "text-teal", icon: BarChart3, iconColor: "var(--color-teal)", iconBg: "rgba(26,107,114,0.10)" },
  { bg: "bg-navy/8", border: "border-navy/15", text: "text-navy", icon: Building2, iconColor: "var(--color-navy)", iconBg: "rgba(15,23,41,0.08)" },
  { bg: "bg-primary/10", border: "border-primary/20", text: "text-primary", icon: Clock, iconColor: "var(--color-primary)", iconBg: "rgba(224,123,57,0.10)" },
  { bg: "bg-slate/10", border: "border-slate/15", text: "text-slate", icon: Layers, iconColor: "var(--color-slate)", iconBg: "rgba(71,85,105,0.10)" },
];

function CountUp({
  target,
  suffix,
  started,
}: {
  target: number;
  suffix?: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Fallback: start immediately if already in viewport on mount
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);

    // Also check immediately in case already visible
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setStarted(true);
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F8F7F5 0%, #F0EDE8 100%)",
      }}
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15,23,41,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-12">
          <p className="label-caps text-text-muted mb-2">숫자로 보는 실적</p>
          <div className="w-12 h-0.5 bg-teal mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {HOME_STATS.map((stat, i) => {
            const accent = ACCENT_COLORS[i];
            const is4th = i === 3;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                {/* Faded large number in background */}
                {!is4th && (
                  <span
                    className="absolute -bottom-2 -right-1 text-7xl font-black pointer-events-none select-none leading-none"
                    style={{
                      color: "rgba(15,23,41,0.04)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {stat.value}
                  </span>
                )}

                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background:
                      i === 0
                        ? "var(--color-teal)"
                        : i === 1
                        ? "var(--color-navy)"
                        : i === 2
                        ? "var(--color-primary)"
                        : "var(--color-slate)",
                  }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                    style={{ background: accent.iconBg }}
                  >
                    <accent.icon className="w-5 h-5" style={{ color: accent.iconColor }} strokeWidth={1.8} />
                  </div>

                  {is4th ? (
                    /* 4th stat: text badge instead of counter */
                    <div className="mb-2">
                      <div
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold text-white mb-2"
                        style={{ background: "var(--color-slate)" }}
                      >
                        <span style={{ fontFamily: "Inter, sans-serif" }}>
                          {stat.value}
                        </span>
                        <span>{stat.suffix}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {stat.label.split("·").map((s) => (
                          <span
                            key={s}
                            className="text-xs px-2 py-0.5 rounded-full bg-surface-warm text-text-muted font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p
                      className="text-5xl font-semibold text-navy mb-1 stat-number leading-none"
                    >
                      <CountUp
                        target={parseInt(stat.value)}
                        suffix={stat.suffix}
                        started={started}
                      />
                    </p>
                  )}

                  <p className="text-sm text-text-muted mt-2">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
