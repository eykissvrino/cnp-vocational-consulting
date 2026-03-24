'use client';

import { useState, useMemo } from 'react';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import type { PortfolioProject } from '@/types';
import PortfolioFilter from './PortfolioFilter';
import ProjectTable from './ProjectTable';
import ProjectModal from './ProjectModal';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <PortfolioFilter active={activeFilter} onChange={setActiveFilter} />
          <p className="text-sm text-text-muted">
            총 <span className="font-semibold text-primary">{filtered.length}</span>건
          </p>
        </div>

        <div
          key={activeFilter}
          style={{ animation: 'slideIn 0.25s ease-out' }}
        >
          <ProjectTable projects={filtered} onSelect={setSelectedProject} />
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
