import type { Metadata } from 'next';
import { HRD_SERVICE, HRD_PAIN_POINTS, PORTFOLIO_PROJECTS } from '@/lib/constants';
import ServiceHero from '@/components/services/ServiceHero';
import SolutionCard from '@/components/services/SolutionCard';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import ServiceStats from '@/components/services/ServiceStats';
import ServiceCTA from '@/components/services/ServiceCTA';
import { getIcon } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'HRD 컨설팅 — 체계적 인재개발',
  description:
    'DACUM·CBC 기반 직무분석, NCS 교육체계 수립, 역량모델링(BEI), Skill Gap 분석, 학습경로 설계. 이론과 현장 실무를 겸비한 인재개발 전문기관.',
};

const relatedProjects = PORTFOLIO_PROJECTS.filter((p) => p.category === 'HRD').slice(0, 3);

export default function HRDPage() {
  return (
    <main>
      {/* Hero */}
      <ServiceHero
        tag={HRD_SERVICE.tag}
        tagColor="teal"
        title={HRD_SERVICE.title}
        subtitle={HRD_SERVICE.subtitle}
        description={HRD_SERVICE.description}
      />

      {/* Pain Points */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="label-caps text-text-muted mb-3">공통 과제</p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-navy">
              이런 고민이 있으신가요?
            </h2>
            <p className="mt-3 text-text-muted max-w-xl mx-auto">
              많은 기관이 직면한 인재개발의 공통 과제입니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HRD_PAIN_POINTS.map((point) => {
              const IconComponent = getIcon(point.icon);
              return (
                <div
                  key={point.title}
                  className="bg-white rounded-xl p-8 border border-border"
                >
                  <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-5">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-amber-600" />
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

      {/* NCS 전문성 */}
      <section className="py-12 bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-widest text-teal font-semibold mb-2">NCS 전문기관</p>
              <h3 className="text-2xl font-light text-navy mb-2">
                국가직무능력표준(NCS) <span className="font-semibold">개발·개선·활용</span> 전 과정
              </h3>
              <p className="text-text-muted text-sm max-w-lg">
                한국산업인력공단과 4년 연속 협력하며 NCS 개발, SQF 설계, 과정평가형 자격, 기업활용 컨설팅 등 NCS 생태계 전반을 아우릅니다.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              {['NCS 개발·개선', 'SQF 설계', '과정평가형 자격', 'NCS 기업활용'].map((tag) => (
                <span key={tag} className="text-sm px-4 py-2 rounded-full bg-teal/10 text-teal border border-teal/20 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="label-caps text-text-muted mb-3">솔루션</p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-navy">
              시앤피컨설팅의 HRD 솔루션
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HRD_SERVICE.items.map((item) => (
              <SolutionCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                methodology={item.methodology}
                deliverables={item.deliverables}
                color="teal"
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
            <p className="mt-3 text-text-muted">역량 기반 인재개발의 4단계 체계적 접근</p>
          </div>
          <ProcessTimeline steps={HRD_SERVICE.process} />
        </div>
      </section>

      {/* Stats */}
      <ServiceStats stats={HRD_SERVICE.stats} color="teal" />

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="label-caps text-text-muted mb-3">사업실적</p>
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-navy">
                HRD 주요 수행 실적
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
        text={HRD_SERVICE.cta.text}
        href={HRD_SERVICE.cta.href}
        color="teal"
      />
    </main>
  );
}
