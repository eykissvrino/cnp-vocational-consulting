import type { Metadata } from 'next';
import { AX_SERVICE, AX_MATURITY_LEVELS, PORTFOLIO_PROJECTS } from '@/lib/constants';
import ServiceHero from '@/components/services/ServiceHero';
import SolutionCard from '@/components/services/SolutionCard';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import ServiceStats from '@/components/services/ServiceStats';
import ServiceCTA from '@/components/services/ServiceCTA';
import AXDiagnostic from '@/components/services/AXDiagnostic';

export const metadata: Metadata = {
  title: 'AX 컨설팅 — AI Transformation',
  description:
    'AI 성숙도 진단, AX 전략수립, AI Skill Set 구축, 워크플로우 재설계. 사람 중심의 AI 전환 컨설팅.',
};

const relatedProjects = PORTFOLIO_PROJECTS.filter((p) => p.category === 'AX').slice(0, 3);

const TYPICAL_LEVEL = 2;
const BAR_HEIGHTS = ['h-16', 'h-24', 'h-32', 'h-40', 'h-48'];

export default function AXPage() {
  return (
    <main>
      {/* Hero */}
      <ServiceHero
        tag={AX_SERVICE.tag}
        tagColor="slate"
        title={AX_SERVICE.title}
        subtitle={AX_SERVICE.subtitle}
        description={AX_SERVICE.description}
      />

      {/* AX Maturity Levels */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="label-caps text-white/40 mb-3">성숙도 모델</p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-white">
              AX 성숙도 5단계
            </h2>
            <p className="mt-3 text-white/50 max-w-xl mx-auto">
              귀 기관의 AI 전환 수준을 진단하고 다음 단계로의 도약을 지원합니다
            </p>
          </div>

          {/* Desktop: stepped bar visualization */}
          <div className="hidden md:flex items-end gap-2 justify-center">
            {AX_MATURITY_LEVELS.map((level, idx) => {
              const isTypical = level.level === TYPICAL_LEVEL;
              const heightClass = BAR_HEIGHTS[idx];
              return (
                <div key={level.level} className="flex flex-col items-center flex-1 max-w-[180px]">
                  {/* Typical indicator */}
                  <div className="h-7 flex items-end justify-center mb-1">
                    {isTypical && (
                      <span className="text-primary text-xs font-semibold tracking-wide">평균 위치 ▼</span>
                    )}
                  </div>
                  {/* Bar */}
                  <div
                    className={`w-full ${heightClass} bg-white/10 rounded-t-md flex items-end justify-center pb-3 relative ${isTypical ? 'ring-2 ring-primary ring-inset' : ''}`}
                  >
                    <span className="text-white/60 font-semibold font-[Inter] text-xl">{level.level}</span>
                  </div>
                  {/* Name */}
                  <div className="w-full bg-white/5 px-2 py-2 text-center border-t border-white/10">
                    <p className="text-white text-sm font-medium">{level.name}</p>
                  </div>
                  {/* Description */}
                  <div className="px-1 pt-3 text-center">
                    <p className="text-white/40 text-xs leading-relaxed">{level.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical list */}
          <div className="md:hidden space-y-4">
            {AX_MATURITY_LEVELS.map((level) => {
              const isTypical = level.level === TYPICAL_LEVEL;
              return (
                <div key={level.level} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${isTypical ? 'bg-primary' : 'bg-white/10'}`}>
                    <span className={`font-semibold text-sm font-[Inter] ${isTypical ? 'text-white' : 'text-white/60'}`}>
                      {level.level}
                    </span>
                  </div>
                  <div className="flex-1 pt-1.5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-medium text-sm">{level.name}</span>
                      {isTypical && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                          평균 위치
                        </span>
                      )}
                    </div>
                    <p className="text-white/40 text-xs">{level.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AX Maturity Diagnostic */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="label-caps text-text-muted mb-3">AI 성숙도 자가진단</p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-navy">
              우리 조직의 AI 전환 준비도를 확인하세요
            </h2>
            <p className="mt-3 text-text-muted max-w-xl mx-auto">
              5개 차원의 질문으로 조직의 AX 성숙도를 빠르게 진단해드립니다
            </p>
          </div>
          <AXDiagnostic />
        </div>
      </section>

      {/* Solutions — 5 items, 3-col grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="label-caps text-text-muted mb-3">솔루션</p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-navy">
              AX 컨설팅 서비스
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AX_SERVICE.items.map((item) => (
              <SolutionCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                methodology={item.methodology}
                deliverables={item.deliverables}
                color="slate"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="label-caps text-text-muted mb-3">프로세스</p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-navy">
              컨설팅 진행 과정
            </h2>
            <p className="mt-3 text-text-muted">진단에서 정착까지, 단계적 AI 전환 지원</p>
          </div>
          <ProcessTimeline steps={AX_SERVICE.process} />
        </div>
      </section>

      {/* Stats */}
      <ServiceStats stats={AX_SERVICE.stats} color="slate" />

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="label-caps text-text-muted mb-3">사업실적</p>
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-navy">
                AX 주요 수행 실적
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-surface rounded-xl p-6 border border-border"
                >
                  <p className="label-caps text-text-light mb-3">{project.period}</p>
                  <h3 className="font-semibold text-navy mb-1">{project.name}</h3>
                  <p className="text-text-muted text-sm">{project.client}</p>
                  {project.overview && (
                    <p className="mt-3 text-text-muted text-sm leading-relaxed border-t border-border pt-3">
                      {project.overview}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <ServiceCTA
        text={AX_SERVICE.cta.text}
        href={AX_SERVICE.cta.href}
        color="slate"
      />
    </main>
  );
}
