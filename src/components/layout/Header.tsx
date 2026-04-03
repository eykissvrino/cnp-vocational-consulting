"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { COMPANY, NAV_ITEMS } from "@/lib/constants";
import type { NavItem } from "@/types";
import MobileMenu from "./MobileMenu";

function ServicesDropdown({ items }: { items: NavItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white border border-gray-100 shadow-xl z-50"
    >
      <div className="py-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-5 py-3 text-sm text-text hover:bg-surface hover:text-navy transition-colors border-b border-gray-50 last:border-0"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

function NavItemComponent({
  item,
  scrolled,
}: {
  item: NavItem;
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const textClass = scrolled
    ? "text-white/80 hover:text-white"
    : "text-white/90 hover:text-white";

  if (item.children && item.children.length > 0) {
    return (
      <div
        ref={ref}
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${textClass}`}
        >
          {item.label}
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <AnimatePresence>
          {open && <ServicesDropdown items={item.children} />}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={`px-4 py-2 text-sm font-medium transition-colors ${textClass}`}
    >
      {item.label}
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40"
        animate={{
          backgroundColor: scrolled
            ? "rgb(15, 23, 41)"
            : "rgba(15, 23, 41, 0)",
          boxShadow: scrolled
            ? "0 1px 0 rgba(255,255,255,0.08)"
            : "none",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* 로고 */}
            <Link href="/" className="flex flex-col shrink-0 group">
              <span className="text-white font-semibold text-base tracking-tight leading-tight">
                {COMPANY.name}
              </span>
              <span className="text-white/50 text-xs tracking-widest uppercase font-light">
                {COMPANY.division}
              </span>
            </Link>

            {/* 데스크톱 네비게이션 */}
            <nav className="hidden lg:flex items-center">
              {NAV_ITEMS.map((item) => (
                <NavItemComponent
                  key={item.href}
                  item={item}
                  scrolled={scrolled}
                />
              ))}
            </nav>

            {/* 우측 영역 */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center px-5 py-2 bg-primary text-white text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                컨설팅 문의
              </Link>

              {/* 모바일 햄버거 */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
                aria-label="메뉴 열기"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
