import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedHeadline() {
  const [index, setIndex] = useState(0);
  const words = useMemo(
    () => ["smarter", "efficient", "stress-free", "seamless", "safer"],
    [],
  );

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearTimeout(id);
  }, [index, words]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center leading-tight">
      Travel{" "}
      <span className="relative inline-flex justify-center overflow-hidden h-[1.2em] w-[12rem] md:w-[16rem] align-bottom">
        {words.map((word, i) => (
          <motion.span
            key={word}
            className="absolute text-blue-600 font-extrabold"
            initial={{ opacity: 0, y: 60 }}
            animate={
              index === i
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: index > i ? -60 : 60 }
            }
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}
