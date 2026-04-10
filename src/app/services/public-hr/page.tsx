import type { Metadata } from 'next';
import { PUBLIC_HR_SERVICE, PUBLIC_HR_PAIN_POINTS, PORTFOLIO_PROJECTS } from '@/lib/constants';
import ServiceHero from '@/components/services/ServiceHero';
import SolutionCard from '@/components/services/SolutionCard';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import ServiceStats from '@/components/services/ServiceStats';
import ServiceCTA from '@/components/services/ServiceCTA';
import { getIcon } from '@/lib/icons';

export const metadata: Metadata = {
  title: '공공기관 HR 컨설팅 — 직무급 전환·경영평가 대응',
  description:
    '공공기관 직무중심 인사제도 개편, 조직·인력 운영진단, 중장기 경영전략 수립, 경영평가 대응 지원. 공공부문 HR 혁신 전문.',
};

const relatedProjects = PORTFOLIO_PROJECTS.filter((p) => p.category === 'HRM').slice(0, 3);

export default function PublicHRPage() {
  return (
    <main>
      {/* Hero */}
      <ServiceHero
        tag={PUBLIC_HR_SERVICE.tag}
        tagColor="navy"
        title={PUBLIC_HR_SERVICE.title}
        subtitle={PUBLIC_HR_SERVICE.subtitle}
        description={PUBLIC_HR_SERVICE.description}
      />

      {/* 기재부 가이드라인 */}
      <section className="py-6 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 justify-center text-center">
            <div className="w-1 h-12 bg-primary rounded-full hidden sm:block" />
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">기획재정부 가이드라인 기반</p>
              <p className="text-white text-lg font-light">직무급 전환의 <span className="font-semibold text-primary-light">체계적 설계와 안착</span>을 지원합니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="label-caps text-text-muted mb-3">공통 과제</p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-navy">
              이런 고민이 있으신가요?
            </h2>
            <p className="mt-3 text-text-muted max-w-xl mx-auto">
              많은 공공기관이 직면한 인사관리의 공통 과제입니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PUBLIC_HR_PAIN_POINTS.map((point) => {
              const IconComponent = getIcon(point.icon);
              return (
                <div
                  key={point.title}
                  className="bg-white rounded-xl p-8 border border-border"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                  <h3 className="font-semibold text-navy mb-2">{point.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="label-caps text-text-muted mb-3">솔루션</p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-navy">
              공공기관 HR 컨설팅 솔루션
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PUBLIC_HR_SERVICE.items.map((item) => (
              <SolutionCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                methodology={item.methodology}
                deliverables={item.deliverables}
                color="navy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="label-caps text-text-muted mb-3">프로세스</p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-navy">
              컨설팅 진행 과정
            </h2>
            <p className="mt-3 text-text-muted">검증된 4단계 방법론으로 성공적인 전환을 지원합니다</p>
          </div>
          <ProcessTimeline steps={PUBLIC_HR_SERVICE.process} />
        </div>
      </section>

      {/* Stats */}
      <ServiceStats stats={PUBLIC_HR_SERVICE.stats} color="navy" />

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="label-caps text-text-muted mb-3">사업실적</p>
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-navy">
                공공기관 HR 주요 수행 실적
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
        text={PUBLIC_HR_SERVICE.cta.text}
        href={PUBLIC_HR_SERVICE.cta.href}
        color="navy"
      />
    </main>
  );
}
