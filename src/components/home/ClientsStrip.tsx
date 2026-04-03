"use client";

import Link from "next/link";
import { CLIENTS_FEATURED } from "@/lib/constants";

export default function ClientsStrip() {
  // Triple clients for seamless infinite scroll
  const tripled = [
    ...CLIENTS_FEATURED,
    ...CLIENTS_FEATURED,
    ...CLIENTS_FEATURED,
  ];

  return (
    <section className="py-24 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="label-caps text-teal-light mb-3">신뢰의 파트너</p>
          <h3 className="text-2xl font-light text-white">함께한 기관들</h3>
        </div>

        {/* Description */}
        <p className="text-white/40 text-sm mb-8">
          공공기관부터 민간기업까지, 다양한 분야의 기관과 함께합니다
        </p>
      </div>

      {/* Infinite scrolling marquee for all clients */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--color-navy) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--color-navy) 0%, transparent 100%)",
          }}
        />

        <div className="flex overflow-hidden">
          <div
            className="flex gap-3 shrink-0"
            style={{
              animation: "marquee 60s linear infinite",
              willChange: "transform",
            }}
          >
            {tripled.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="shrink-0 bg-white/10 hover:bg-white/20 transition-colors duration-200 px-6 py-3.5 rounded-xl flex items-center justify-center"
                style={{ minWidth: "fit-content" }}
              >
                <span className="text-base font-semibold text-white/85 whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:text-primary-light transition-colors duration-200"
        >
          전체 사업실적 보기 →
        </Link>
      </div>

      {/* Marquee keyframe */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
