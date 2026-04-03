'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { AX_DIAGNOSTIC_QUESTIONS, AX_MATURITY_LEVELS } from '@/lib/constants';

type Phase = 'start' | 'question' | 'result';

function getMaturityLevel(avg: number) {
  if (avg < 1.5) return AX_MATURITY_LEVELS[0];
  if (avg < 2.5) return AX_MATURITY_LEVELS[1];
  if (avg < 3.5) return AX_MATURITY_LEVELS[2];
  if (avg < 4.5) return AX_MATURITY_LEVELS[3];
  return AX_MATURITY_LEVELS[4];
}

export default function AXDiagnostic() {
  const [phase, setPhase] = useState<Phase>('start');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedScore, setSelectedScore] = useState<number | null>(null);

  const totalQuestions = AX_DIAGNOSTIC_QUESTIONS.length;
  const currentQuestion = AX_DIAGNOSTIC_QUESTIONS[currentIdx];

  function handleStart() {
    setPhase('question');
    setCurrentIdx(0);
    setAnswers([]);
    setSelectedScore(null);
  }

  function handleNext() {
    if (selectedScore === null) return;
    const next = [...answers, selectedScore];
    setAnswers(next);
    setSelectedScore(null);
    if (currentIdx + 1 >= totalQuestions) {
      setPhase('result');
    } else {
      setCurrentIdx(currentIdx + 1);
    }
  }

  function handleReset() {
    setPhase('start');
    setCurrentIdx(0);
    setAnswers([]);
    setSelectedScore(null);
  }

  const avg = answers.length > 0 ? answers.reduce((a, b) => a + b, 0) / answers.length : 0;
  const maturityLevel = getMaturityLevel(avg);

  return (
    <div className="max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {/* ── Start ── */}
        {phase === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl border border-border p-10 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="4" y="20" width="4" height="8" rx="1" fill="#0F1729" opacity="0.3" />
                <rect x="10" y="14" width="4" height="14" rx="1" fill="#0F1729" opacity="0.5" />
                <rect x="16" y="10" width="4" height="18" rx="1" fill="#0F1729" opacity="0.7" />
                <rect x="22" y="4" width="4" height="24" rx="1" fill="#0F1729" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-navy mb-3">
              우리 조직의 AI 성숙도는?
            </h3>
            <p className="text-text-muted mb-8">
              6개 질문으로 진단해보세요
            </p>
            <div className="flex justify-center gap-8 mb-8 text-sm text-text-muted">
              {AX_DIAGNOSTIC_QUESTIONS.map((q) => (
                <span key={q.id} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy/30 inline-block" />
                  {q.dimension}
                </span>
              ))}
            </div>
            <button
              onClick={handleStart}
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-xl font-medium hover:bg-navy/90 transition-colors"
            >
              진단 시작
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>
        )}

        {/* ── Question ── */}
        {phase === 'question' && (
          <motion.div
            key={`question-${currentIdx}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-2xl border border-border overflow-hidden"
          >
            {/* Progress bar */}
            <div className="px-8 pt-8 pb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="label-caps text-text-muted">
                  질문 {currentIdx + 1} / {totalQuestions}
                </span>
                <span className="label-caps text-navy">{currentQuestion.dimension}</span>
              </div>
              <div className="h-1.5 bg-navy/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-navy rounded-full"
                  initial={{ width: `${(currentIdx / totalQuestions) * 100}%` }}
                  animate={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              {/* Step dots */}
              <div className="flex gap-1.5 mt-3">
                {AX_DIAGNOSTIC_QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-1 rounded-full transition-colors ${
                      i < currentIdx
                        ? 'bg-navy'
                        : i === currentIdx
                        ? 'bg-navy/50'
                        : 'bg-navy/10'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question text */}
            <div className="px-8 pb-6">
              <h3 className="text-xl font-medium text-navy leading-snug">
                {currentQuestion.question}
              </h3>
            </div>

            {/* Options */}
            <div className="px-8 pb-6 space-y-3">
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedScore === opt.score;
                return (
                  <button
                    key={opt.score}
                    onClick={() => setSelectedScore(opt.score)}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150 group ${
                      isSelected
                        ? 'border-navy bg-navy/5 text-navy'
                        : 'border-border bg-white text-text hover:border-navy/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                          isSelected ? 'border-navy bg-navy' : 'border-border group-hover:border-navy/40'
                        }`}
                      >
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </span>
                      <span className="text-sm leading-snug">{opt.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Next button */}
            <div className="px-8 pb-8">
              <button
                onClick={handleNext}
                disabled={selectedScore === null}
                className="w-full py-3.5 rounded-xl font-medium transition-all duration-150 bg-navy text-white hover:bg-navy/90 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {currentIdx + 1 >= totalQuestions ? '결과 보기' : '다음'}
              </button>
            </div>
          </motion.div>
        )}

        {/* ── Result ── */}
        {phase === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-border overflow-hidden"
          >
            {/* Result header */}
            <div className="bg-navy px-8 py-8 text-center">
              <p className="label-caps text-white/50 mb-2">진단 결과</p>
              <p className="text-5xl font-light text-white mb-2">
                Level {maturityLevel.level}
              </p>
              <p className="text-xl text-white/80 font-medium">
                {maturityLevel.name}
              </p>
              <p className="text-white/50 text-sm mt-2">
                평균 점수: {avg.toFixed(1)} / 5.0
              </p>
            </div>

            <div className="px-8 py-8 space-y-8">
              {/* 5-step level bar */}
              <div>
                <p className="label-caps text-text-muted mb-4">성숙도 단계</p>
                <div className="flex gap-2">
                  {AX_MATURITY_LEVELS.map((lvl) => {
                    const isActive = lvl.level === maturityLevel.level;
                    const isPast = lvl.level < maturityLevel.level;
                    return (
                      <div key={lvl.level} className="flex-1 text-center">
                        <div
                          className={`h-10 rounded-lg flex items-center justify-center mb-2 transition-colors ${
                            isActive
                              ? 'bg-navy text-white'
                              : isPast
                              ? 'bg-navy/20 text-navy/70'
                              : 'bg-navy/5 text-navy/30'
                          }`}
                        >
                          <span className="text-sm font-semibold font-[Inter]">
                            {lvl.level}
                          </span>
                        </div>
                        <p className={`text-xs ${isActive ? 'text-navy font-medium' : 'text-text-muted'}`}>
                          {lvl.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Description */}
              <div className="bg-surface rounded-xl p-5">
                <p className="text-sm font-medium text-navy mb-2">현재 단계 설명</p>
                <p className="text-text-muted text-sm leading-relaxed">
                  {maturityLevel.description}
                </p>
              </div>

              {/* Dimension scores */}
              <div>
                <p className="label-caps text-text-muted mb-4">차원별 점수</p>
                <div className="space-y-3">
                  {AX_DIAGNOSTIC_QUESTIONS.map((q, i) => {
                    const score = answers[i] ?? 0;
                    const pct = (score / 5) * 100;
                    return (
                      <div key={q.id}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm text-text">{q.dimension}</span>
                          <span className="text-sm font-medium text-navy font-[Inter]">
                            {score} / 5
                          </span>
                        </div>
                        <div className="h-2 bg-navy/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-navy rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-navy/5 rounded-xl p-6 text-center">
                <p className="text-sm text-text-muted mb-4">
                  전문가 상담으로 더 자세한 진단을 받아보세요
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-navy/90 transition-colors"
                >
                  AX 전문가 상담 신청
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Reset */}
              <div className="text-center">
                <button
                  onClick={handleReset}
                  className="text-sm text-text-muted hover:text-navy transition-colors underline underline-offset-4"
                >
                  다시 진단하기
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
