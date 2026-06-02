"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

const directionVariants: Record<Direction, Record<string, number | string>> = {
  up: { opacity: 0, y: 40 },
  down: { opacity: 0, y: -40 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
  scale: { opacity: 0, scale: 0.92 },
  none: { opacity: 0 },
};

const visibleVariants: Record<Direction, Record<string, number | string>> = {
  up: { opacity: 1, y: 0 },
  down: { opacity: 1, y: 0 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1 },
  none: { opacity: 1 },
};

type Props = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  duration?: number;
  delay?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
};

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  duration = 0.6,
  delay = 0,
  distance,
  once = true,
  amount = 0.15,
}: Props) {
  const initial = { ...directionVariants[direction] };
  const whileInView = { ...visibleVariants[direction] };

  if (distance && (direction === "up" || direction === "down")) {
    initial.y = direction === "up" ? distance : -distance;
  }
  if (distance && (direction === "left" || direction === "right")) {
    initial.x = direction === "left" ? -distance : distance;
  }
  if (distance && direction === "scale") {
    initial.scale = 1 - distance / 200;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  amount?: number;
};

export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 0.08,
  once = true,
  amount = 0.1,
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}>
      <motion.div
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: staggerDelay } },
        }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
};

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: StaggerItemProps) {
  const hidden = { ...directionVariants[direction] };
  const visible = {
    ...visibleVariants[direction],
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  };

  return (
    <motion.div
      variants={{ hidden, visible }}
      className={className}>
      {children}
    </motion.div>
  );
}
