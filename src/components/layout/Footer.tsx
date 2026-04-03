import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* 1열: 회사 정보 */}
          <div className="space-y-5">
            <div className="flex flex-col">
              <span className="text-white font-semibold text-lg tracking-tight">
                {COMPANY.name}
              </span>
              <span className="text-white/40 text-xs tracking-widest uppercase font-light mt-1">
                {COMPANY.division}
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-light">
              {COMPANY.tagline}
            </p>
            <p className="text-white/40 text-xs leading-relaxed">
              {COMPANY.slogan}
            </p>
            <a
              href={COMPANY.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              {COMPANY.website.replace("https://", "")}
            </a>
          </div>

          {/* 2열: 바로가기 */}
          <div className="space-y-5">
            <h3 className="text-white/40 text-xs uppercase tracking-widest font-normal">
              바로가기
            </h3>
            <nav className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-white/70 text-sm hover:text-white transition-colors py-1.5"
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block text-white/35 text-xs hover:text-white/60 transition-colors py-1 pl-3"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>

          {/* 3열: 연락처 */}
          <div className="space-y-5">
            <h3 className="text-white/40 text-xs uppercase tracking-widest font-normal">
              연락처
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-0.5 shrink-0 text-white/30" />
                <span className="text-white/60 text-sm">{COMPANY.tel}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-0.5 shrink-0 text-white/30" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-white/30" />
                <span className="text-white/60 text-sm leading-relaxed">
                  {COMPANY.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} {COMPANY.name}(주). 대표이사: {COMPANY.ceo} · 사업자등록번호: {COMPANY.bizNumber}
          </p>
          <div className="flex items-center gap-5">
            <span className="text-white/30 text-xs">
              개인정보처리방침
            </span>
            <span className="text-white/15 text-xs">|</span>
            <span className="text-white/30 text-xs">
              이용약관
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
