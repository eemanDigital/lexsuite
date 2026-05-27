import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../lib/mdx";
import { ScrollReveal } from "../components/ui/ScrollReveal";
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
      <section className="relative bg-navy text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/og-image.svg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-navy/80" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="mb-6 text-sm uppercase tracking-[0.35em] text-gold">
                Law meets technology. Precision meets progress.
              </p>
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                Where Law Meets Technology.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-grey-100 sm:text-xl">
                Nigeria&apos;s foremost legal-tech solicitors. We register, protect,
                and legally architect compliant digital businesses — from CAC to code.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition hover:brightness-95">
                  See what we do
                </Link>
                <Link
                  href="/health-check"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                  <Play size={16} fill="white" />
                  Take the AI Health Check
                </Link>
              </div>
            </div>
          </ScrollReveal>
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
                <p className="text-sm text-grey-600">Leading Firm<br />Nigeria</p>
              </div>
              <div className="text-center">
                <Award size={48} className="mx-auto text-navy" strokeWidth={1.2} />
                <p className="mt-3 text-2xl font-bold text-navy">2026</p>
                <p className="text-sm text-grey-600">LexSuite<br />Legal-Tech Award</p>
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
            <p className="text-lg leading-relaxed text-grey-600 sm:text-xl">
              You&apos;re looking for a commercial lawyer. You&apos;re a high-growth startup
              or an established business navigating Nigeria&apos;s digital economy.
              You need legal advice that understands both the law and the technology
              powering your products.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-navy font-semibold sm:text-xl">
              Welcome. You&apos;ve come to the right place.
            </p>
          </ScrollReveal>
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
                  <h3 className="font-semibold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm text-grey-600">{item.desc}</p>
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
                <span className="whitespace-nowrap text-xs font-medium text-grey-600">{area.label}</span>
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
            <p className="mt-4 text-grey-300">
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

