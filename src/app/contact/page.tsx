import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import FAQAccordion from '@/components/contact/FAQAccordion';

export const metadata: Metadata = {
  title: '문의하기',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy/90 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <span className="text-white/80">문의</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">문의</h1>
          <p className="text-lg md:text-xl text-primary-light font-medium">
            컨설팅 상담을 신청해 주세요
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Form — wider */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl font-bold text-text mb-1">상담 신청</h2>
              <p className="text-sm text-text-muted mb-6">
                아래 양식을 작성하시면 담당자가 빠르게 연락드립니다.
              </p>
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">자주 묻는 질문</h2>
            <p className="text-text-muted">컨설팅에 관한 자주 묻는 질문들을 모았습니다.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>
    </main>
  );
}
