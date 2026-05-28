"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function HeroContent() {
  return (
    <motion.div
      className="max-w-3xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        className="mb-6 text-sm uppercase tracking-[0.35em] text-gold"
        variants={itemVariants}
      >
        Law meets technology. Precision meets progress.
      </motion.p>

      <motion.h1
        className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
        variants={itemVariants}
      >
        Where Law Meets Technology.
      </motion.h1>

      <motion.p
        className="mt-6 max-w-2xl text-lg text-grey-100 sm:text-xl"
        variants={itemVariants}
      >
        Nigeria&apos;s foremost legal-tech solicitors. We register, protect,
        and legally architect compliant digital businesses — from CAC to code.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-col gap-4 sm:flex-row"
        variants={itemVariants}
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition hover:brightness-95"
        >
          See what we do
        </Link>
        <Link
          href="/health-check"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
        >
          <Play size={16} fill="white" />
          Take the AI Health Check
        </Link>
      </motion.div>
    </motion.div>
  );
}
