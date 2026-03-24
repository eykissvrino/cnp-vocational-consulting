import type { Metadata } from 'next';
import { HRM_SERVICE, HRM_PAIN_POINTS } from '@/lib/constants';
import ServiceHero from '@/components/services/ServiceHero';
import SolutionCard from '@/components/services/SolutionCard';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import ServiceStats from '@/components/services/ServiceStats';
import ServiceCTA from '@/components/services/ServiceCTA';
import {
  AlertTriangle,
  FileWarning,
  Clock,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'HRM 컨설팅 — 직무중심 인사관리',
  description:
    '공공기관 직무분석, 직무평가, 직무급 전환, 성과관리체계 구축. 기재부 직무급 가이드라인 기반 체계적 전환 지원.',
};

const painIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertTriangle,
  FileWarning,
  Clock,
};

export default function HRMPage() {
  return (
    <main>
      {/* Hero */}
      <ServiceHero
        tag={HRM_SERVICE.tag}
        tagColor={HRM_SERVICE.tagColor}
        team={HRM_SERVICE.team}
        title={HRM_SERVICE.title}
        subtitle={HRM_SERVICE.subtitle}
        description={HRM_SERVICE.description}
        breadcrumbService="HRM 컨설팅"
      />

      {/* Pain Points */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              이런 고민이 있으신가요?
            </h2>
            <p className="text-text-muted">많은 공공기관이 직면한 인사관리의 공통 과제입니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HRM_PAIN_POINTS.map((point) => {
              const IconComponent = painIconMap[point.icon];
              return (
                <div
                  key={point.title}
                  className="bg-white rounded-xl p-6 border border-border shadow-sm text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-primary" />
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
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              시앤피컨설팅의 솔루션
            </h2>
            <p className="text-text-muted">
              직무 중심 인사혁신을 위한 4가지 핵심 서비스
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HRM_SERVICE.items.map((item) => (
              <SolutionCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-primary-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">컨설팅 프로세스</h2>
            <p className="text-text-muted">검증된 4단계 방법론으로 성공적인 전환을 지원합니다</p>
          </div>
          <ProcessTimeline steps={HRM_SERVICE.process} />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">실적으로 증명합니다</h2>
            <p className="text-text-muted">15년 이상 쌓아온 공공기관 HRM 컨설팅 경험</p>
          </div>
          <ServiceStats stats={HRM_SERVICE.stats} />
        </div>
      </section>

      {/* Reference callout */}
      <section className="py-10 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 bg-primary/5 border border-primary/20 rounded-xl p-6">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-navy leading-relaxed">
              <span className="font-semibold">기재부 직무급 가이드라인 기반 지원</span>
              <br />
              기획재정부 직무급 가이드라인에 따른 체계적 전환 지원으로, 공공기관의 단계적 직무급
              도입을 처음부터 끝까지 함께합니다.
            </p>
          </div>
        </div>
      </section>

      <ServiceCTA
        text="직무분석 컨설팅, 지금 시작하세요"
        buttonText="직무분석 컨설팅 상담 신청"
        href={HRM_SERVICE.cta.href}
      />
    </main>
  );
}
