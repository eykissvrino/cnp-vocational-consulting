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
    <span
      className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
        isDone
          ? 'bg-green/10 text-green'
          : 'bg-primary/10 text-primary'
      }`}
    >
      {isDone ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
      {status}
    </span>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const color =
    category === 'HRM'
      ? 'bg-primary/10 text-primary'
      : category === 'HRD'
      ? 'bg-green/10 text-green'
      : 'bg-navy/10 text-navy';
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${color}`}>
      {category}
    </span>
  );
}

export default function ProjectTable({ projects, onSelect }: ProjectTableProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16 text-text-muted">
        해당 조건의 사업 실적이 없습니다.
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
              <th className="text-left px-4 py-3 font-semibold">서비스유형</th>
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
                <td className="px-4 py-3">
                  <CategoryBadge category={project.category} />
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={project.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card List */}
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
            <p className="text-xs text-text-muted mb-1">{project.client}</p>
            <div className="flex items-center gap-2 mt-2">
              <CategoryBadge category={project.category} />
              <span className="text-xs text-text-muted">{project.period}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
