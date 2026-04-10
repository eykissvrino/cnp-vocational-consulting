'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Landmark, BookOpen, BrainCircuit, CheckCircle } from 'lucide-react';
import { COMPANY, HOME_STATS } from '@/lib/constants';

const SERVICES = [
  {
    area: "HRM",
    title: "HRM 컨설팅",
    subtitle: "직무중심 인적자원관리",
    description: "직무분석 및 분류체계 수립, 직무체계 설계, 직무평가 기반 직무등급 설계, 직무중심 보수체계 전환, 성과관리체계 및 조직설계까지. 직무 중심 인사혁신의 전 과정을 설계합니다.",
    highlights: ["직무분석 및 분류체계 수립", "직무체계 설계", "직무평가 기반 직무등급 설계", "직무중심 보수체계 전환", "성과관리체계 및 조직설계"],
    icon: <Users className="w-6 h-6" />,
    color: "var(--color-teal)",
    bgLight: "rgba(26,107,114,0.06)",
    href: "/services/hrm",
  },
  {
    area: "공공HR",
    title: "공공기관 HR 컨설팅",
    subtitle: "공공부문 인사혁신 전문",
    description: "공공기관 직무중심 인사제도 개편, 조직·인력 운영진단, 중장기 경영전략 수립, 경영평가 대응까지. 공공부문 HR 혁신을 체계적으로 지원합니다.",
    highlights: ["직무중심 인사제도 개편(채용·평가·직무급 등)", "조직·인력 운영진단", "중장기 경영전략 수립", "경영평가 대응 지원"],
    icon: <Landmark className="w-6 h-6" />,
    color: "#334155",
    bgLight: "rgba(51,65,85,0.06)",
    href: "/services/public-hr",
  },
  {
    area: "HRD",
    title: "HRD 컨설팅",
    subtitle: "체계적 인재개발 솔루션",
    description: "직무분석·역량모델링·Skill 기반 교육체계 수립, 교육로드맵 및 교육과정 개발, 교육운영 및 성과관리 체계 구축까지. 인재개발 전 영역을 설계합니다.",
    highlights: ["기업 맞춤형 교육체계 수립(직무분석·역량모델링·Skill 기반)", "교육로드맵 및 교육과정 개발", "교육운영 및 성과관리 체계 구축", "직무·경력·조직 개발 컨설팅"],
    icon: <BookOpen className="w-6 h-6" />,
    color: "var(--color-primary)",
    bgLight: "rgba(224,123,57,0.06)",
    href: "/services/hrd",
  },
  {
    area: "AX",
    title: "AX 컨설팅",
    subtitle: "AI Transformation",
    description: "AX(AI 전환) 수준 진단부터 전략 수립, AI 역량 및 Skill Set 구축, 워크플로우 재설계, PBL 기반 교육훈련까지. 사람 중심의 AI 전환을 설계합니다.",
    highlights: ["AX(AI 전환) 수준 진단", "AX 전략 및 실행 로드맵 수립", "AI 역량 및 Skill Set 구축", "AI 활용 워크플로우 재설계", "AX 실행역량 강화 교육훈련(PBL)"],
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "var(--color-navy)",
    bgLight: "rgba(15,23,41,0.04)",
    href: "/services/ax",
  },
];

const STRENGTHS = [
  "한국산업인력공단과 4년 연속 NCS·SQF 사업 수행",
  "공공기관·민간기업 150+ 프로젝트 수행 실적",
  "DACUM, BEI, NCS 매핑 등 검증된 방법론 보유",
  "직무분석부터 역량모델링, 교육체계, AX까지 End-to-End 수행",
  "데이터 기반 Skill Gap 분석 및 학습경로 설계 역량",
  "15년 이상 축적된 HR 컨설팅 전문 경력",
];

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0F1729] to-[#1A3A5C] text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full border border-white/5" />
          <div className="absolute -top-16 -right-16 w-[320px] h-[320px] rounded-full border border-white/5" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-dots)" />
          </svg>
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[2px] opacity-10 origin-bottom-left rotate-[-20deg]"
            style={{ background: 'linear-gradient(90deg, transparent, white)' }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex items-center gap-1.5 text-xs text-white/40 mb-10"
            aria-label="breadcrumb"
          >
            <Link href="/" className="inline-flex items-center gap-1 hover:text-white/80 transition-colors">
              <span>홈</span>
            </Link>
            <span className="text-white/25">&gt;</span>
            <span className="text-white/80">본부소개</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          >
            <div className="w-10 h-1 rounded-full bg-primary mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
              직업능력컨설팅본부
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mb-8">
              {COMPANY.slogan}
            </p>
            <p className="text-base text-white/45 max-w-2xl leading-relaxed">
              기업별 맞춤형 HR 전문 본부입니다. 직무분석·역량모델링·NCS·Skill 기반 인재개발·AI Transformation까지,
              공공기관과 민간기업의 HR 혁신을 이론과 현장 실무로 설계합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-10 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {HOME_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-navy font-[Inter]">
                  {stat.value}<span className="text-primary text-xl">{stat.suffix}</span>
                </p>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us — Strengths */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="label-caps text-primary mb-3">왜 시앤피컨설팅인가</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-text">
              차별화된 전문성
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STRENGTHS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-border"
              >
                <CheckCircle className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                <p className="text-sm text-text leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p className="label-caps text-primary mb-3">핵심 서비스</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-text">
              전문 서비스 영역
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.12 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SERVICES.map((svc) => (
              <motion.div
                key={svc.area}
                variants={cardVariant}
                className="group relative bg-white border border-border border-l-4 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ borderLeftColor: svc.color }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: svc.bgLight, color: svc.color }}
                    >
                      {svc.icon}
                    </div>
                    <div>
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                        style={{ background: svc.color }}
                      >
                        {svc.area}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-navy mb-1">{svc.title}</h3>
                  <p className="text-xs text-text-light mb-3">{svc.subtitle}</p>
                  <p className="text-sm text-text-muted leading-relaxed mb-5">{svc.description}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {svc.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-text">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: svc.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={svc.href}
                    className="text-sm font-semibold inline-flex items-center gap-1 group/link transition-colors duration-200"
                    style={{ color: svc.color }}
                  >
                    자세히 보기
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-4">
            함께 일하고 싶으시다면
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            직업능력컨설팅본부의 전문 컨설턴트가 최적의 솔루션을 제안합니다.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-md font-semibold text-sm hover:bg-primary-light transition-colors duration-200"
          >
            상담 신청하기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
