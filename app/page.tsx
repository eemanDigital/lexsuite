import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../lib/mdx";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { HeroContent } from "../components/home/HeroContent";
import { TestimonialCarousel } from "../components/home/TestimonialCarousel";
import { ClientLogos } from "../components/home/ClientLogos";
import { TeamGrid } from "../components/home/TeamGrid";
import { Award, Play, Shield, Users, Scale, Building2, Gavel, Cpu, Lock, Briefcase, HardHat, Zap, Globe, Handshake, ScrollText, FileText } from "lucide-react";
import { ServiceTimeline } from "../components/home/ServiceTimeline";
import { BlogCard } from "../components/blog/BlogCard";

const practiceAreas = [
  { icon: Cpu, label: "AI Law" },
  { icon: Building2, label: "Commercial Property" },
  { icon: HardHat, label: "Construction" },
  { icon: FileText, label: "Contracts" },
  { icon: Briefcase, label: "Corporate" },
  { icon: Lock, label: "Data Protection" },
  { icon: Scale, label: "Litigation" },
  { icon: Gavel, label: "Employment" },
  { icon: Globe, label: "Immigration" },
  { icon: Handshake, label: "M&A" },
  { icon: Shield, label: "IP" },
  { icon: ScrollText, label: "Regulatory" },
];

export default async function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <main className="relative overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="relative bg-navy text-white min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/og-image.svg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-navy/80" />

        {/* Geometric wireframe — full-width bottom-anchored gold tessellation with glow */}
        <div className="absolute bottom-0 left-0 w-full h-[42%] pointer-events-none overflow-hidden" aria-hidden>
          <svg viewBox="0 0 1440 480" preserveAspectRatio="xMidYMax slice" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowSoft" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Deep faint background mesh — row 1 & 2 */}
            <g stroke="#c9a84c" strokeWidth="0.5" opacity="0.08">
              <polygon points="72,320 144,362 144,444 72,486 0,444 0,362" />
              <polygon points="216,320 288,362 288,444 216,486 144,444 144,362" />
              <polygon points="360,320 432,362 432,444 360,486 288,444 288,362" />
              <polygon points="504,320 576,362 576,444 504,486 432,444 432,362" />
              <polygon points="648,320 720,362 720,444 648,486 576,444 576,362" />
              <polygon points="792,320 864,362 864,444 792,486 720,444 720,362" />
              <polygon points="936,320 1008,362 1008,444 936,486 864,444 864,362" />
              <polygon points="1080,320 1152,362 1152,444 1080,486 1008,444 1008,362" />
              <polygon points="1224,320 1296,362 1296,444 1224,486 1152,444 1152,362" />
              <polygon points="1368,320 1440,362 1440,444 1368,486 1296,444 1296,362" />
            </g>

            {/* Mid-ground mesh — row 1 & 2 */}
            <g stroke="#c9a84c" strokeWidth="1" opacity="0.25">
              <polygon points="72,170 144,212 144,294 72,336 0,294 0,212" />
              <polygon points="216,170 288,212 288,294 216,336 144,294 144,212" />
              <polygon points="360,170 432,212 432,294 360,336 288,294 288,212" />
              <polygon points="504,170 576,212 576,294 504,336 432,294 432,212" />
              <polygon points="648,170 720,212 720,294 648,336 576,294 576,212" />
              <polygon points="792,170 864,212 864,294 792,336 720,294 720,212" />
              <polygon points="936,170 1008,212 1008,294 936,336 864,294 864,212" />
              <polygon points="1080,170 1152,212 1152,294 1080,336 1008,294 1008,212" />
              <polygon points="1224,170 1296,212 1296,294 1224,336 1152,294 1152,212" />
              <polygon points="1368,170 1440,212 1440,294 1368,336 1296,294 1296,212" />
              {/* internal lines */}
              <line x1="72" y1="170" x2="144" y2="212" /><line x1="144" y1="212" x2="144" y2="294" />
              <line x1="144" y1="294" x2="72" y2="336" /><line x1="72" y1="336" x2="0" y2="294" />
              <line x1="0" y1="294" x2="0" y2="212" /><line x1="0" y1="212" x2="72" y2="170" />
              <line x1="72" y1="170" x2="72" y2="336" /><line x1="0" y1="212" x2="144" y2="212" />
              <line x1="0" y1="294" x2="144" y2="294" /><line x1="36" y1="253" x2="108" y2="253" />
            </g>

            {/* Bottom row — boldest foreground mesh */}
            <g stroke="#c9a84c" strokeWidth="1.5" opacity="0.4">
              <polygon points="72,320 144,362 144,444 72,486 0,444 0,362" />
              <polygon points="216,320 288,362 288,444 216,486 144,444 144,362" />
              <polygon points="360,320 432,362 432,444 360,486 288,444 288,362" />
              <polygon points="504,320 576,362 576,444 504,486 432,444 432,362" />
              <polygon points="648,320 720,362 720,444 648,486 576,444 576,362" />
              <polygon points="792,320 864,362 864,444 792,486 720,444 720,362" />
              <polygon points="936,320 1008,362 1008,444 936,486 864,444 864,362" />
              <polygon points="1080,320 1152,362 1152,444 1080,486 1008,444 1008,362" />
              <polygon points="1224,320 1296,362 1296,444 1224,486 1152,444 1152,362" />
              <polygon points="1368,320 1440,362 1440,444 1368,486 1296,444 1296,362" />
              <line x1="72" y1="320" x2="144" y2="362" /><line x1="144" y1="362" x2="144" y2="444" />
              <line x1="144" y1="444" x2="72" y2="486" /><line x1="72" y1="486" x2="0" y2="444" />
              <line x1="0" y1="444" x2="0" y2="362" /><line x1="0" y1="362" x2="72" y2="320" />
              <line x1="72" y1="320" x2="72" y2="486" /><line x1="0" y1="362" x2="144" y2="362" />
              <line x1="0" y1="444" x2="144" y2="444" />
            </g>

            {/* GLOWING edges — highlighted hexagons */}
            <g stroke="#c9a84c" strokeWidth="2.5" filter="url(#glow)">
              <polygon points="360,320 432,362 432,444 360,486 288,444 288,362" />
              <polygon points="792,320 864,362 864,444 792,486 720,444 720,362" />
              <line x1="360" y1="320" x2="360" y2="486" />
              <line x1="792" y1="320" x2="792" y2="486" />
            </g>

            <g stroke="#c9a84c" strokeWidth="2" filter="url(#glowSoft)" opacity="0.7">
              <polygon points="648,320 720,362 720,444 648,486 576,444 576,362" />
              <polygon points="1080,320 1152,362 1152,444 1080,486 1008,444 1008,362" />
            </g>

            {/* Glow halos on key vertices */}
            <g filter="url(#glow)">
              <circle cx="360" cy="320" r="4" fill="#c9a84c" opacity="1" />
              <circle cx="360" cy="486" r="3.5" fill="#c9a84c" opacity="0.9" />
              <circle cx="792" cy="320" r="4" fill="#c9a84c" opacity="1" />
              <circle cx="792" cy="486" r="3.5" fill="#c9a84c" opacity="0.9" />
              <circle cx="648" cy="320" r="3" fill="#c9a84c" opacity="0.8" />
              <circle cx="1080" cy="320" r="3" fill="#c9a84c" opacity="0.8" />
            </g>
            <circle cx="360" cy="320" r="12" fill="#c9a84c" opacity="0.1" filter="url(#glow)" />
            <circle cx="360" cy="320" r="20" fill="#c9a84c" opacity="0.05" filter="url(#glow)" />
            <circle cx="792" cy="320" r="12" fill="#c9a84c" opacity="0.1" filter="url(#glow)" />
            <circle cx="792" cy="320" r="20" fill="#c9a84c" opacity="0.05" filter="url(#glow)" />

            {/* Vertex dots across all rows */}
            <g fill="#c9a84c" opacity="0.5">
              <circle cx="72" cy="320" r="2" /><circle cx="144" cy="362" r="2" /><circle cx="144" cy="444" r="2" />
              <circle cx="72" cy="486" r="2.5" /><circle cx="0" cy="444" r="2" /><circle cx="0" cy="362" r="2" />
              <circle cx="216" cy="320" r="2" /><circle cx="288" cy="362" r="2" /><circle cx="288" cy="444" r="2" />
              <circle cx="432" cy="362" r="2" /><circle cx="432" cy="444" r="2" />
              <circle cx="504" cy="320" r="2" /><circle cx="576" cy="362" r="2" /><circle cx="576" cy="444" r="2" />
              <circle cx="720" cy="362" r="2" /><circle cx="720" cy="444" r="2" />
              <circle cx="864" cy="362" r="2" /><circle cx="864" cy="444" r="2" />
              <circle cx="936" cy="320" r="2" /><circle cx="1008" cy="362" r="2" /><circle cx="1008" cy="444" r="2" />
              <circle cx="1152" cy="362" r="2" /><circle cx="1152" cy="444" r="2" />
              <circle cx="1224" cy="320" r="2" /><circle cx="1296" cy="362" r="2" /><circle cx="1296" cy="444" r="2" />
              <circle cx="1368" cy="320" r="2" /><circle cx="1440" cy="362" r="2" /><circle cx="1440" cy="444" r="2" />
            </g>

            {/* Bottom gradient blend */}
            <defs>
              <linearGradient id="fadeBottom" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0a1628" stopOpacity="0" />
                <stop offset="100%" stopColor="#0a1628" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <rect width="1440" height="480" fill="url(#fadeBottom)" />
          </svg>
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
          <HeroContent />
        </div>
      </section>

      {/* ─── AWARDS / TRUST BADGES ─── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex gap-10">
              <div className="text-center">
                <Award size={48} className="mx-auto text-navy" strokeWidth={1.2} />
                <p className="mt-3 text-2xl font-bold text-navy">2025</p>
                <p className="text-sm font-semibold text-text-dark">Leading Firm<br />Nigeria</p>
              </div>
              <div className="text-center">
                <Award size={48} className="mx-auto text-navy" strokeWidth={1.2} />
                <p className="mt-3 text-2xl font-bold text-navy">2026</p>
                <p className="text-sm font-semibold text-text-dark">LexSuite<br />Legal-Tech Award</p>
              </div>
            </div>
            <div className="h-64 overflow-hidden rounded-2xl bg-grey-100">
              <div className="flex h-full items-center justify-center bg-navy/5 text-grey-400">
                <div className="text-center p-8">
                  <Building2 size={48} className="mx-auto text-grey-400" strokeWidth={1} />
                  <p className="mt-2 text-sm">Lagos skyline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL QUOTE (DARK) ─── */}
      <section className="relative bg-navy py-20">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <Award size={400} strokeWidth={0.5} className="text-white" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <div className="mb-6 flex items-center justify-center gap-3 text-gold/80">
            <Award size={20} />
            <span className="text-sm uppercase tracking-[0.3em]">Chambers &amp; Partners</span>
          </div>
          <blockquote className="text-2xl font-serif leading-relaxed text-white sm:text-3xl">
            &ldquo;The team have developed a deep understanding of our business operations
            and consistently deliver practical, commercially-aware advice.&rdquo;
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4 text-sm text-grey-400">
            <span className="font-semibold text-white">LexSuite</span>
            <span className="text-gold">|</span>
            <span>SME-focused Firms</span>
            <span className="text-gold">|</span>
            <span>Nigeria-wide</span>
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPOSITION ─── */}
      <section className="bg-off-white py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <ScrollReveal>
            <p className="text-xl leading-relaxed text-text-dark font-medium sm:text-2xl">
              You&apos;re looking for a commercial lawyer. You&apos;re a high-growth startup
              or an established business navigating Nigeria&apos;s digital economy.
              You need legal advice that understands both the law and the technology
              powering your products.
            </p>
            <p className="mt-6 text-xl leading-relaxed text-navy font-bold sm:text-2xl">
              Welcome. You&apos;ve come to the right place.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── ABOUT US ─── */}
      <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
        {/* Decorative gradient connector — visible on desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" aria-hidden />
        <div className="hidden lg:block absolute left-[45%] top-1/3 w-[15%] h-px bg-gradient-to-r from-gold/40 to-transparent" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* ── LEFT: TEXT ── */}
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.35em] font-semibold text-gold">
                About Us
              </p>
              <h2 className="mt-5 text-4xl font-bold text-navy sm:text-5xl lg:text-6xl leading-[1.1]">
                We Understand <br />
                <span className="text-gold">Code and Law.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-dark sm:text-lg max-w-xl">
                LexSuite is a Nigerian legal-tech law firm built for the digital
                economy. We speak both <strong>legal precedent</strong> and{" "}
                <strong>product roadmaps</strong> — helping startups, fintechs,
                and established businesses navigate regulation without slowing
                down innovation.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-dark sm:text-lg max-w-xl">
                From CAC registration to AI compliance, NDPA data protection to
                IP strategy, our solicitors combine deep regulatory knowledge
                with a practical understanding of how technology actually works.
              </p>

              {/* Decorative gradient underline */}
              <div className="mt-8 h-[3px] w-32 bg-gradient-to-r from-gold to-gold/20 rounded-full" />

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0d1a30]">
                  Learn More About Us
                  <span aria-hidden="true" className="text-gold">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* ── RIGHT: IMAGE ── */}
            <div className="relative">
              {/* Decorative bg element */}
              <div className="absolute -top-6 -right-6 h-72 w-72 rounded-full bg-gold/5 blur-3xl" aria-hidden />
              <div className="absolute -bottom-6 -left-6 h-48 w-48 rounded-full bg-navy/5 blur-2xl" aria-hidden />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/my-image.png"
                  alt="LexSuite Principal Partner"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-white px-5 py-3 shadow-lg border border-grey-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <Award size={24} className="text-gold" strokeWidth={1.5} />
                  <div className="text-left">
                    <p className="text-xs font-semibold text-navy">10+ Years</p>
                    <p className="text-[10px] text-grey-600">Combined Legal Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VIDEO / MEDIA ─── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy">
            <div className="absolute inset-0 flex items-center justify-center bg-navy/60">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/90 transition hover:scale-105 hover:bg-gold">
                <Play size={32} className="ml-1 text-navy" fill="#0a1628" />
              </div>
            </div>
            <div className="flex h-full items-center justify-center text-grey-600">
              <Image
                src="/og-image.svg"
                alt="Video placeholder"
                fill
                className="object-cover opacity-40"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Handshake, title: "Experienced", desc: "10+ years combined legal-tech practice" },
              { icon: Users, title: "Experts", desc: "Specialist solicitors across all practice areas" },
              { icon: Shield, title: "Trusted", desc: "50+ digital businesses represented" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                  <item.icon size={22} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg">{item.title}</h3>
                  <p className="mt-1 text-base text-text-dark">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES TIMELINE ─── */}
      <ServiceTimeline />

      {/* ─── PRACTICE AREA ICONS STRIP ─── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy">Responsive, Personal and Efficient</h2>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none">
            {practiceAreas.map((area) => (
              <div key={area.label} className="flex shrink-0 flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-grey-200 bg-white text-grey-400 transition hover:border-gold/50 hover:text-gold">
                  <area.icon size={26} />
                </div>
                <span className="whitespace-nowrap text-xs font-semibold text-text-dark">{area.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENT LOGOS ─── */}
      <section className="bg-off-white py-16">
        <ClientLogos />
      </section>

      {/* ─── TESTIMONIAL SECTION ─── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">We Understand</p>
            <h2 className="mt-4 text-4xl font-bold text-navy">We understand the challenges facing digital businesses.</h2>
          </div>
          <div className="mt-10">
            <TestimonialCarousel />
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0d1a30]">
              Contact Us
            </Link>
            <Link
              href="/about"
              className="inline-flex rounded-full border border-navy/20 px-7 py-3.5 text-sm font-semibold text-navy transition hover:bg-navy/5">
              See All Our Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="bg-off-white py-20">
        <TeamGrid />
      </section>

      {/* ─── BLOG / CASE STUDIES ─── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold">Insights</p>
              <h2 className="mt-3 text-3xl font-bold text-navy">Latest from LexSuite</h2>
            </div>
            <Link
              href="/blog"
              className="hidden text-sm font-semibold text-navy/60 transition hover:text-navy sm:inline-block">
              View all posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                variant="standard"
                image={post.coverImage}
                date={post.date}
                category={post.category}
                title={post.title}
                slug={post.slug}
              />
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link href="/blog" className="text-sm font-semibold text-navy">
              View all posts →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA ─── */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Contact Us</p>
            <h2 className="mt-4 text-4xl font-bold text-white">Ready to work with us?</h2>
            <p className="mt-4 text-lg text-grey-200 font-medium">
              Tell us about your legal challenge and we&apos;ll respond with a practical path forward.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition hover:brightness-95">
                Book a Free Consultation
              </Link>
              <Link
                href="mailto:hello@lexsuite.com.ng"
                className="inline-flex rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                hello@lexsuite.com.ng
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

