import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { COMPANY, NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                직능본부
              </span>
              <span className="text-white/40">|</span>
              <span className="text-white font-semibold">{COMPANY.name}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {COMPANY.tagline}
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              {COMPANY.slogan}
            </p>
            <a
              href={COMPANY.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary-light text-sm hover:text-primary transition-colors mt-2"
            >
              cnp.re.kr
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
              바로가기
            </h3>
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-white/60 text-sm hover:text-white transition-colors py-1"
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block text-white/40 text-xs hover:text-white/70 transition-colors py-0.5 pl-3"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
              연락처
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Phone size={15} className="mt-0.5 shrink-0 text-primary-light" />
                <span>{COMPANY.tel}</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Mail size={15} className="mt-0.5 shrink-0 text-primary-light" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary-light" />
                <span className="leading-relaxed">{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} {COMPANY.name}(주). 대표: {COMPANY.ceo} |
            사업자번호: {COMPANY.bizNumber}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              개인정보처리방침
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/terms"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
