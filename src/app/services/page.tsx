'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_OVERVIEW } from '@/lib/constants';

const PANEL_BG = ['bg-navy', 'bg-teal', 'bg-slate'];
const PANEL_BORDER = ['border-navy', 'border-teal', 'border-slate'];

export default function ServicesPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <main>
      {/* Page header */}
      <section className="bg-surface py-16 lg:py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="label-caps text-text-muted mb-4">Services</p>
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-navy">
            전문 서비스
          </h1>
          <p className="mt-4 text-text-muted text-lg max-w-2xl">
            HRM · HRD · AX — 세 개의 전문 서비스 영역으로 조직의 인사혁신을 종합 지원합니다.
          </p>
        </div>
      </section>

      {/* 3 Vertical Panels */}
      <section className="flex flex-col lg:flex-row">
        {SERVICES_OVERVIEW.map((service, idx) => {
          const isHovered = hovered === service.id;
          const bgClass = PANEL_BG[idx];

          return (
            <Link
              key={service.id}
              href={service.href}
              className={`relative flex-1 min-h-[60vh] flex flex-col justify-end overflow-hidden ${bgClass} group cursor-pointer`}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Default state content */}
              <div className="relative z-10 p-8 lg:p-12">
                <AnimatePresence mode="wait">
                  {!isHovered ? (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-white/40 font-[Inter] font-semibold text-5xl lg:text-7xl mb-4 leading-none select-none">
                        {service.number}
                      </p>
                      <h2 className="text-2xl lg:text-3xl font-light text-white tracking-tight mb-2">
                        {service.title}
                      </h2>
                      <p className="text-white/60 text-sm lg:text-base">{service.subtitle}</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="hover"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white/30 font-[Inter] font-semibold text-5xl lg:text-7xl mb-4 leading-none select-none">
                        {service.number}
                      </p>
                      <h2 className="text-2xl lg:text-3xl font-light text-white tracking-tight mb-4">
                        {service.title}
                      </h2>
                      {/* Highlight keywords */}
                      <ul className="space-y-2 mb-6">
                        {service.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-sm text-white/80">
                            <span className="w-1 h-1 rounded-full bg-white/60 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-2 text-white font-medium text-sm border-b border-white/40 pb-0.5">
                        자세히 보기
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Subtle overlay on hover */}
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? 'opacity-10' : 'opacity-0'}`}
              />
            </Link>
          );
        })}
      </section>
    </main>
  );
}
