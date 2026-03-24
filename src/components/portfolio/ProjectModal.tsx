'use client';

import { useEffect } from 'react';
import { X, CheckCircle, Clock } from 'lucide-react';
import type { PortfolioProject } from '@/types';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const isDone = project.status === '완료';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ animation: 'fadeIn 0.2s ease-out' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary">
                {project.category}
              </span>
              <span
                className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded ${
                  isDone
                    ? 'bg-green/10 text-green'
                    : 'bg-primary/10 text-primary'
                }`}
              >
                {isDone ? (
                  <CheckCircle className="w-3 h-3" />
                ) : (
                  <Clock className="w-3 h-3" />
                )}
                {project.status}
              </span>
            </div>
            <h2 className="text-lg font-bold text-text leading-snug">{project.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-surface text-text-muted hover:text-text transition-colors cursor-pointer flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Meta */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface rounded-lg p-3">
              <p className="text-xs text-text-muted mb-1">발주기관</p>
              <p className="text-sm font-semibold text-text">{project.client}</p>
            </div>
            <div className="bg-surface rounded-lg p-3">
              <p className="text-xs text-text-muted mb-1">수행기간</p>
              <p className="text-sm font-semibold text-text">{project.period}</p>
            </div>
          </div>

          {/* Overview */}
          {project.overview && (
            <div>
              <h3 className="text-sm font-semibold text-text mb-2">사업 개요</h3>
              <p className="text-sm text-text-muted leading-relaxed">{project.overview}</p>
            </div>
          )}

          {/* Tasks */}
          {project.tasks && project.tasks.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-text mb-2">주요 과업</h3>
              <ul className="space-y-1.5">
                {project.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-text mb-2">주요 성과</h3>
              <ul className="space-y-1.5">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                    <CheckCircle className="w-4 h-4 text-green mt-0.5 flex-shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
