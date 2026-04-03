import Link from 'next/link';

const SERVICE_CARDS = [
  {
    title: 'HRM 컨설팅',
    items: ['직무분석', '직무평가', '보수체계', '성과관리', '조직설계'],
    href: '/services/hrm',
    borderColor: 'border-l-navy',
    tagColor: 'bg-navy/10 text-navy',
  },
  {
    title: 'HRD 컨설팅',
    items: ['훈련체계 수립', '역량모델링', 'Skill Gap 분석', '교육과정 개발'],
    href: '/services/hrd',
    borderColor: 'border-l-teal',
    tagColor: 'bg-teal/10 text-teal',
  },
  {
    title: 'AX 컨설팅',
    items: ['AX 진단', '전략수립', 'Skill Set 구축', '워크플로우 재설계', 'AI 교육훈련'],
    href: '/services/ax',
    borderColor: 'border-l-slate-500',
    tagColor: 'bg-slate-100 text-slate-600',
  },
];

export default function ContactServiceCards() {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-semibold text-text mb-1">서비스 안내</h2>
      <p className="text-sm text-text-muted mb-4">
        상담을 원하시는 서비스를 참고해 주세요.
      </p>
      {SERVICE_CARDS.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className={`block bg-white rounded-xl p-5 border border-border border-l-4 ${card.borderColor} hover:shadow-md transition-shadow duration-200`}
        >
          <h3 className="font-semibold text-navy text-sm mb-3">{card.title}</h3>
          <div className="flex flex-wrap gap-1.5">
            {card.items.map((item) => (
              <span
                key={item}
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${card.tagColor}`}
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-xs text-primary mt-3 font-medium">자세히 보기 →</p>
        </Link>
      ))}
    </div>
  );
}
