"use client";

import { motion } from "framer-motion";
import { Shield, Database, Repeat, TrendingUp } from "lucide-react";

const WHY_US_ITEMS = [
  {
    icon: Shield,
    title: "공공·민간 HR 전문",
    body: "한국산업인력공단, 강원랜드, SK에너지 등 공공기관과 민간기업에서 검증된 NCS·직무분석 전문성",
    topColor: "var(--color-teal)",
    iconBg: "rgba(26,107,114,0.10)",
    iconColor: "var(--color-teal)",
  },
  {
    icon: Database,
    title: "데이터 기반 방법론",
    body: "DACUM, BEI, NCS 매핑 등 체계적 방법론과 150+ 프로젝트 경험에서 나온 실증 데이터",
    topColor: "var(--color-navy)",
    iconBg: "rgba(15,23,41,0.08)",
    iconColor: "var(--color-navy)",
  },
  {
    icon: Repeat,
    title: "End-to-End 솔루션",
    body: "직무분석부터 역량모델링, 교육체계, 보수체계까지 HR 전 영역을 하나의 팀이 일관되게 수행",
    topColor: "var(--color-primary)",
    iconBg: "rgba(224,123,57,0.10)",
    iconColor: "var(--color-primary)",
  },
  {
    icon: TrendingUp,
    title: "최신 HR 트렌드 선도",
    body: "Skill 기반 인재개발, AI Transformation(AX) 등 미래 HR 의제를 선도적으로 컨설팅에 접목",
    topColor: "var(--color-slate)",
    iconBg: "rgba(71,85,105,0.10)",
    iconColor: "var(--color-slate)",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function WhyUsSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="label-caps text-text-muted mb-3">차별점</p>
          <h2 className="text-4xl font-light tracking-tight text-navy mb-4">
            왜 시앤피컨설팅인가
          </h2>
          <p className="text-text-muted text-lg max-w-2xl">
            15년 이상 축적된 전문성과 방법론으로 차별화된 컨설팅을 제공합니다
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {WHY_US_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariant}
                className="group relative bg-white border border-border rounded-xl p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ borderTopWidth: "3px", borderTopColor: item.topColor }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: item.iconBg }}
                >
                  <Icon size={22} style={{ color: item.iconColor }} strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
