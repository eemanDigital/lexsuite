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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    const el = menuRef.current;
    const focusable = el
      ? Array.from(el.querySelectorAll<HTMLElement>('a, button, input, [tabindex]:not([tabindex="-1"])'))
      : [];
    focusable[0]?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") { setOpen(false); return; }
      if (e.key === "Tab" && el) {
        const nodes = focusable;
        if (!nodes.length) { e.preventDefault(); return; }
        const idx = nodes.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && idx === 0) { e.preventDefault(); nodes[nodes.length - 1].focus(); }
        else if (!e.shiftKey && idx === nodes.length - 1) { e.preventDefault(); nodes[0].focus(); }
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 sm:px-8">
        <Link href="/" className="flex items-center">
          <span className="relative h-[76px] w-auto overflow-hidden shrink-0 sm:h-[90px]">
            <Image
              src="/lexsuite-logo.png"
              alt="LexSuite logo"
              width={320}
              height={90}
              className="h-[76px] w-auto object-contain sm:h-[90px]"
              priority
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-base font-semibold sm:flex">
          {navLinks.map((link) =>
            link.label === "Practice Areas" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}>
                <Link
                  href={link.href}
                  className="text-navy transition hover:text-gold">
                  {link.label}
                </Link>
                {menuOpen && (
                  <div className="absolute left-0 top-full z-50 mt-3 w-[560px] rounded-2xl bg-white p-6 shadow-lg text-navy">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-grey-600">Core Services</h4>
                        <ul className="space-y-2 text-sm">
                          <li><Link href="/services/corporate" className="block transition hover:text-gold">Corporate Structuring</Link></li>
                          <li><Link href="/services/ip-technology" className="block transition hover:text-gold">IP & Technology Law</Link></li>
                          <li><Link href="/services/data-privacy" className="block transition hover:text-gold">NDPA Data Privacy</Link></li>
                          <li><Link href="/services/startup-advisory" className="block transition hover:text-gold">Startup Advisory</Link></li>
                          <li><Link href="/services/fintech-compliance" className="block transition hover:text-gold">Fintech Compliance</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">AI Legal Services</h4>
                        <ul className="space-y-2 text-sm">
                          <li><Link href="/services/ai-legal#training-data" className="block transition hover:text-gold">Training Data Audit</Link></li>
                          <li><Link href="/services/ai-legal#content-ownership" className="block transition hover:text-gold">Content Ownership</Link></li>
                          <li><Link href="/services/ai-legal#algorithmic-bias" className="block transition hover:text-gold">Algorithmic Fairness</Link></li>
                          <li><Link href="/services/ai-legal#agentic-ai" className="block transition hover:text-gold">Agentic AI Governance</Link></li>
                          <li><Link href="/services/ai-legal#deepfakes" className="block transition hover:text-gold">Synthetic Identity & KYC</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-navy transition hover:text-gold">
                {link.label}
              </Link>
            ),
          )}
          <Link
            href="/contact"
            className="rounded-full bg-gold px-6 py-3 text-base font-bold text-navy transition hover:brightness-95">
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          className="sm:hidden text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Open menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-stretch sm:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <aside ref={menuRef} className="relative ml-auto w-[320px] bg-white p-6 shadow-lg" tabIndex={-1} aria-modal="true" role="dialog">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-navy">Menu</div>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-navy">
                <X size={20} />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-base font-semibold text-navy" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="mt-4 inline-flex rounded-full bg-gold px-5 py-3 text-base font-semibold text-navy text-center" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
