import type { Metadata } from 'next';
import Link from 'next/link';
import PortfolioSection from '@/components/portfolio/PortfolioSection';

export const metadata: Metadata = {
  title: '사업실적',
};

const STATS = [
  { value: '500+', label: '컨설팅 수행' },
  { value: '200+', label: '참여 기관' },
  { value: '15+', label: '수행 년수' },
];

export default function PortfolioPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy/90 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <span className="text-white/80">사업실적</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">사업실적</h1>
          <p className="text-lg md:text-xl text-primary-light font-medium">
            직업능력컨설팅본부의 주요 컨설팅 실적
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-3 divide-x divide-border">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center px-4 py-2">
                <p className="text-3xl md:text-4xl font-bold text-primary">{value}</p>
                <p className="text-sm text-text-muted mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section (filter + table + modal) */}
      <PortfolioSection />
    </main>
  );
}
