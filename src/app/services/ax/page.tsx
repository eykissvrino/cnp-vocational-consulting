import { Database, Server, Users, Heart } from "lucide-react";
import type { Metadata } from "next";
import { AX_SERVICE, AX_MATURITY_LEVELS } from "@/lib/constants";
import ServiceHero from "@/components/services/ServiceHero";
import SolutionCard from "@/components/services/SolutionCard";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import ServiceStats from "@/components/services/ServiceStats";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "AX 컨설팅 — AI Transformation",
};

const PILLAR_ITEMS = [
  {
    icon: Database,
    title: "데이터",
    description: "AI 학습과 의사결정의 원료. 데이터 품질과 거버넌스 체계 구축",
  },
  {
    icon: Server,
    title: "인프라",
    description: "AI 솔루션을 구동하는 기술 기반. 클라우드·온프레미스 환경 설계",
  },
  {
    icon: Users,
    title: "사람",
    description: "AI를 활용하는 주체. 리터러시 교육부터 전문 인력 양성까지",
  },
  {
    icon: Heart,
    title: "문화",
    description: "AI 전환을 가능하게 하는 조직 분위기. 실험·학습·혁신의 문화 조성",
  },
];

// Typical position indicator: level 2 (index 1)
const TYPICAL_LEVEL = 2;

export default function AxPage() {
  return (
    <main>
      {/* Hero */}
      <ServiceHero service={AX_SERVICE} tag="AX" team="AX컨설팅팀" />

      {/* DX → AX */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-navy/10 text-navy text-sm font-medium rounded-full mb-8">
              패러다임 전환
            </span>
            {/* DX → AX Arrow Visual */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="flex-1 max-w-xs rounded-2xl bg-surface border-2 border-border px-6 py-5 text-center">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-1">이전</p>
                <p className="text-3xl font-black text-text-muted">DX</p>
                <p className="text-sm text-text-muted mt-1">Digital Transformation</p>
              </div>
              <div className="flex flex-col items-center gap-1 shrink-0">
                <svg width="56" height="24" viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12H50" stroke="#E88124" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M42 4L54 12L42 20" stroke="#E88124" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs text-primary font-semibold">진화</span>
              </div>
              <div className="flex-1 max-w-xs rounded-2xl bg-navy px-6 py-5 text-center shadow-lg">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">현재</p>
                <p className="text-3xl font-black text-white">AX</p>
                <p className="text-sm text-white/70 mt-1">AI Transformation</p>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              디지털 전환을 넘어, AI 전환으로
            </h2>
            <p className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
              단순한 디지털화(DX)를 넘어, AI가 조직의 일하는 방식과 의사결정 구조를 바꾸는
              AI Transformation(AX)의 시대가 왔습니다. 시앤피컨설팅은 HRM/HRD 전문성을 바탕으로
              <strong className="text-navy"> 사람 중심의 AX</strong>를 설계합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-navy/10 text-navy text-sm font-medium rounded-full mb-4">
              핵심 요소
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">AX 4대 요소</h2>
            <p className="mt-4 text-text-muted max-w-xl mx-auto">
              성공적인 AI 전환은 네 가지 요소의 균형 잡힌 발전을 통해 이루어집니다.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLAR_ITEMS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-border hover:border-navy hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-4 group-hover:bg-navy transition-colors">
                  <Icon className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-navy/10 text-navy text-sm font-medium rounded-full mb-4">
              서비스
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">AX 컨설팅 서비스</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AX_SERVICE.items.map((item) => (
              <SolutionCard
                key={item.title}
                item={item}
                color="navy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Maturity Model */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
              성숙도 모델
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">AX 성숙도 모델</h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              귀 기관의 AI 전환 수준을 진단하고 다음 단계로의 도약을 지원합니다.
            </p>
          </div>

          {/* Desktop: Horizontal steps */}
          <div className="hidden md:flex items-end gap-0 justify-center">
            {AX_MATURITY_LEVELS.map((level, idx) => {
              const isTypical = level.level === TYPICAL_LEVEL;
              const heightClass = ["h-24", "h-32", "h-40", "h-48", "h-56"][idx];
              const opacityClass = ["opacity-40", "opacity-55", "opacity-70", "opacity-85", "opacity-100"][idx];
              return (
                <div key={level.level} className="flex flex-col items-center flex-1 max-w-[180px]">
                  {/* Typical indicator */}
                  <div className="h-8 flex items-center justify-center mb-2">
                    {isTypical && (
                      <div className="flex flex-col items-center">
                        <span className="text-primary text-xs font-bold whitespace-nowrap">평균 위치</span>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M6 8L0 0H12L6 8Z" fill="#E88124" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Bar */}
                  <div
                    className={`w-full ${heightClass} ${opacityClass} bg-primary rounded-t-lg flex items-end justify-center pb-3 relative`}
                    style={{ minWidth: 0 }}
                  >
                    <span className="text-white font-black text-2xl">{level.level}</span>
                    {isTypical && (
                      <div className="absolute inset-0 rounded-t-lg ring-2 ring-primary ring-offset-2 ring-offset-navy" />
                    )}
                  </div>

                  {/* Label */}
                  <div className="bg-white/10 w-full px-2 py-3 text-center">
                    <p className="text-white font-bold text-sm">{level.name}</p>
                  </div>

                  {/* Description */}
                  <div className="px-2 pt-3 pb-2 text-center">
                    <p className="text-white/60 text-xs leading-relaxed">{level.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: Vertical steps */}
          <div className="md:hidden space-y-3">
            {AX_MATURITY_LEVELS.map((level) => {
              const isTypical = level.level === TYPICAL_LEVEL;
              const widthPct = `${level.level * 18 + 10}%`;
              return (
                <div key={level.level} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-black text-sm">{level.level}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-bold text-sm">{level.name}</span>
                      {isTypical && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                          평균 위치
                        </span>
                      )}
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: widthPct }}
                      />
                    </div>
                    <p className="text-white/50 text-xs mt-1">{level.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-navy/10 text-navy text-sm font-medium rounded-full mb-4">
              프로세스
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">컨설팅 진행 과정</h2>
          </div>
          <ProcessTimeline steps={AX_SERVICE.process} color="navy" />
        </div>
      </section>

      {/* Stats */}
      <ServiceStats stats={AX_SERVICE.stats} color="navy" />

      {/* CTA */}
      <ServiceCTA text="AX 진단 의뢰" href="/contact" color="navy" />
    </main>
  );
}
