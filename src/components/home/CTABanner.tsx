import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          전문 컨설턴트에게 직접 상담받으세요
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          15년 이상의 공공기관 HR 컨설팅 경험을 바탕으로 최적의 솔루션을 제안해 드립니다.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-200 group"
        >
          상담 신청하기
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
