import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Map */}
      <div className="h-52 w-full relative overflow-hidden bg-navy-mid">
        <iframe
          src="https://www.google.com/maps?q=Suite+412+MKK+Plaza+Igbani+Street+Jabi+Abuja+Nigeria&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.5) brightness(0.7) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="LexSuite Solicitors - Abuja Office"
        />
        <div className="absolute bottom-3 left-3 rounded-lg bg-navy/80 px-4 py-2.5 backdrop-blur-sm">
          <p className="text-sm font-semibold text-white">Suite 412, MKK Plaza</p>
          <p className="text-xs text-grey-400">I.T Igbani Street, Jabi, Abuja</p>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="text-lg font-semibold">Sign up for our newsletter</p>
              <p className="mt-1 text-sm text-grey-400">Insights on AI, privacy and startup law in Nigeria.</p>
            </div>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="w-full sm:w-auto">
              <div className="flex w-full max-w-md gap-2">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-grey-400 outline-none focus:border-gold"
                />
                <button
                  type="submit"
                  className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition hover:brightness-95">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="relative h-10 w-auto shrink-0">
              <Image
                src="/lexsuite-logo.png"
                alt="LexSuite logo"
                width={140}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </span>
            <span className="text-xl font-bold tracking-tight text-white">Solicitors</span>
          </div>
          <p className="text-sm text-grey-400">
            Nigerian-headquartered legal-tech advisory for digital businesses.
          </p>
          <p className="text-xs text-grey-500">
            LexSuite Solicitors · Registered with the Nigerian Bar Association ·
            CAC Accredited
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-grey-400">LexSuite</h3>
          <div className="space-y-3 text-sm text-grey-400">
            <Link href="/" className="block transition hover:text-gold">Home</Link>
            <Link href="/services" className="block transition hover:text-gold">Practice Areas</Link>
            <Link href="/about" className="block transition hover:text-gold">About Us</Link>
            <Link href="/team" className="block transition hover:text-gold">Team</Link>
            <Link href="/blog" className="block transition hover:text-gold">Insights</Link>
            <Link href="/contact" className="block transition hover:text-gold">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-grey-400">Practice Areas</h3>
          <div className="space-y-3 text-sm text-grey-400">
            <Link href="/services/corporate" className="block transition hover:text-gold">Corporate</Link>
            <Link href="/services/ip-technology" className="block transition hover:text-gold">IP &amp; Technology</Link>
            <Link href="/services/data-privacy" className="block transition hover:text-gold">Data Privacy</Link>
            <Link href="/services/startup-advisory" className="block transition hover:text-gold">Startup Advisory</Link>
            <Link href="/services/fintech-compliance" className="block transition hover:text-gold">Fintech</Link>
            <Link href="/services/ai-legal" className="block transition hover:text-gold">AI Legal</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-grey-400">Policies</h3>
          <div className="space-y-3 text-sm text-grey-400">
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Complaints Handling Procedure</p>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <Link href="https://linkedin.com/company/lexsuite" aria-label="LinkedIn" className="transition hover:text-gold">
              <Linkedin size={18} />
            </Link>
            <Link href="https://twitter.com/LexSuiteLaw" aria-label="Twitter" className="transition hover:text-gold">
              <Twitter size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust badges + copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="inline-flex rounded border border-white/10 bg-white/5 px-3 py-1 text-xs text-grey-400">Cyber Essentials</span>
              <span className="inline-flex rounded border border-white/10 bg-white/5 px-3 py-1 text-xs text-grey-400">NBA Registered</span>
            </div>
            <p className="text-xs text-grey-500">
              © {new Date().getFullYear()} LexSuite Solicitors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
