"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES_OVERVIEW } from "@/lib/constants";

const SERVICE_ACCENTS: Record<
  string,
  { color: string; bgLight: string; numColor: string; label: string }
> = {
  hrm: {
    color: "var(--color-teal)",
    bgLight: "rgba(26,107,114,0.06)",
    numColor: "rgba(26,107,114,0.08)",
    label: "HRM",
  },
  "public-hr": {
    color: "#334155",
    bgLight: "rgba(51,65,85,0.06)",
    numColor: "rgba(51,65,85,0.07)",
    label: "공공HR",
  },
  hrd: {
    color: "var(--color-primary)",
    bgLight: "rgba(224,123,57,0.06)",
    numColor: "rgba(224,123,57,0.07)",
    label: "HRD",
  },
  ax: {
    color: "var(--color-navy)",
    bgLight: "rgba(15,23,41,0.04)",
    numColor: "rgba(15,23,41,0.06)",
    label: "AX",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function ServicesOverview() {
  return (
    <section className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="label-caps text-text-muted mb-3">서비스</p>
          <h2 className="text-4xl font-light tracking-tight text-navy">전문 영역</h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES_OVERVIEW.map((service) => {
            const accent = SERVICE_ACCENTS[service.id] ?? {
              color: "var(--color-navy)",
              bgLight: "rgba(15,23,41,0.04)",
              numColor: "rgba(15,23,41,0.06)",
              label: service.id.toUpperCase(),
            };

            return (
              <motion.div
                key={service.id}
                variants={cardVariant}
                className="group relative bg-white border border-border border-l-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                style={{ borderLeftColor: accent.color }}
              >
                {/* Faded huge number in background */}
                <span
                  className="absolute -bottom-4 -right-2 text-[7rem] font-black pointer-events-none select-none leading-none"
                  style={{
                    color: accent.numColor,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {service.number}
                </span>

                {/* Colored top accent band */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: accent.color }}
                />

                <div className="relative p-6 flex flex-col h-full">
                  {/* Service label badge */}
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                      style={{ background: accent.color }}
                    >
                      {accent.label}
                    </span>
                    <span className="text-xs text-text-light font-medium font-[Inter]">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-navy mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-8 flex-1">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-text">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: accent.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    href={service.href}
                    className="text-sm font-semibold transition-colors duration-200 inline-flex items-center gap-1 group/link"
                    style={{ color: accent.color }}
                  >
                    자세히 보기
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
