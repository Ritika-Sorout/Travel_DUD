import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import taxiIcon from "@/assets/icons/taxi.png";
import busIcon from "@/assets/icons/bus.png";
import flightIcon from "@/assets/icons/flight.png";
import autoIcon from "@/assets/icons/auto.png";
import hotelIcon from "@/assets/icons/hotel.png";
import bikeIcon from "@/assets/icons/bike.png";

export type BookingCategory =
  | "taxi"
  | "bus"
  | "flight"
  | "auto"
  | "hotel"
  | "bike";

const items: { id: BookingCategory; label: string; src: string }[] = [
  { id: "taxi", label: "Taxi", src: taxiIcon },
  { id: "bus", label: "Bus", src: busIcon },
  { id: "flight", label: "Flight", src: flightIcon },
  { id: "auto", label: "Auto", src: autoIcon },
  { id: "hotel", label: "Hotel", src: hotelIcon },
  { id: "bike", label: "Bike", src: bikeIcon },
];

interface FloatingSidebarProps {
  active?: BookingCategory;
  onChange?: (id: BookingCategory) => void;
}

export function FloatingSidebar({
  active: controlled,
  onChange,
}: FloatingSidebarProps) {
  const [internal, setInternal] = useState<BookingCategory>("bus");
  const navigate = useNavigate();
  const active = controlled ?? internal;

  const handleClick = (id: BookingCategory) => {
    setInternal(id);
    onChange?.(id);
    if (id === "hotel") {
      navigate({ to: "/hotels" });
    }
  };

  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden md:block">
      <div className="flex flex-col items-center gap-1 rounded-r-3xl bg-white/90 backdrop-blur-md border border-white shadow-[0_8px_30px_rgba(60,60,90,0.10)] py-3 px-2">
        {items.map(({ id, label, src }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => handleClick(id)}
              className="group relative flex flex-col items-center gap-0.5 px-1 py-1"
              aria-label={label}
            >
              <motion.span
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className={
                  "relative flex h-11 w-11 items-center justify-center rounded-2xl transition-all " +
                  (isActive
                    ? "bg-secondary shadow-[0_4px_14px_rgba(60,60,90,0.12)]"
                    : "bg-transparent group-hover:bg-secondary/60")
                }
              >
                <img
                  src={src}
                  alt={label}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                  loading="lazy"
                />
                {isActive && (
                  <motion.span
                    layoutId="sidebar-glow"
                    className="absolute inset-0 rounded-2xl ring-2 ring-foreground/10"
                    transition={{ type: "spring", damping: 22, stiffness: 220 }}
                  />
                )}
              </motion.span>
              <span
                className={
                  "text-[10px] font-medium transition-colors " +
                  (isActive ? "text-foreground" : "text-foreground/50")
                }
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
