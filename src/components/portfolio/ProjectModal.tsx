'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Clock } from 'lucide-react';
import type { PortfolioProject } from '@/types';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

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

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 p-6 border-b border-border">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CategoryBadge category={project.category} />
                  <StatusBadge status={project.status} />
                </div>
                <h2 className="text-xl font-semibold text-text leading-snug">{project.name}</h2>
              </div>
              <button
                onClick={onClose}
                aria-label="닫기"
                className="p-2 rounded-lg hover:bg-surface text-text-muted hover:text-text transition-colors cursor-pointer flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-surface rounded-lg p-4">
                  <p className="text-xs text-text-muted mb-1">발주기관</p>
                  <p className="text-sm font-semibold text-text">{project.client}</p>
                </div>
                <div className="bg-surface rounded-lg p-4">
                  <p className="text-xs text-text-muted mb-1">수행기간</p>
                  <p className="text-sm font-semibold text-text">{project.period}</p>
                </div>
              </div>

              {project.overview && (
                <div>
                  <h3 className="text-sm font-semibold text-text mb-2">사업 개요</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{project.overview}</p>
                </div>
              )}

              {project.tasks && project.tasks.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-text mb-3">주요 과업</h3>
                  <ul className="space-y-2">
                    {project.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.results && project.results.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-text mb-3">주요 성과</h3>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                        <CheckCircle className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
