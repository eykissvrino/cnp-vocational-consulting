'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle } from 'lucide-react';

const contactSchema = z.object({
  organization: z.string().min(1, '기관명을 입력해 주세요'),
  name: z.string().min(1, '담당자명을 입력해 주세요'),
  email: z.string().email('올바른 이메일 형식이 아닙니다'),
  phone: z.string().min(1, '연락처를 입력해 주세요'),
  services: z.array(z.string()).min(1, '관심 서비스를 선택해 주세요'),
  message: z.string().min(10, '상담 내용을 10자 이상 입력해 주세요'),
  privacy: z.literal(true).refine((v) => v === true, { message: '개인정보 수집에 동의해 주세요' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const SERVICE_OPTIONS = ['HRM', 'HRD', 'AX'];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-500">{message}</p>;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { services: [] },
  });

  const selectedServices = watch('services') ?? [];

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      setValue('services', selectedServices.filter((s) => s !== svc), { shouldValidate: true });
    } else {
      setValue('services', [...selectedServices, svc], { shouldValidate: true });
    }
  };

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green" />
        </div>
        <h3 className="text-xl font-bold text-text mb-2">상담 신청이 완료되었습니다</h3>
        <p className="text-text-muted text-sm">
          담당자가 확인 후 1~2 영업일 내에 연락드리겠습니다.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-2.5 rounded-lg border border-border text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors';

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Row: 기관명 + 담당자명 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-text mb-1">
            기관명 <span className="text-primary">*</span>
          </label>
          <input
            {...register('organization')}
            placeholder="소속 기관명"
            className={inputClass}
          />
          <FieldError message={errors.organization?.message} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-text mb-1">
            담당자명 <span className="text-primary">*</span>
          </label>
          <input
            {...register('name')}
            placeholder="성함"
            className={inputClass}
          />
          <FieldError message={errors.name?.message} />
        </div>
      </div>

      {/* Row: 이메일 + 연락처 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-text mb-1">
            이메일 <span className="text-primary">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="example@org.kr"
            className={inputClass}
          />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-text mb-1">
            연락처 <span className="text-primary">*</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="02-0000-0000"
            className={inputClass}
          />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      {/* 관심 서비스 */}
      <div>
        <label className="block text-sm font-semibold text-text mb-2">
          관심 서비스 <span className="text-primary">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((svc) => {
            const checked = selectedServices.includes(svc);
            return (
              <button
                key={svc}
                type="button"
                onClick={() => toggleService(svc)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold border-2 transition-all duration-150 cursor-pointer ${
                  checked
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-text-muted border-border hover:border-primary hover:text-primary'
                }`}
              >
                {svc} 컨설팅
              </button>
            );
          })}
        </div>
        <FieldError message={errors.services?.message} />
      </div>

      {/* 상담 내용 */}
      <div>
        <label className="block text-sm font-semibold text-text mb-1">
          상담 내용 <span className="text-primary">*</span>
        </label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="문의하실 내용을 자유롭게 작성해 주세요. (10자 이상)"
          className={`${inputClass} resize-none`}
        />
        <FieldError message={errors.message?.message} />
      </div>

      {/* 개인정보 동의 */}
      <div className="bg-surface rounded-xl p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('privacy')}
            className="mt-0.5 w-4 h-4 accent-primary flex-shrink-0"
          />
          <span className="text-sm text-text-muted leading-relaxed">
            <span className="font-semibold text-text">개인정보 수집·이용에 동의합니다.</span>{' '}
            수집된 정보(기관명, 성명, 이메일, 연락처)는 상담 목적으로만 사용되며, 상담 종료 후
            즉시 파기됩니다. <span className="text-primary">*</span>
          </span>
        </label>
        <FieldError message={errors.privacy?.message} />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? '제출 중...' : '상담 신청하기'}
      </button>
    </form>
  );
}
