import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E07B39 0%, #c4622a 50%, #a3501f 100%)",
      }}
    >
      {/* Geometric dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Diagonal line overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #ffffff 1px, transparent 1px), linear-gradient(-45deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4 leading-tight">
          프로젝트를 함께 시작하세요
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-3 max-w-md mx-auto leading-relaxed">
          무료 상담을 통해 최적의 솔루션을 제안드립니다
        </p>
        <p className="text-white/60 text-sm mb-10">
          150+ 프로젝트 · 80+ 기관과 함께한 경험
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white text-sm font-medium rounded-md hover:bg-navy/90 transition-colors duration-200"
        >
          프로젝트 사전 상담 요청
        </Link>
      </div>
    </section>
  );
}
