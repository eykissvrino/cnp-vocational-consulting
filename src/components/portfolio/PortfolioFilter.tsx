'use client';

import { PORTFOLIO_FILTERS } from '@/lib/constants';

interface PortfolioFilterProps {
  active: string;
  onChange: (key: string) => void;
}

export default function PortfolioFilter({ active, onChange }: PortfolioFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {PORTFOLIO_FILTERS.map((filter) => {
        const isActive = active === filter.key;
        return (
          <button
            key={filter.key}
            onClick={() => onChange(filter.key)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-primary text-white border-2 border-primary'
                : 'bg-white text-text-muted border-2 border-border hover:border-primary hover:text-primary'
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
