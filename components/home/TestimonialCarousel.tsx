"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "./Testimonial";

const items = [
  {
    quote:
      "LexSuite helped us understand AI risk and rewrote our vendor agreements — they are practitioners who understand engineering.",
    author: "Adaobi Chukwu, CTO — FinPay",
    meta: "Client since 2025",
  },
  {
    quote:
      "Their NDPA audit made compliance simple and practical for our product team.",
    author: "Tunji Adebayo, Founder — StoreNow",
    meta: "Client since 2024",
  },
  {
    quote:
      "Fast, commercial and technically literate advice — exactly what we needed for our seed round.",
    author: "Ifeoma Okeke, COO — PayBridge",
    meta: "Client since 2023",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mx-auto max-w-4xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45 }}>
          <Testimonial {...items[index]} />
        </motion.div>
      </AnimatePresence>
      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-navy" : "w-2 bg-grey-300"}`}
            aria-label={`Show testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
