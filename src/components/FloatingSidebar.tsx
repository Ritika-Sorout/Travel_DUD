import { useState } from "react";
import { motion } from "framer-motion";
import { Car, Bus, Plane, Bike, Hotel, CarTaxiFront } from "lucide-react";

export type BookingCategory =
  | "taxi"
  | "bus"
  | "flight"
  | "auto"
  | "hotel"
  | "bike";

const items: { id: BookingCategory; label: string; Icon: typeof Car }[] = [
  { id: "taxi", label: "Taxi", Icon: CarTaxiFront },
  { id: "bus", label: "Bus", Icon: Bus },
  { id: "flight", label: "Flight", Icon: Plane },
  { id: "auto", label: "Auto", Icon: Car },
  { id: "hotel", label: "Hotel", Icon: Hotel },
  { id: "bike", label: "Bike", Icon: Bike },
];

interface FloatingSidebarProps {
  active?: BookingCategory;
  onChange?: (id: BookingCategory) => void;
}

export function FloatingSidebar({
  active: controlled,
  onChange,
}: FloatingSidebarProps) {
  const [internal, setInternal] = useState<BookingCategory>("taxi");
  const active = controlled ?? internal;

  const handleClick = (id: BookingCategory) => {
    setInternal(id);
    onChange?.(id);
  };

  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden md:block">
      <div className="flex flex-col items-center gap-2 rounded-r-3xl bg-white/85 backdrop-blur-md border border-white shadow-[0_8px_30px_rgba(60,60,90,0.10)] py-3 px-2">
        {items.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => handleClick(id)}
              className="group relative flex flex-col items-center gap-0.5 px-1.5 py-1.5"
              aria-label={label}
            >
              <motion.span
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className={
                  "relative flex h-10 w-10 items-center justify-center rounded-xl transition-all " +
                  (isActive
                    ? "bg-foreground text-background shadow-[0_6px_20px_rgba(60,60,90,0.25)]"
                    : "bg-secondary/70 text-foreground/70 group-hover:bg-secondary")
                }
              >
                <Icon className="h-5 w-5" strokeWidth={1.6} />
                {isActive && (
                  <motion.span
                    layoutId="sidebar-glow"
                    className="absolute inset-0 rounded-xl ring-2 ring-foreground/10"
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
