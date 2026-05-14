import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedHeadlineProps {
  prefix?: string;
  suffix?: string;
  words?: string[];
  intervalMs?: number;
}

export function AnimatedHeadline({
  prefix = "Ride smarter where every trip feels",
  suffix = "....",
  words,
  intervalMs = 2000,
}: AnimatedHeadlineProps) {
  const list = useMemo(
    () => words ?? ["effortless", "efficient", "safer", "seamless", "stress-free"],
    [words],
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(
      () => setIndex((p) => (p + 1) % list.length),
      intervalMs,
    );
    return () => clearTimeout(id);
  }, [index, list, intervalMs]);

  return (
    <h1 className="text-[44px] md:text-[56px] lg:text-[64px] font-light leading-[1.05] tracking-tight text-foreground/90">
      {prefix}{" "}
      <span className="relative inline-block align-baseline">
        <AnimatePresence mode="wait">
          <motion.span
            key={list[index]}
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block italic font-normal text-foreground"
          >
            {list[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      {suffix}
    </h1>
  );
}
