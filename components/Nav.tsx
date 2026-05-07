"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav({ theme = "light" }: { theme?: "light" | "dark" }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // On dark pages: white text until scrolled, then revert to teal
  const isDark = theme === "dark" && !scrolled;

  const linkColor = isDark ? "text-white" : "text-teal-700";
  const linkHover = isDark ? "hover:text-[#f3abb6]" : "hover:text-teal-500";
  const logoColor = isDark ? "text-white" : "text-teal-700";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md border-b border-teal-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 lg:px-12 py-5 flex items-center justify-between">
        <Link
          href="/"
          className={`font-sans font-bold text-sm transition-colors ${logoColor} ${linkHover}`}
        >
          UXbyBridget
        </Link>

        <div className="flex items-center gap-8 lg:gap-10">
          <Link href="/#work" className={`font-sans text-sm transition-colors hidden sm:block ${linkColor} ${linkHover}`}>
            Work
          </Link>
          <Link href="/#about" className={`font-sans text-sm transition-colors hidden sm:block ${linkColor} ${linkHover}`}>
            About
          </Link>
          <Link href="/#contact" className={`font-sans text-sm transition-colors hidden sm:block ${linkColor} ${linkHover}`}>
            Contact
          </Link>
          <a
            href="/resume.pdf"
            className={`font-sans font-semibold text-sm inline-flex items-center justify-center px-5 py-2.5 rounded-[32px] transition-colors duration-200 ${
              isDark
                ? "border border-white text-white hover:border-[#f3abb6] hover:text-[#f3abb6]"
                : "bg-teal-500 text-white hover:bg-teal-700"
            }`}
          >
            Résumé
          </a>
        </div>
      </nav>
    </header>
  );
}
