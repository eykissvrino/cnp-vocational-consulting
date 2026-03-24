import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { SERVICES_OVERVIEW } from "@/lib/constants";

const BADGE_VARIANTS: Record<string, "primary" | "green" | "navy"> = {
  hrm: "primary",
  hrd: "green",
  ax: "navy",
};

const TOP_BORDER_COLORS: Record<string, string> = {
  hrm: "#E88124",
  hrd: "#1B5E3B",
  ax: "#1A1A2E",
};

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="전문 컨설팅 서비스"
          description="직무 중심 인사관리부터 Skill 기반 인재개발, AI Transformation까지. 공공기관 HR 혁신의 전 영역을 커버합니다."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_OVERVIEW.map((service) => (
            <Card
              key={service.id}
              topBorderColor={TOP_BORDER_COLORS[service.id]}
              className="flex flex-col"
            >
              <div className="p-8 flex flex-col flex-1">
                {/* Number + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-border font-mono">
                    {service.number}
                  </span>
                  <Badge variant={BADGE_VARIANTS[service.id]}>{service.title}</Badge>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-navy mb-1">{service.title}</h3>
                <p className="text-primary text-sm font-medium mb-4">{service.subtitle}</p>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-8 flex-1">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-navy">
                      <CheckCircle2 size={15} className="text-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all group"
                >
                  자세히 보기
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
