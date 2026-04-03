"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-16">
      {/* Background: navy → teal gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0F1729 0%, #0F1729 45%, #0d2d32 70%, #1A6B72 100%)",
        }}
      />

      {/* Abstract geometric pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 80% 50% at 80% 20%, rgba(26,107,114,0.18) 0%, transparent 60%)",
            "radial-gradient(ellipse 40% 40% at 90% 70%, rgba(26,107,114,0.10) 0%, transparent 55%)",
            "linear-gradient(45deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            "linear-gradient(-45deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            "radial-gradient(circle at 15% 85%, rgba(26,107,114,0.08) 0%, transparent 40%)",
          ].join(", "),
          backgroundSize: "auto, auto, 60px 60px, 60px 60px, auto",
        }}
      />

      {/* Large decorative geometric shapes */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background:
            "conic-gradient(from 135deg at 70% 30%, rgba(26,107,114,0.12) 0deg, transparent 120deg, rgba(26,107,114,0.06) 240deg, transparent 360deg)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(26,107,114,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Credential badges — top right */}
      <div className="absolute top-24 right-6 sm:right-8 lg:right-12 flex flex-col gap-2 items-end z-10">
        {[
          { text: "NCS·SQF 개발 전문", color: "rgba(26,107,114,0.35)" },
          { text: "직무분석·역량모델링", color: "rgba(15,23,41,0.5)" },
          { text: "공공·민간 HR 전문", color: "rgba(26,107,114,0.25)" },
        ].map((badge) => (
          <motion.span
            key={badge.text}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-white/80 text-xs px-3 py-1.5 rounded-full font-medium"
            style={{
              background: badge.color,
              border: "1px solid rgba(26,107,114,0.4)",
              backdropFilter: "blur(8px)",
            }}
          >
            {badge.text}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Label */}
          <motion.p
            variants={item}
            className="label-caps text-teal-light mb-8 tracking-[0.2em]"
          >
            시앤피컨설팅 직업능력컨설팅본부
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={item}
            className="text-5xl lg:text-7xl font-light tracking-tight text-white leading-[1.1] mb-8"
          >
            직무 중심의
            <br />
            <span
              className="font-semibold"
              style={{
                background: "linear-gradient(90deg, #ffffff 0%, #7dd3d8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              인사혁신,
            </span>
            <br />
            <span className="font-light">사람 중심의 AI 전환</span>
          </motion.h1>

          {/* Sub text */}
          <motion.p
            variants={item}
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl"
          >
            공공·민간 HRM · HRD · AX 컨설팅 전문기관
            <br />
            15년 이상의 실적이 증명합니다
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary-light transition-colors duration-200 shadow-lg"
              style={{ boxShadow: "0 4px 24px rgba(224,123,57,0.35)" }}
            >
              컨설팅 문의
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200"
            >
              사업실적 보기 →
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
