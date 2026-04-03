import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';
import ContactServiceCards from '@/components/contact/ContactInfo';
import FAQAccordion from '@/components/contact/FAQAccordion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: '문의하기',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <span className="text-white/80">문의</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
            문의하기
          </h1>
          <p className="text-lg text-white/60">
            컨설팅 상담을 신청해 주세요. 담당자가 빠르게 연락드립니다.
          </p>
        </div>
      </section>

      {/* 2-column: Form + Service Cards */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Form — 60% (3/5) */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl font-semibold text-text mb-1">상담 신청</h2>
              <p className="text-sm text-text-muted mb-6">
                아래 양식을 작성하시면 담당자가 1~2 영업일 내에 연락드립니다.
              </p>
              <ContactForm />
              {/* Contact strip below form */}
              <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-x-6 gap-y-2">
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <Phone className="w-3.5 h-3.5" />
                  {COMPANY.tel}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <Mail className="w-3.5 h-3.5" />
                  {COMPANY.email}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <MapPin className="w-3.5 h-3.5" />
                  {COMPANY.address}
                </span>
              </div>
            </div>

            {/* Service Summary Cards — 40% (2/5) */}
            <div className="lg:col-span-2">
              <ContactServiceCards />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="label-caps text-primary mb-3">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-text mb-2">
              자주 묻는 질문
            </h2>
            <p className="text-text-muted text-sm">
              컨설팅에 관한 자주 묻는 질문들을 모았습니다.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>
    </main>
  );
}
