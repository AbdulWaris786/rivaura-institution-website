"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Hospital Affiliation Bar */}
      <div className="bg-[#00796B] text-white text-[11px] sm:text-xs py-2 px-4 sm:px-6 border-b border-teal-700">
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
              Rivaura Hospital[cite: 1]
            </a>
          </p>
          <div className="hidden md:flex gap-3 text-[11px] text-teal-100">
            <span>Bedside Clinical Training</span>
            <span>•</span>
            <span>Simulation Labs</span>
          </div>
        </div>
      </div>

      {/* Main Responsive Header on White */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0" onClick={() => setIsOpen(false)}>
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#00897B] font-bold text-white shadow-md text-lg sm:text-xl">
              +
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 leading-tight">
                RIVAURA
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider text-teal-700 uppercase font-bold">
                Institute of Health Sciences
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-teal-700 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-teal-700 transition-colors">Service</Link>
            <Link href="/about" className="hover:text-teal-700 transition-colors">About Us</Link>
            <Link href="/vision" className="hover:text-teal-700 transition-colors">Vision</Link>
            <Link href="/learning-models" className="hover:text-teal-700 transition-colors">Learning Models</Link>
            <Link href="/contact" className="hover:text-teal-700 transition-colors">Contact Us</Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="rounded-lg bg-[#00897B] px-4 py-2 text-xs font-semibold text-white shadow-md transition hover:bg-[#00796B]"
              >
                Admissions
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
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
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-6 py-5 space-y-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-teal-700 py-1">Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-teal-700 py-1">Service</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-teal-700 py-1">About Us</Link>
            <Link href="/vision" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-teal-700 py-1">Vision</Link>
            <Link href="/learning-models" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-teal-700 py-1">Learning Models</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-teal-700 py-1">Contact Us</Link>
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

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#0F172B] py-12 text-slate-400 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-[#00897B]" />
            <h4 className="font-bold text-white text-base">Rivaura Institute of Health Sciences</h4>
          </div>
          <p className="text-xs text-slate-300 mt-2.5 max-w-sm leading-relaxed font-medium">
            Building Skills. Creating Professionals. Shaping a Better Tomorrow. Direct clinical exposure integrated with Rivaura Hospital[cite: 1].
          </p>
        </div>

        <div>
          <h5 className="font-bold text-white text-sm mb-3">Quick Navigation</h5>
          <ul className="space-y-2 text-xs font-semibold">
            <li><Link href="/services" className="hover:text-teal-400 transition-colors">Our Services</Link></li>
            <li><Link href="/about" className="hover:text-teal-400 transition-colors">About Us &amp; Values</Link></li>
            <li><Link href="/vision" className="hover:text-teal-400 transition-colors">Vision &amp; 2030 Roadmap</Link></li>
            <li><Link href="/learning-models" className="hover:text-teal-400 transition-colors">Learning Models</Link></li>
            <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-white text-sm mb-3">Parent Hospital</h5>
          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            Bedside rotations and supervised patient training conducted inside Rivaura Hospital[cite: 1].
          </p>
          <a
            href="https://www.rivaurahospital.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-teal-400 hover:underline mt-2.5 inline-block font-bold"
          >
            Visit Rivaura Hospital ↗
          </a>
        </div>
      </div>
      <div className="mt-8 sm:mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 font-medium px-4">
        © 2026 Rivaura Institute of Health Sciences. All rights reserved.
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {isProd && <base href="/rivaura-institution-website/" />}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpeg" />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}