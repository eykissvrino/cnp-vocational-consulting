'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Target, Award, Lightbulb, Users, Building2, BrainCircuit, Cpu } from 'lucide-react';
import { TIMELINE, DIVISIONS, COMPANY } from '@/lib/constants';

const TABS = [
  { key: 'intro', label: '본부 소개' },
  { key: 'company', label: '시앤피컨설팅' },
  { key: 'history', label: '연혁' },
  { key: 'location', label: '오시는 길' },
] as const;

type TabKey = (typeof TABS)[number]['key'];

// Tab 1 — 본부 소개
function IntroTab() {
  const coreValues = [
    { icon: Award, title: '전문성', desc: '15년 이상 공공기관 HR 컨설팅 경험과 검증된 방법론' },
    { icon: Target, title: '신뢰성', desc: '500건 이상 프로젝트를 통해 쌓아온 고객과의 신뢰' },
    { icon: Lightbulb, title: '혁신성', desc: 'AI·디지털 전환 시대에 앞선 컨설팅 솔루션 제공' },
  ];

  const focusAreas = [
    {
      icon: Users,
      color: 'bg-primary/10 text-primary',
      title: 'HRM 컨설팅',
      desc: '직무분석·직무급 전환·성과관리 등 직무 중심 인사혁신',
    },
    {
      icon: Building2,
      color: 'bg-green/10 text-green',
      title: 'HRD 컨설팅',
      desc: '역량모델링·Skill Gap 분석·학습경험 설계 등 인재개발',
    },
    {
      icon: BrainCircuit,
      color: 'bg-navy/10 text-navy',
      title: 'AX 컨설팅',
      desc: 'AI 진단·전략수립·Skill 구축 등 AI Transformation',
    },
    {
      icon: Cpu,
      color: 'bg-primary-bg-alt text-primary-dark',
      title: '공공기관 혁신',
      desc: '경영평가 대응·조직설계·정원산정 등 공공기관 특화 솔루션',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-navy text-white rounded-2xl p-8">
          <p className="text-xs font-semibold text-primary-light uppercase tracking-widest mb-3">Mission</p>
          <p className="text-lg font-semibold leading-relaxed">
            직무 중심의 인사혁신과 역량 기반의 인재개발을 통해 조직과 구성원의 지속가능한 성장을 실현합니다
          </p>
        </div>
        <div className="bg-primary text-white rounded-2xl p-8">
          <p className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-3">Vision</p>
          <p className="text-2xl font-bold leading-snug">
            대한민국 No.1<br />직업능력 컨설팅 전문기관
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div>
        <h3 className="text-xl font-bold text-text mb-6">핵심 가치</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {coreValues.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-bold text-text mb-2">{title}</h4>
              <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Focus Areas */}
      <div>
        <h3 className="text-xl font-bold text-text mb-6">주요 서비스 영역</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {focusAreas.map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="flex items-start gap-4 bg-surface rounded-xl p-5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-text mb-1">{title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Tab 2 — 시앤피컨설팅
function CompanyTab() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div className="max-w-2xl">
        <h3 className="text-xl font-bold text-text mb-4">회사 개요</h3>
        <p className="text-text-muted leading-relaxed">
          시앤피컨설팅(Competency &amp; Performance Consulting)은 2010년 설립된 HR 전문 컨설팅 기업입니다.
          공공기관과 민간기업의 인적자원관리(HRM), 인적자원개발(HRD), AI Transformation(AX) 분야에서
          검증된 방법론과 풍부한 경험을 바탕으로 고객의 성장을 지원합니다.
        </p>
      </div>

      {/* Organization Chart */}
      <div>
        <h3 className="text-xl font-bold text-text mb-6">조직 구성</h3>
        <div className="flex flex-col items-center">
          {/* Group */}
          <div className="bg-navy text-white px-8 py-3 rounded-xl font-bold text-base shadow">
            시앤피컨설팅 그룹
          </div>
          {/* Line */}
          <div className="w-px h-8 bg-border" />
          {/* Connector bar */}
          <div className="w-full max-w-2xl h-px bg-border" />
          {/* Divisions */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-0 w-full max-w-2xl">
            {DIVISIONS.map((div) => (
              <div
                key={div}
                className={`border rounded-lg px-3 py-2.5 text-center text-xs font-semibold transition-colors ${
                  div === '직업능력컨설팅본부'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white border-border text-text-muted hover:border-primary hover:text-primary'
                }`}
              >
                {div}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CEO Greeting placeholder */}
      <div className="bg-surface-warm rounded-2xl p-8 border-l-4 border-primary">
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">CEO 인사말</p>
        <p className="text-text-muted leading-relaxed italic">
          "직업능력컨설팅본부는 대한민국 공공기관과 기업의 인적자원관리·개발 혁신을 이끌어가고 있습니다.
          앞으로도 고객의 성장 파트너로서 최고의 전문성과 신뢰를 바탕으로 함께하겠습니다."
        </p>
        <p className="mt-4 text-sm font-semibold text-text">— {COMPANY.ceo}, 대표이사</p>
      </div>
    </div>
  );
}

// Tab 3 — 연혁
function HistoryTab() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-16 top-0 bottom-0 w-px bg-border hidden sm:block" />

      <div className="space-y-10">
        {TIMELINE.map(({ year, events }) => (
          <div key={year} className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {/* Year */}
            <div className="sm:w-32 flex-shrink-0">
              <span className="text-xl font-bold text-primary">{year}</span>
            </div>
            {/* Events */}
            <div className="flex-1 bg-white border border-border rounded-xl p-5 hover:shadow-sm transition-shadow">
              <ul className="space-y-2">
                {events.map((event, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Tab 4 — 오시는 길
function LocationTab() {
  return (
    <div className="space-y-8">
      {/* Map placeholder */}
      <div className="w-full h-64 md:h-80 bg-surface rounded-2xl border border-border flex items-center justify-center">
        <div className="text-center text-text-muted">
          <MapPin className="w-10 h-10 mx-auto mb-2 text-primary/40" />
          <p className="text-sm font-medium">지도 준비중</p>
        </div>
      </div>

      {/* Contact details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { icon: MapPin, label: '주소', value: COMPANY.address },
          { icon: Phone, label: '전화', value: COMPANY.tel },
          { icon: Mail, label: '이메일', value: COMPANY.email },
          { icon: Clock, label: '운영시간', value: '평일 09:00 – 18:00 (주말·공휴일 휴무)' },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-4 bg-surface rounded-xl p-5">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-text-muted mb-0.5">{label}</p>
              <p className="text-sm font-medium text-text">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('intro');

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy/90 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <span className="text-white/80">본부 소개</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">본부 소개</h1>
          <p className="text-lg md:text-xl text-primary-light font-medium">
            직업능력컨설팅본부를 소개합니다
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-border sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors duration-150 cursor-pointer ${
                  activeTab === tab.key
                    ? 'border-primary text-primary'
                    : 'border-transparent text-text-muted hover:text-text hover:border-border'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'intro' && <IntroTab />}
          {activeTab === 'company' && <CompanyTab />}
          {activeTab === 'history' && <HistoryTab />}
          {activeTab === 'location' && <LocationTab />}
        </div>
      </section>
    </main>
  );
}
