"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-8 right-6 z-40"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="flex items-center gap-2.5 bg-primary text-white text-sm font-medium px-5 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            aria-label="컨설팅 문의"
          >
            <Phone size={15} />
            <span>컨설팅 문의</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
