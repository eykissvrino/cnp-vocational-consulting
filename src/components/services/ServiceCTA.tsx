import Link from 'next/link';

interface ServiceCTAProps {
  text: string;
  buttonText?: string;
  href: string;
  color?: string;
}

export default function ServiceCTA({ text, buttonText, href, color }: ServiceCTAProps) {
  const gradientClass =
    color === 'green'
      ? 'bg-gradient-to-r from-green to-green-light'
      : color === 'navy'
      ? 'bg-gradient-to-r from-navy to-navy/80'
      : 'bg-gradient-to-r from-primary to-primary-light';

  const label = buttonText ?? text;

  return (
    <section className={`${gradientClass} py-16`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white text-xl md:text-2xl font-semibold mb-8">{text}</p>
        <Link
          href={href}
          className="inline-block px-10 py-4 bg-white font-bold rounded-lg shadow-lg hover:bg-primary-bg transition-colors text-base"
          style={{ color: color === 'green' ? '#1B5E3B' : color === 'navy' ? '#1A1A2E' : '#E88124' }}
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
