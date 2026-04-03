"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FEATURED_PROJECTS = [
  {
    category: "AX",
    categoryColor: "var(--color-navy)",
    categoryBg: "rgba(15,23,41,0.10)",
    client: "한국산업인력공단",
    title: "AX 진단 컨설팅 도구 개발",
    overview: "컨소시엄 공동훈련 참여기업 AX(인공지능전환) 진단 컨설팅 도구 개발",
    year: "2026",
  },
  {
    category: "HRM",
    categoryColor: "var(--color-teal)",
    categoryBg: "rgba(26,107,114,0.10)",
    client: "강원랜드",
    title: "직무분석 및 적정인력 산정",
    overview: "전사 직무분석 및 적정인력 산정 컨설팅",
    year: "2024",
  },
  {
    category: "HRM",
    categoryColor: "var(--color-teal)",
    categoryBg: "rgba(26,107,114,0.10)",
    client: "KG모빌리티",
    title: "직급제도 및 수당체계 개편",
    overview: "직무분석 기반 직급제도 및 수당체계 개편 컨설팅",
    year: "2023",
  },
];

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

export default function FeaturedProjectsSection() {
  return (
    <section className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="label-caps text-text-muted mb-3">사업실적</p>
          <h2 className="text-4xl font-light tracking-tight text-navy mb-4">
            최근 주요 실적
          </h2>
          <p className="text-text-muted text-lg">직업능력컨설팅본부의 대표 프로젝트</p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
        >
          {FEATURED_PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              className="group bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Top color band */}
              <div
                className="h-1 w-full"
                style={{ background: project.categoryColor }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Category tag + year */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      color: project.categoryColor,
                      background: project.categoryBg,
                    }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-surface text-text-muted"
                  >
                    {project.year}
                  </span>
                </div>

                {/* Client name */}
                <p className="text-xs text-text-light font-medium mb-2 uppercase tracking-wide">
                  {project.client}
                </p>

                {/* Project title */}
                <h3 className="text-lg font-semibold text-navy mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Overview */}
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  {project.overview}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-primary transition-colors duration-200 group"
          >
            전체 사업실적 보기
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
