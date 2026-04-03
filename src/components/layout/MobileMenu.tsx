"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { COMPANY, NAV_ITEMS } from "@/lib/constants";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileNavItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (item.children && item.children.length > 0) {
    return (
      <div className="border-b border-white/10">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="flex items-center justify-between w-full py-4 text-base font-medium text-white/90 hover:text-white transition-colors"
        >
          {item.label}
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 text-white/50 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pb-3 pl-4 space-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="block py-2.5 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="block py-4 text-base font-medium text-white/90 hover:text-white transition-colors border-b border-white/10"
    >
      {item.label}
    </Link>
  );
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 오버레이 */}
          <motion.div
            className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* 슬라이드 패널 */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-navy flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm">
                  {COMPANY.name}
                </span>
                <span className="text-white/40 text-xs tracking-widest uppercase font-light mt-0.5">
                  {COMPANY.division}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-white/60 hover:text-white transition-colors"
                aria-label="메뉴 닫기"
              >
                <X size={22} />
              </button>
            </div>

            {/* 네비게이션 */}
            <nav className="flex-1 overflow-y-auto px-6 py-2">
              {NAV_ITEMS.map((item) => (
                <MobileNavItem key={item.href} item={item} onClose={onClose} />
              ))}
            </nav>

            {/* CTA */}
            <div className="px-6 py-6 border-t border-white/10">
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full text-center bg-primary text-white text-sm font-medium py-3.5 rounded-md hover:opacity-90 transition-opacity"
              >
                컨설팅 문의
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
