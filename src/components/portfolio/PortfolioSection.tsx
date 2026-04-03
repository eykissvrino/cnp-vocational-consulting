'use client';

import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import type { PortfolioProject } from '@/types';
import PortfolioFilter from './PortfolioFilter';
import ProjectModal from './ProjectModal';
import { CheckCircle, Clock, ChevronRight } from 'lucide-react';

function CategoryBadge({ category }: { category: string }) {
  const styles: Record<string, string> = {
    HRM: 'bg-navy text-white',
    HRD: 'bg-teal text-white',
    AX: 'bg-slate text-white',
  };
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded ${styles[category] ?? 'bg-surface text-text-muted'}`}>
      {category}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isDone = status === '완료';
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${isDone ? 'border-green-500 text-green-600' : 'border-primary text-primary'}`}>
      {isDone ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
      {status}
    </span>
  );
}

function ProjectCard({ project, onClick, index }: { project: PortfolioProject; onClick: () => void; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      onClick={onClick}
      className="bg-white border border-border rounded-xl p-6 cursor-pointer hover:border-primary hover:shadow-md transition-all duration-200 group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <CategoryBadge category={project.category} />
        <StatusBadge status={project.status} />
      </div>
      <h3 className="text-base font-semibold text-text mb-1 leading-snug group-hover:text-primary transition-colors">
        {project.name}
      </h3>
      <p className="text-sm text-text-muted mb-3">{project.client}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-light">{project.period}</span>
        <ChevronRight className="w-4 h-4 text-text-light group-hover:text-primary transition-colors" />
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 mb-10">
          <PortfolioFilter active={activeFilter} onChange={setActiveFilter} />
          <span className="ml-auto self-center text-sm text-text-muted">
            총 <span className="font-semibold text-primary">{filtered.length}</span>건
          </span>
        </div>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24 text-text-muted"
            >
              해당 카테고리의 프로젝트가 없습니다
            </motion.div>
          ) : (
            <motion.div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                  index={idx}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
