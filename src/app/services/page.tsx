import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES_OVERVIEW } from '@/lib/constants';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceCTA from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: '서비스',
  description:
    '시앤피컨설팅 직업능력컨설팅본부의 HRM, HRD, AX 컨설팅 서비스를 소개합니다.',
};

const APPROACH_STEPS = [
  { number: '01', title: '현황분석', description: '조직 현황 진단 및 핵심 이슈 도출' },
  { number: '02', title: '전략설계', description: '맞춤형 컨설팅 방법론 설계' },
  { number: '03', title: '실행지원', description: '현장 밀착 컨설팅 및 변화관리' },
  { number: '04', title: '성과평가', description: '효과성 측정 및 지속적 개선' },
];

export default function ServicesPage() {
  return (
    <main>
      <ServiceHero
        tag="Services"
        tagColor="primary"
        team="직업능력컨설팅본부"
        title="서비스"
        subtitle="직업능력컨설팅본부의 전문 서비스"
        description="HRM, HRD, AX — 세 개의 전문 서비스 영역으로 조직의 인사혁신을 종합 지원합니다."
      />

      {/* Service Cards */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {SERVICES_OVERVIEW.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Number sidebar */}
                  <div className="md:w-24 bg-primary/5 flex items-center justify-center py-8 md:py-0">
                    <span className="text-4xl font-black text-primary/30 select-none">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            {service.team}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-navy mb-1">{service.title}</h2>
                        <p className="text-primary font-medium mb-3">{service.subtitle}</p>
                        <p className="text-text-muted leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Highlights */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.highlights.map((h) => (
                            <li key={h} className="flex items-center gap-2 text-sm text-navy">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="flex-shrink-0">
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors whitespace-nowrap"
                        >
                          자세히 보기
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">Our Approach</h2>
            <p className="text-text-muted">검증된 4단계 방법론으로 성과를 만들어냅니다</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {APPROACH_STEPS.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Arrow connector */}
                {index < APPROACH_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-6 z-10">
                    <svg className="w-6 h-6 text-border -translate-x-3 -translate-y-1/2 absolute top-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-black mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        text="어떤 서비스가 필요하신가요?"
        buttonText="무료 상담 신청하기"
        href="/contact"
      />
    </main>
  );
}
