"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Affiliation Bar */}
      <div className="bg-[#00796B] text-white text-[11px] sm:text-xs py-2 px-4 sm:px-6 border-b border-teal-600/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <p className="flex items-center gap-2 font-medium text-center sm:text-left">
            <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse shrink-0" />
            An Educational Initiative of{" "}
            <a
              href="https://www.rivaurahospital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold hover:text-emerald-100 transition"
            >
              Rivaura Hospital
            </a>
          </p>
          <div className="hidden md:flex gap-3 text-[11px] text-teal-100">
            <span>Bedside Clinical Training</span>
            <span>•</span>
            <span>Simulation Labs</span>
          </div>
        </div>
      </div>

      {/* Main Responsive Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0A192F]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0" onClick={() => setIsOpen(false)}>
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#00897B] font-bold text-white shadow-md shadow-teal-900/40 text-lg sm:text-xl">
              +
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                RIVAURA
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider text-teal-400 uppercase font-semibold">
                Institute of Health Sciences
              </span>
            </div>
          </Link>

          {/* Desktop & Laptop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-teal-400 transition-colors">Service</Link>
            <Link href="/about" className="hover:text-teal-400 transition-colors">About Us</Link>
            <Link href="/vision" className="hover:text-teal-400 transition-colors">Vision</Link>
            <Link href="/learning-models" className="hover:text-teal-400 transition-colors">Learning Models</Link>
            <Link href="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link>
          </nav>

          {/* Admissions Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-[#00897B] px-4 py-2 text-xs font-semibold text-white shadow transition hover:bg-[#00796B]"
            >
              Admissions
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-[#071120] px-6 py-5 space-y-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-teal-400 py-1">Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-teal-400 py-1">Service</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-teal-400 py-1">About Us</Link>
            <Link href="/vision" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-teal-400 py-1">Vision</Link>
            <Link href="/learning-models" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-teal-400 py-1">Learning Models</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-teal-400 py-1">Contact Us</Link>
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center rounded-lg bg-[#00897B] px-4 py-2.5 text-xs font-semibold text-white shadow hover:bg-[#00796B]"
              >
                Inquire Admissions
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}