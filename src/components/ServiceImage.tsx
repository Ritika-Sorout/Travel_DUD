import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useRotatingIndex } from "@/hooks/use-rotating-index";
import { useState, type ReactNode } from "react";

interface ServiceImageProps {
  images: string[];
  alt: string;
  label?: string;
  to?: string;
  className?: string;
  intervalMs?: number;
  /** Optional overlay slot rendered above gradient. */
  overlay?: ReactNode;
  eager?: boolean;
}

/**
 * Reusable rotating, route-aware image card with hover tilt, gradient overlay,
 * skeleton, and lazy preload. Performance: only transforms/opacity animated.
 */
export function ServiceImage({
  images,
  alt,
  label,
  to,
  className = "",
  intervalMs = 4000,
  overlay,
  eager = false,
}: ServiceImageProps) {
  const index = useRotatingIndex(images.length, intervalMs);
  const [loaded, setLoaded] = useState(false);

  const Inner = (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={
        "group relative rounded-[20px] overflow-hidden shadow-[0_8px_28px_rgba(60,60,90,0.10)] bg-secondary " +
        className
      }
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-secondary to-secondary/60" />
      )}

      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover will-change-transform transition-transform duration-700 group-hover:scale-[1.06]"
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-80 group-hover:opacity-100 transition-opacity" />

      {overlay}

      {label && (
        <motion.div
          initial={{ y: 8, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-3 left-3 right-3 flex items-center justify-between"
        >
          <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-foreground/85 shadow-sm">
            {label}
          </span>
          {to && (
            <span className="rounded-full bg-foreground/85 text-background px-3 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all">
              Explore →
            </span>
          )}
        </motion.div>
      )}

      {/* Preload next image to avoid flicker */}
      {images.length > 1 && (
        <link
          rel="preload"
          as="image"
          href={images[(index + 1) % images.length]}
        />
      )}
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-[20px]">
        {Inner}
      </Link>
    );
  }
  return Inner;
}
