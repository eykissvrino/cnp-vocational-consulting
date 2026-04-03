import Link from 'next/link';

interface ServiceCTAProps {
  text: string;
  href: string;
  color?: string;
}

const BG_MAP: Record<string, string> = {
  navy: 'bg-navy',
  teal: 'bg-teal',
  green: 'bg-teal',
  slate: 'bg-slate',
};

export default function ServiceCTA({ text, href, color = 'navy' }: ServiceCTAProps) {
  const bgClass = BG_MAP[color] ?? 'bg-navy';
  // Navy bg → use primary-colored button; teal/slate → use white button with dark text
  const isNavy = color === 'navy' || color === 'primary';
  const buttonClass = isNavy
    ? 'bg-primary text-white hover:bg-primary-dark'
    : 'bg-white text-navy hover:bg-surface';

  return (
    <section className={`${bgClass} py-20`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="label-caps text-white/50 mb-4">전문가와 상담하세요</p>
        <h2 className="text-2xl lg:text-3xl font-light text-white tracking-tight mb-10">
          {text}
        </h2>
        <Link
          href={href}
          className={`inline-block px-10 py-4 rounded-lg font-semibold text-base transition-colors duration-200 ${buttonClass}`}
        >
          문의하기
        </Link>
      </div>
    </section>
  );
}
