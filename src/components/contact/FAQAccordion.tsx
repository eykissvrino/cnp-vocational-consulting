'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
              isOpen ? 'border-primary' : 'border-border'
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-primary-bg transition-colors duration-150 cursor-pointer"
            >
              <span className={`text-sm font-semibold ${isOpen ? 'text-primary' : 'text-text'}`}>
                Q. {item.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 flex-shrink-0 mt-0.5 text-text-muted transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-primary' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-5 pb-5 pt-1 bg-primary-bg border-t border-border">
                <p className="text-sm text-text-muted leading-relaxed">
                  A. {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
