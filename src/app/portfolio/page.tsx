'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle, Clock, ChevronRight, FileText } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PORTFOLIO_FILTERS, PORTFOLIO_YEARS } from '@/lib/constants';
import type { PortfolioProject } from '@/types';

// ===== Category color config =====
const CATEGORY_COLORS: Record<string, { badge: string; border: string; bar: string; text: string; hoverText: string; hex: string }> = {
  HRM: {
    badge: 'bg-[#1E2B4A] text-white',
    border: 'border-l-[#1E2B4A]',
    bar: 'bg-[#1E2B4A]',
    text: 'text-[#1E2B4A]',
    hoverText: 'group-hover:text-[#1E2B4A]',
    hex: '#1E2B4A',
  },
  HRD: {
    badge: 'bg-[#1A6B72] text-white',
    border: 'border-l-[#1A6B72]',
    bar: 'bg-[#1A6B72]',
    text: 'text-[#1A6B72]',
    hoverText: 'group-hover:text-[#1A6B72]',
    hex: '#1A6B72',
  },
  AX: {
    badge: 'bg-[#E07B39] text-white',
    border: 'border-l-[#E07B39]',
    bar: 'bg-[#E07B39]',
    text: 'text-[#E07B39]',
    hoverText: 'group-hover:text-[#E07B39]',
    hex: '#E07B39',
  },
};
const DEFAULT_COLOR = { badge: 'bg-surface text-text-muted', border: 'border-l-border', bar: 'bg-border', text: 'text-text-muted', hoverText: '', hex: '#9CA3AF' };

function getCatColor(cat: string) {
  return CATEGORY_COLORS[cat] ?? DEFAULT_COLOR;
}

// ===== Animated counter for stats bar =====
function StatCounter({ target, started }: { target: number; started: boolean }) {
  const [count, setCount] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!started) return;
    setCount(0);
    const duration = 1000;
    const fps = 60;
    const totalSteps = Math.round((duration / 1000) * fps);
    let step = 0;

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      step += 1;
      const progress = 1 - Math.pow(1 - step / totalSteps, 3);
      setCount(Math.round(progress * target));
      if (step >= totalSteps) {
        setCount(target);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, duration / totalSteps);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [started, target]);

  return <span>{count}</span>;
}

// ===== Category Badge =====
function CategoryBadge({ category }: { category: string }) {
  const c = getCatColor(category);
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded ${c.badge}`}>
      {category}
    </span>
  );
}

// ===== Status Badge =====
function StatusBadge({ status }: { status: string }) {
  const isDone = status === '완료';
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${
        isDone
          ? 'border-green-500 text-green-600'
          : 'border-primary text-primary'
      }`}
    >
      {isDone ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
      {status}
    </span>
  );
}

// ===== Project Card =====
function ProjectCard({
  project,
  onClick,
  index,
}: {
  project: PortfolioProject;
  onClick: () => void;
  index: number;
}) {
  const c = getCatColor(project.category);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      onClick={onClick}
      className={`bg-white border border-border border-l-4 ${c.border} rounded-xl overflow-hidden cursor-pointer
        transition-all duration-250 group
        hover:-translate-y-1 hover:shadow-lg hover:shadow-black/8 hover:border-l-4`}
    >
      {/* Category color bar at top */}
      <div className={`h-1 w-full ${c.bar}`} />

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <CategoryBadge category={project.category} />
          <StatusBadge status={project.status} />
        </div>

        {/* Client name — prominent */}
        <p className={`text-xl font-bold mb-1 leading-snug ${c.hoverText} transition-colors text-navy`}>
          {project.client}
        </p>
        <p className="text-sm text-text-muted mb-4 leading-snug">{project.name}</p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-text-light">{project.period}</span>
          <ChevronRight className={`w-4 h-4 text-text-light ${c.hoverText} transition-colors`} />
        </div>
      </div>
    </motion.div>
  );
}

// ===== Project Modal =====
function ProjectModal({
  project,
  onClose,
}: {
  project: PortfolioProject | null;
  onClose: () => void;
}) {
  if (!project) return null;
  const c = getCatColor(project.category);

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

        {/* Modal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.22, ease: [0.0, 0.0, 0.2, 1] }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Top color bar */}
          <div className={`h-1.5 w-full ${c.bar} rounded-t-2xl`} />

          {/* Header */}
          <div className="flex items-start justify-between gap-4 px-6 pt-5 pb-4 border-b border-border">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <CategoryBadge category={project.category} />
                <StatusBadge status={project.status} />
              </div>
              <p className={`text-xs font-semibold uppercase tracking-wider ${c.text} mb-1`}>
                {project.client}
              </p>
              <h2 className="text-xl font-semibold text-text leading-snug">
                {project.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="닫기"
              className="p-2 rounded-lg hover:bg-surface text-text-muted hover:text-text transition-colors cursor-pointer flex-shrink-0 mt-0.5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6">
            {/* Meta */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface rounded-xl p-4 border border-border">
                <p className="text-xs text-text-muted mb-1">발주기관</p>
                <p className="text-sm font-semibold text-text">{project.client}</p>
              </div>
              <div className="bg-surface rounded-xl p-4 border border-border">
                <p className="text-xs text-text-muted mb-1">수행기간</p>
                <p className="text-sm font-semibold text-text">{project.period}</p>
              </div>
            </div>

            {/* Overview */}
            {project.overview && (
              <div>
                <h3 className="text-sm font-semibold text-text mb-2 flex items-center gap-1.5">
                  <span className={`w-1 h-4 rounded-full ${c.bar} inline-block`} />
                  사업 개요
                </h3>
                <p className="text-sm text-text-muted leading-relaxed pl-3">
                  {project.overview}
                </p>
              </div>
            )}

            {/* Tasks */}
            {project.tasks && project.tasks.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-text mb-3 flex items-center gap-1.5">
                  <span className={`w-1 h-4 rounded-full ${c.bar} inline-block`} />
                  주요 과업
                </h3>
                <ul className="space-y-2 pl-3">
                  {project.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.bar} mt-1.5 flex-shrink-0`} />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-text mb-3 flex items-center gap-1.5">
                  <span className={`w-1 h-4 rounded-full ${c.bar} inline-block`} />
                  주요 성과
                </h3>
                <ul className="space-y-2 pl-3">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <CheckCircle className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Deliverables */}
            {project.deliverables && project.deliverables.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-text mb-3 flex items-center gap-1.5">
                  <span className={`w-1 h-4 rounded-full ${c.bar} inline-block`} />
                  주요 산출물
                </h3>
                <ul className="space-y-2 pl-3">
                  {project.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <FileText className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ===== Page =====
export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeYear, setActiveYear] = useState<number | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Stats
  const totalCount = PORTFOLIO_PROJECTS.length;
  const hrmCount = PORTFOLIO_PROJECTS.filter((p) => p.category === 'HRM').length;
  const hrdCount = PORTFOLIO_PROJECTS.filter((p) => p.category === 'HRD').length;
  const axCount = PORTFOLIO_PROJECTS.filter((p) => p.category === 'AX').length;

  // Animated counter trigger
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStatsStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const filtered = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((p) => {
      const catMatch = activeCategory === 'all' || p.category === activeCategory;
      const yearMatch = activeYear === 'all' || p.year === activeYear;
      return catMatch && yearMatch;
    });
  }, [activeCategory, activeYear]);

  const groupedByYear = useMemo(() => {
    const years = [...new Set(filtered.map((p) => p.year))].sort((a, b) => b - a);
    return years.map((year) => ({
      year,
      projects: filtered.filter((p) => p.year === year),
    }));
  }, [filtered]);

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0F1729] to-[#1A3A5C] text-white py-20 md:py-28 overflow-hidden">
        {/* Dot pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" aria-hidden>
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <span className="text-white/80">사업실적</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className="w-10 h-1 rounded-full bg-[#E07B39] mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
              사업실적
            </h1>
            <p className="text-lg text-white/60 mb-10">
              시앤피컨설팅 직업능력컨설팅본부의 최근 주요 수행 실적입니다
            </p>

            {/* Stats bar */}
            <div
              ref={statsRef}
              className="inline-flex flex-wrap items-center gap-6 bg-white/8 border border-white/12 rounded-2xl px-7 py-4"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-white font-[Inter]">
                  <StatCounter target={totalCount} started={statsStarted} />건
                </p>
                <p className="text-xs text-white/50 mt-0.5">전체</p>
              </div>
              <div className="w-px h-8 bg-white/15" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#7BA7D4] font-[Inter]">
                  <StatCounter target={hrmCount} started={statsStarted} />건
                </p>
                <p className="text-xs text-white/50 mt-0.5">HRM</p>
              </div>
              <div className="w-px h-8 bg-white/15" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#5ABCC5] font-[Inter]">
                  <StatCounter target={hrdCount} started={statsStarted} />건
                </p>
                <p className="text-xs text-white/50 mt-0.5">HRD</p>
              </div>
              {axCount > 0 && (
                <>
                  <div className="w-px h-8 bg-white/15" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#E07B39] font-[Inter]">
                      <StatCounter target={axCount} started={statsStarted} />건
                    </p>
                    <p className="text-xs text-white/50 mt-0.5">AX</p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-4">
            {PORTFOLIO_FILTERS.map((filter) => {
              const isActive = activeCategory === filter.key;
              return (
                <button
                  key={filter.key}
                  onClick={() => setActiveCategory(filter.key)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-text-muted border-border hover:border-primary hover:text-primary'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Year filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveYear('all')}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-200 cursor-pointer ${
                activeYear === 'all'
                  ? 'bg-navy text-white'
                  : 'bg-gray-100 text-text-muted hover:bg-gray-200'
              }`}
            >
              전체
            </button>
            {PORTFOLIO_YEARS.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-200 cursor-pointer ${
                  activeYear === year
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-text-muted hover:bg-gray-200'
                }`}
              >
                {year}
              </button>
            ))}
            <span className="ml-auto self-center text-sm text-text-muted">
              총 <span className="font-semibold text-primary">{filtered.length}</span>건
            </span>
          </div>

          {/* Card grid grouped by year */}
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24 text-text-muted"
              >
                해당 조건의 프로젝트가 없습니다
              </motion.div>
            ) : (
              <motion.div
                key={`${activeCategory}-${activeYear}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-12"
              >
                {groupedByYear.map(({ year, projects }) => (
                  <div key={year}>
                    {/* Year divider — visually distinct */}
                    <div className="relative flex items-center gap-4 mb-6">
                      {/* Large faded year number */}
                      <span
                        className="absolute -top-3 left-0 text-7xl font-black text-border/60 select-none leading-none pointer-events-none"
                        aria-hidden
                      >
                        {year}
                      </span>
                      <div className="relative flex items-center gap-3">
                        <span className="text-lg font-bold text-navy z-10">{year}년</span>
                        <span className="text-sm text-text-muted z-10 bg-surface px-2 py-0.5 rounded-full border border-border">
                          {projects.length}건
                        </span>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-2 mt-0.5" />
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                      {projects.map((project, idx) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          onClick={() => setSelectedProject(project)}
                          index={idx}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
