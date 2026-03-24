import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const SERVICE_MINI = [
  { number: "01", label: "HRM", desc: "직무중심 인사관리" },
  { number: "02", label: "HRD", desc: "Skill 기반 인재개발" },
  { number: "03", label: "AX", desc: "AI Transformation" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-primary-bg via-white to-primary-bg-alt pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-6">
            시앤피컨설팅 그룹 · 직업능력컨설팅본부
          </p>

          {/* Main title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            직무 중심 인사혁신,
            <br />
            역량 기반 인재개발,
            <br />
            <span className="text-primary">AI Transformation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-text-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            공공기관 직무급 전환, Skill 기반 HRD 체계 구축, AX 컨설팅까지.
            <br className="hidden md:block" />
            시앤피컨설팅이 함께합니다.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button variant="primary" size="lg" href="/contact">
              무료 상담 신청하기
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" href="/services">
              서비스 둘러보기
            </Button>
          </div>
        </div>

        {/* Service mini cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
          {SERVICE_MINI.map((s) => (
            <Link
              key={s.number}
              href={`/services/${s.label.toLowerCase()}`}
              className="group flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-border rounded-xl px-5 py-4 hover:border-primary/40 hover:shadow-md transition-all duration-200"
            >
              <span className="text-xs font-bold text-primary/40 font-mono">{s.number}</span>
              <div>
                <p className="text-sm font-bold text-navy group-hover:text-primary transition-colors">
                  {s.label}
                </p>
                <p className="text-xs text-text-muted">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
