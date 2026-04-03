'use client';

import { CheckCircle, Clock } from 'lucide-react';
import type { PortfolioProject } from '@/types';

interface ProjectTableProps {
  projects: PortfolioProject[];
  onSelect: (project: PortfolioProject) => void;
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

export default function ProjectTable({ projects, onSelect }: ProjectTableProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16 text-text-muted">
        해당 카테고리의 프로젝트가 없습니다
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface text-text-muted">
            <tr>
              <th className="text-left px-4 py-3 font-semibold w-10">No.</th>
              <th className="text-left px-4 py-3 font-semibold">사업명</th>
              <th className="text-left px-4 py-3 font-semibold">발주기관</th>
              <th className="text-left px-4 py-3 font-semibold">수행기간</th>
              <th className="text-left px-4 py-3 font-semibold">유형</th>
              <th className="text-left px-4 py-3 font-semibold">상태</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-white">
            {projects.map((project, idx) => (
              <tr
                key={project.id}
                onClick={() => onSelect(project)}
                className="hover:bg-primary-bg cursor-pointer transition-colors duration-150"
              >
                <td className="px-4 py-3 text-text-muted">{idx + 1}</td>
                <td className="px-4 py-3 font-medium text-text">{project.name}</td>
                <td className="px-4 py-3 text-text-muted">{project.client}</td>
                <td className="px-4 py-3 text-text-muted whitespace-nowrap">{project.period}</td>
                <td className="px-4 py-3"><CategoryBadge category={project.category} /></td>
                <td className="px-4 py-3"><StatusBadge status={project.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelect(project)}
            className="bg-white border border-border rounded-xl p-4 cursor-pointer hover:border-primary hover:shadow-md transition-all duration-150"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-sm font-semibold text-text leading-snug flex-1">{project.name}</h3>
              <StatusBadge status={project.status} />
            </div>
            <p className="text-xs text-text-muted mb-2">{project.client}</p>
            <div className="flex items-center gap-2">
              <CategoryBadge category={project.category} />
              <span className="text-xs text-text-muted">{project.period}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
