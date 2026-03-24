'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import type { NavItem } from "@/types";
import MobileMenu from "./MobileMenu";

function DropdownMenu({ items }: { items: NavItem[] }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-border rounded-xl shadow-lg py-2 z-50">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2.5 text-sm text-navy hover:bg-primary-bg hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function NavItemComponent({ item }: { item: NavItem }) {
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

  if (item.children && item.children.length > 0) {
    return (
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy hover:text-primary transition-colors rounded-lg hover:bg-primary-bg"
        >
          {item.label}
          <ChevronDown
            size={15}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && <DropdownMenu items={item.children} />}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className="px-3 py-2 text-sm font-medium text-navy hover:text-primary transition-colors rounded-lg hover:bg-primary-bg"
    >
      {item.label}
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                직능본부
              </span>
              <span className="text-border/60 hidden sm:block">|</span>
              <span className="hidden sm:block text-sm font-semibold text-navy">
                시앤피컨설팅
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <NavItemComponent key={item.href} item={item} />
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                상담 문의
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-lg text-navy hover:bg-surface transition-colors"
                aria-label="메뉴 열기"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
