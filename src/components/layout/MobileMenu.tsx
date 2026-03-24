'use client';

import { useEffect } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);

  if (item.children && item.children.length > 0) {
    return (
      <div>
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="flex items-center justify-between w-full py-4 text-lg font-medium text-navy border-b border-border"
        >
          {item.label}
          <ChevronDown
            size={20}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
        {expanded && (
          <div className="pl-4 pb-2">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                className="block py-3 text-base text-text-muted hover:text-primary transition-colors border-b border-border/50 last:border-0"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="block py-4 text-lg font-medium text-navy border-b border-border hover:text-primary transition-colors"
    >
      {item.label}
    </Link>
  );
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // 열려 있을 때 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative ml-auto w-full max-w-sm bg-white h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
              직능본부
            </span>
            <span className="text-border">|</span>
            <span className="text-sm font-semibold text-navy">시앤피컨설팅</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-surface transition-colors text-navy"
            aria-label="메뉴 닫기"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <MobileNavItem key={item.href} item={item} onClose={onClose} />
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 py-6 border-t border-border">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full text-center bg-primary text-white font-semibold py-4 rounded-lg hover:bg-primary-dark transition-colors"
          >
            상담 문의
          </Link>
        </div>
      </div>
    </div>
  );
}
