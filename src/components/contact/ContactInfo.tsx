import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

const items = [
  {
    icon: MapPin,
    label: '주소',
    value: COMPANY.address,
  },
  {
    icon: Phone,
    label: '전화',
    value: COMPANY.tel,
  },
  {
    icon: Mail,
    label: '이메일',
    value: COMPANY.email,
  },
  {
    icon: Clock,
    label: '운영시간',
    value: '평일 09:00 – 18:00 (주말·공휴일 휴무)',
  },
];

export default function ContactInfo() {
  return (
    <div className="bg-navy text-white rounded-2xl p-6 md:p-8 h-full">
      <h2 className="text-xl font-bold mb-2">연락처 안내</h2>
      <p className="text-white/60 text-sm mb-8">
        궁금한 사항이 있으시면 언제든지 연락주세요.
      </p>

      <ul className="space-y-6">
        {items.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-primary-light" />
            </div>
            <div>
              <p className="text-xs text-white/50 mb-0.5">{label}</p>
              <p className="text-sm font-medium leading-relaxed">{value}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 pt-6 border-t border-white/10">
        <p className="text-xs text-white/40">
          {COMPANY.name} · 사업자등록번호 {COMPANY.bizNumber}
        </p>
      </div>
    </div>
  );
}
