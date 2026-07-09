"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Practice Areas" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) {
      setServicesOpen(false);
      return;
    }
    const prev = document.activeElement as HTMLElement | null;
    const el = menuRef.current;
    const focusable = el
      ? Array.from(
          el.querySelectorAll<HTMLElement>(
            'a, button, input, [tabindex]:not([tabindex="-1"])',
          ),
        )
      : [];
    focusable[0]?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && el) {
        const nodes = focusable;
        if (!nodes.length) {
          e.preventDefault();
          return;
        }
        const idx = nodes.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && idx === 0) {
          e.preventDefault();
          nodes[nodes.length - 1].focus();
        } else if (!e.shiftKey && idx === nodes.length - 1) {
          e.preventDefault();
          nodes[0].focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      prev?.focus();
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 sm:px-8">
        <Link href="/" className="flex items-center">
          <span className="relative h-[60px] w-auto overflow-hidden shrink-0 sm:h-[76px]">
            <Image
              src="/atl-logo.png"
              alt="ATL logo"
              width={280}
              height={76}
              className="h-[60px] w-auto object-contain sm:h-[76px]"
              priority
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-2 text-base font-semibold sm:flex">
          {navLinks.map((link) =>
            link.label === "Practice Areas" ? (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="relative flex items-center rounded-lg px-4 py-2.5 text-navy transition-all duration-300 hover:text-gold hover:bg-gold/5">
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute left-4 bottom-1.5 h-0.5 w-0 rounded-full bg-gold transition-all duration-300 group-hover:w-[calc(100%-32px)]" />
                  <span className="pointer-events-none ml-2 h-5 w-5 rounded-md border border-gold/0 bg-gold/0 opacity-0 transition-all duration-300 group-hover:border-gold/30 group-hover:bg-gold/10 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1" />
                </Link>
                <div className="absolute left-0 right-auto top-full z-50 pt-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-out origin-top-left">
                  <div className="w-[80vw] max-w-[560px] min-w-[420px] rounded-2xl bg-white p-6 shadow-xl shadow-grey-200/50 text-navy border border-grey-100 group-hover:border-gold/10 transition-colors duration-500">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-grey-500">
                          <span className="inline-block h-1 w-5 rounded-full bg-gold" />
                          Core Services
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out" style={{ transitionDelay: "40ms" }}>
                            <Link
                              href="/services/corporate"
                              className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 -mx-3 transition-all duration-300 hover:bg-gold/5 hover:pl-4">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-grey-100 transition-all duration-300 group-hover/item:bg-gold/15 group-hover/item:scale-110">
                                <span className="h-1.5 w-1.5 rounded-full bg-grey-400 transition-all duration-300 group-hover/item:bg-gold group-hover/item:scale-125" />
                              </span>
                              <span className="transition-colors duration-300 group-hover/item:text-gold">Corporate Structuring</span>
                              <span className="ml-auto h-4 w-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-gold"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </span>
                            </Link>
                          </li>
                          <li className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out" style={{ transitionDelay: "80ms" }}>
                            <Link
                              href="/services/ip-technology"
                              className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 -mx-3 transition-all duration-300 hover:bg-gold/5 hover:pl-4">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-grey-100 transition-all duration-300 group-hover/item:bg-gold/15 group-hover/item:scale-110">
                                <span className="h-1.5 w-1.5 rounded-full bg-grey-400 transition-all duration-300 group-hover/item:bg-gold group-hover/item:scale-125" />
                              </span>
                              <span className="transition-colors duration-300 group-hover/item:text-gold">IP & Technology Law</span>
                              <span className="ml-auto h-4 w-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-gold"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </span>
                            </Link>
                          </li>
                          <li className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out" style={{ transitionDelay: "120ms" }}>
                            <Link
                              href="/services/data-privacy"
                              className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 -mx-3 transition-all duration-300 hover:bg-gold/5 hover:pl-4">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-grey-100 transition-all duration-300 group-hover/item:bg-gold/15 group-hover/item:scale-110">
                                <span className="h-1.5 w-1.5 rounded-full bg-grey-400 transition-all duration-300 group-hover/item:bg-gold group-hover/item:scale-125" />
                              </span>
                              <span className="transition-colors duration-300 group-hover/item:text-gold">NDPA Data Privacy</span>
                              <span className="ml-auto h-4 w-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-gold"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </span>
                            </Link>
                          </li>
                          <li className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out" style={{ transitionDelay: "160ms" }}>
                            <Link
                              href="/services/startup-advisory"
                              className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 -mx-3 transition-all duration-300 hover:bg-gold/5 hover:pl-4">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-grey-100 transition-all duration-300 group-hover/item:bg-gold/15 group-hover/item:scale-110">
                                <span className="h-1.5 w-1.5 rounded-full bg-grey-400 transition-all duration-300 group-hover/item:bg-gold group-hover/item:scale-125" />
                              </span>
                              <span className="transition-colors duration-300 group-hover/item:text-gold">Startup Advisory</span>
                              <span className="ml-auto h-4 w-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-gold"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </span>
                            </Link>
                          </li>
                          <li className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out" style={{ transitionDelay: "200ms" }}>
                            <Link
                              href="/services/fintech-compliance"
                              className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 -mx-3 transition-all duration-300 hover:bg-gold/5 hover:pl-4">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-grey-100 transition-all duration-300 group-hover/item:bg-gold/15 group-hover/item:scale-110">
                                <span className="h-1.5 w-1.5 rounded-full bg-grey-400 transition-all duration-300 group-hover/item:bg-gold group-hover/item:scale-125" />
                              </span>
                              <span className="transition-colors duration-300 group-hover/item:text-gold">Fintech Compliance</span>
                              <span className="ml-auto h-4 w-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-gold"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                          <span className="inline-block h-1 w-5 rounded-full bg-gold/40" />
                          AI Legal Services
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out" style={{ transitionDelay: "60ms" }}>
                            <Link
                              href="/services/ai-legal#training-data"
                              className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 -mx-3 transition-all duration-300 hover:bg-gold/5 hover:pl-4">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gold/10 transition-all duration-300 group-hover/item:bg-gold/20 group-hover/item:scale-110">
                                <span className="h-1.5 w-1.5 rounded-full bg-gold/40 transition-all duration-300 group-hover/item:bg-gold group-hover/item:scale-125" />
                              </span>
                              <span className="transition-colors duration-300 group-hover/item:text-gold">Training Data Audit</span>
                              <span className="ml-auto h-4 w-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-gold"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </span>
                            </Link>
                          </li>
                          <li className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out" style={{ transitionDelay: "100ms" }}>
                            <Link
                              href="/services/ai-legal#content-ownership"
                              className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 -mx-3 transition-all duration-300 hover:bg-gold/5 hover:pl-4">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gold/10 transition-all duration-300 group-hover/item:bg-gold/20 group-hover/item:scale-110">
                                <span className="h-1.5 w-1.5 rounded-full bg-gold/40 transition-all duration-300 group-hover/item:bg-gold group-hover/item:scale-125" />
                              </span>
                              <span className="transition-colors duration-300 group-hover/item:text-gold">Content Ownership</span>
                              <span className="ml-auto h-4 w-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-gold"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </span>
                            </Link>
                          </li>
                          <li className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out" style={{ transitionDelay: "140ms" }}>
                            <Link
                              href="/services/ai-legal#algorithmic-bias"
                              className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 -mx-3 transition-all duration-300 hover:bg-gold/5 hover:pl-4">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gold/10 transition-all duration-300 group-hover/item:bg-gold/20 group-hover/item:scale-110">
                                <span className="h-1.5 w-1.5 rounded-full bg-gold/40 transition-all duration-300 group-hover/item:bg-gold group-hover/item:scale-125" />
                              </span>
                              <span className="transition-colors duration-300 group-hover/item:text-gold">Algorithmic Fairness</span>
                              <span className="ml-auto h-4 w-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-gold"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </span>
                            </Link>
                          </li>
                          <li className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out" style={{ transitionDelay: "180ms" }}>
                            <Link
                              href="/services/ai-legal#agentic-ai"
                              className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 -mx-3 transition-all duration-300 hover:bg-gold/5 hover:pl-4">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gold/10 transition-all duration-300 group-hover/item:bg-gold/20 group-hover/item:scale-110">
                                <span className="h-1.5 w-1.5 rounded-full bg-gold/40 transition-all duration-300 group-hover/item:bg-gold group-hover/item:scale-125" />
                              </span>
                              <span className="transition-colors duration-300 group-hover/item:text-gold">Agentic AI Governance</span>
                              <span className="ml-auto h-4 w-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-gold"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </span>
                            </Link>
                          </li>
                          <li className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out" style={{ transitionDelay: "220ms" }}>
                            <Link
                              href="/services/ai-legal#deepfakes"
                              className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 -mx-3 transition-all duration-300 hover:bg-gold/5 hover:pl-4">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gold/10 transition-all duration-300 group-hover/item:bg-gold/20 group-hover/item:scale-110">
                                <span className="h-1.5 w-1.5 rounded-full bg-gold/40 transition-all duration-300 group-hover/item:bg-gold group-hover/item:scale-125" />
                              </span>
                              <span className="transition-colors duration-300 group-hover/item:text-gold">Synthetic Identity & KYC</span>
                              <span className="ml-auto h-4 w-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-gold"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="group/nav relative flex items-center rounded-lg px-4 py-2.5 text-navy transition-all duration-300 hover:text-gold hover:bg-gold/5">
                <span className="relative z-10">{link.label}</span>
                <span className="absolute left-4 bottom-1.5 h-0.5 w-0 rounded-full bg-gold transition-all duration-300 group-hover/nav:w-[calc(100%-32px)]" />
                <span className="pointer-events-none ml-2 h-5 w-5 rounded-md border border-gold/0 bg-gold/0 opacity-0 transition-all duration-300 group-hover/nav:border-gold/30 group-hover/nav:bg-gold/10 group-hover/nav:opacity-100 group-hover/nav:translate-x-0 -translate-x-1" />
              </Link>
            ),
          )}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-gold px-6 py-3 text-base font-bold text-navy transition hover:brightness-95">
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="sm:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-xl text-navy transition-all duration-300 hover:bg-gold/10 active:scale-95"
          onClick={() => setOpen(!open)}
          aria-label="Open menu">
          <span className={`absolute transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? "rotate-0" : "-rotate-90 opacity-0"}`}>
            <X size={22} strokeWidth={2.5} />
          </span>
          <span className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? "rotate-90 opacity-0" : "rotate-0"}`}>
            <Menu size={22} strokeWidth={2.5} />
          </span>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 sm:hidden transition-all duration-500 ease-out ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-navy/60 backdrop-blur-sm transition-all duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Slide-in panel */}
        <aside
          ref={menuRef}
          className={`absolute right-0 top-0 bottom-0 z-10 flex w-[min(85vw,360px)] flex-col bg-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          tabIndex={-1}
          aria-modal="true"
          role="dialog">

          {/* Decorative gradient strip */}
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-gold via-gold/40 to-transparent" />

          {/* Header */}
          <div className="relative flex items-center justify-between px-6 pt-6 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold/15 to-gold/5">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gold" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="text-base font-bold text-navy tracking-tight">ATL Solicitors</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-grey-100 text-grey-600 transition-all duration-300 hover:bg-navy hover:text-white active:scale-90">
              <X size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Divider */}
          <div className="mx-6 h-px bg-gradient-to-r from-grey-200 via-grey-100 to-transparent" />

          {/* Navigation */}
          <nav className="relative flex-1 overflow-y-auto px-6 py-6">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-grey-400">
              Navigation
            </p>
            <div className="flex flex-col gap-1">
              {/* Home */}
              <Link
                href="/"
                className="group flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-300 hover:bg-gold/5 active:scale-[0.98]"
                onClick={() => setOpen(false)}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-grey-100 transition-all duration-300 group-hover:bg-gold/15 group-hover:scale-105">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-grey-500 transition-colors duration-300 group-hover:text-gold">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </span>
                <div className="flex-1">
                  <span className="block text-sm font-semibold text-navy transition-colors duration-300 group-hover:text-gold">Home</span>
                </div>
              </Link>

              {/* Practice Areas (expandable) */}
              <div>
                <button
                  type="button"
                  className="group flex w-full items-center gap-4 rounded-2xl px-4 py-3.5 text-left transition-all duration-300 hover:bg-gold/5 active:scale-[0.98]"
                  onClick={() => setServicesOpen((v) => !v)}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-grey-100 transition-all duration-300 group-hover:bg-gold/15 group-hover:scale-105">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-grey-500 transition-colors duration-300 group-hover:text-gold">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div className="flex-1">
                    <span className="block text-sm font-semibold text-navy transition-colors duration-300 group-hover:text-gold">Practice Areas</span>
                    <span className="mt-0.5 block text-xs text-grey-400">Services & expertise</span>
                  </div>
                  <svg viewBox="0 0 16 16" fill="none" className={`h-4 w-4 text-grey-300 transition-all duration-300 ${servicesOpen ? "rotate-90 text-gold" : "group-hover:text-gold"}`}>
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${servicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="ml-6 mt-1 space-y-0.5 border-l-2 border-grey-100 pl-4">
                    {[
                      { href: "/services/corporate", label: "Corporate Structuring" },
                      { href: "/services/ip-technology", label: "IP & Technology Law" },
                      { href: "/services/data-privacy", label: "NDPA Data Privacy" },
                      { href: "/services/startup-advisory", label: "Startup Advisory" },
                      { href: "/services/fintech-compliance", label: "Fintech Compliance" },
                      { href: "/services/ai-legal", label: "AI Legal Services" },
                      { href: "/services/litigation", label: "Litigation & Disputes" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group/sub flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-grey-600 transition-all duration-300 hover:bg-gold/5 hover:pl-4 hover:text-gold active:scale-[0.98]"
                        onClick={() => setOpen(false)}>
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-grey-300 transition-all duration-300 group-hover/sub:bg-gold group-hover/sub:scale-125" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="group/sub mt-2 flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold text-gold transition-all duration-300 hover:bg-gold/5 hover:pl-4 active:scale-[0.98]"
                      onClick={() => setOpen(false)}>
                      <span>View all practice areas</span>
                      <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 transition-all duration-300 group-hover/sub:translate-x-1">
                        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* About */}
              <Link
                href="/about"
                className="group flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-300 hover:bg-gold/5 active:scale-[0.98]"
                onClick={() => setOpen(false)}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-grey-100 transition-all duration-300 group-hover:bg-gold/15 group-hover:scale-105">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-grey-500 transition-colors duration-300 group-hover:text-gold">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="flex-1">
                  <span className="block text-sm font-semibold text-navy transition-colors duration-300 group-hover:text-gold">About</span>
                  <span className="mt-0.5 block text-xs text-grey-400">Our story & team</span>
                </div>
              </Link>

              {/* Blog */}
              <Link
                href="/blog"
                className="group flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-300 hover:bg-gold/5 active:scale-[0.98]"
                onClick={() => setOpen(false)}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-grey-100 transition-all duration-300 group-hover:bg-gold/15 group-hover:scale-105">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-grey-500 transition-colors duration-300 group-hover:text-gold">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </span>
                <div className="flex-1">
                  <span className="block text-sm font-semibold text-navy transition-colors duration-300 group-hover:text-gold">Blog</span>
                  <span className="mt-0.5 block text-xs text-grey-400">Insights & articles</span>
                </div>
              </Link>

              {/* Health Check */}
              <Link
                href="/health-check"
                className="group flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-300 hover:bg-gold/5 active:scale-[0.98]"
                onClick={() => setOpen(false)}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-grey-100 transition-all duration-300 group-hover:bg-gold/15 group-hover:scale-105">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-grey-500 transition-colors duration-300 group-hover:text-gold">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="flex-1">
                  <span className="block text-sm font-semibold text-navy transition-colors duration-300 group-hover:text-gold">AI Health Check</span>
                  <span className="mt-0.5 block text-xs text-grey-400">Free risk assessment</span>
                </div>
              </Link>
            </div>
          </nav>

          {/* Bottom CTA */}
          <div className="relative px-6 pb-8 pt-4">
            <div className="h-px bg-gradient-to-r from-grey-200 via-grey-100 to-transparent mb-5" />
            <Link
                href="/contact"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-4 rounded-2xl bg-gradient-to-br from-navy via-[#1a2744] to-[#0f1a2e] p-5 shadow-lg shadow-navy/20 transition-all duration-300 hover:shadow-xl hover:shadow-navy/30 active:scale-[0.98]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/20 transition-all duration-300 group-hover:bg-gold/30 group-hover:scale-105">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-gold">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
              <div className="flex-1">
                <span className="block text-sm font-bold text-white">Book a Free Consultation</span>
                <span className="mt-0.5 block text-xs text-grey-400">We typically reply within 24 hours</span>
              </div>
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-gold transition-all duration-300 group-hover:translate-x-1">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
