import type { Metadata } from "next";
import { BrainCircuit, TrendingUp, Database } from "lucide-react";
import { HRD_SERVICE, HRD_TRENDS } from "@/lib/constants";
import ServiceHero from "@/components/services/ServiceHero";
import SolutionCard from "@/components/services/SolutionCard";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import ServiceStats from "@/components/services/ServiceStats";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "HRD 컨설팅 — Skill 기반 인재개발",
};

const TREND_ICONS = [BrainCircuit, TrendingUp, Database];

export default function HrdPage() {
  return (
    <main>
      {/* Hero */}
      <ServiceHero service={HRD_SERVICE} tag="HRD" team="HR솔루션팀" />

      {/* Paradigm Shift */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green/10 text-green text-sm font-medium rounded-full mb-4">
              패러다임 전환
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              역량(Competency)에서 스킬(Skill)로
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              AI 시대의 인재개발은 추상적 역량 개념을 넘어, 측정 가능한 스킬 단위로 진화하고 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Before */}
            <div className="relative rounded-2xl border-2 border-border bg-surface p-8">
              <div className="absolute -top-3 left-6">
                <span className="bg-text-muted text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEFORE
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-muted mb-6 mt-2">역량 중심</h3>
              <ul className="space-y-3">
                {[
                  "광범위하고 추상적인 역량 정의",
                  "평가자 주관에 의존하는 측정",
                  "직급·직군 단위 일괄 교육",
                  "교육 효과 측정의 어려움",
                  "변화 속도 대응 한계",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-muted shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="relative rounded-2xl border-2 border-green bg-green/5 p-8 shadow-lg">
              <div className="absolute -top-3 left-6">
                <span className="bg-green text-white text-xs font-bold px-3 py-1 rounded-full">
                  AFTER
                </span>
              </div>
              <h3 className="text-xl font-bold text-green mb-6 mt-2">스킬 중심</h3>
              <ul className="space-y-3">
                {[
                  "구체적이고 측정 가능한 스킬 단위",
                  "객관적 데이터 기반 진단",
                  "개인별 맞춤형 학습 경로",
                  "Skill Gap 기반 교육 효과 추적",
                  "AI 시대 변화에 민첩한 대응",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy">
                    <svg className="mt-0.5 w-4 h-4 text-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green/10 text-green text-sm font-medium rounded-full mb-4">
              서비스
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              시앤피컨설팅의 HRD 솔루션
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HRD_SERVICE.items.map((item) => (
              <SolutionCard
                key={item.title}
                item={item}
                color="green"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green/10 text-green text-sm font-medium rounded-full mb-4">
              프로세스
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">컨설팅 진행 과정</h2>
          </div>
          <ProcessTimeline steps={HRD_SERVICE.process} color="green" />
        </div>
      </section>

      {/* HRD Trends */}
      <section className="py-20 bg-surface-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green/10 text-green text-sm font-medium rounded-full mb-4">
              트렌드
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">2025 HRD 트렌드</h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              빠르게 변화하는 인재개발 환경에서 시앤피컨설팅이 앞서 나갑니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {HRD_TRENDS.map((trend, idx) => {
              const Icon = TREND_ICONS[idx];
              return (
                <div
                  key={trend.title}
                  className="bg-surface rounded-2xl p-8 flex flex-col items-start gap-4 border border-border hover:border-green hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-2">{trend.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{trend.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <ServiceStats stats={HRD_SERVICE.stats} color="green" />

      {/* CTA */}
      <ServiceCTA text="HRD 솔루션 문의" href="/contact" color="green" />
    </main>
  );
}
