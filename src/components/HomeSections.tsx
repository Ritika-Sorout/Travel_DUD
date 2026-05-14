import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const SERVICE_IMAGES = {
  forest:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
  taxi: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=900&q=80",
  auto: "https://images.unsplash.com/photo-1599054735388-bcb07bdd3574?auto=format&fit=crop&w=900&q=80",
  hotelBuilding:
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
  bus: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80",
  flight:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  bike: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
  mountainCabin:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
  hotelGlass:
    "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=900&q=80",
  trekker:
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=900&q=80",
};

interface PricingPlan {
  name: string;
  desc: string;
  price: string;
  badge?: string;
  popular?: boolean;
  offers: string[];
}

const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    desc: "A great solution for city people.",
    price: "₹69",
    badge: "45% off",
    offers: [
      "15 km per day",
      "instant booking confirmation",
      "no hidden charges",
      "child seat available",
    ],
  },
  {
    name: "Basic",
    desc: "Perfect for regular bookings and short trips.",
    price: "₹99",
    badge: "55% off",
    popular: true,
    offers: [
      "15 km per day",
      "instant booking confirmation",
      "no hidden charges",
      "child seat available",
    ],
  },
  {
    name: "Standard",
    desc: "Best for frequent riders with added benefits.",
    price: "₹169",
    badge: "75% off",
    offers: [
      "15 km per day",
      "instant booking confirmation",
      "no hidden charges",
      "child seat available",
    ],
  },
  {
    name: "Premium",
    desc: "Premium ride comfort with priority booking perks.",
    price: "₹269",
    badge: "85% off",
    offers: [
      "15 km per day",
      "instant booking confirmation",
      "no hidden charges",
      "child seat available",
    ],
  },
];

function SectionEyebrow({ children }: { children: string }) {
  return (
    <h2 className="inline-block border-b border-foreground/80 pb-1 text-sm font-medium text-foreground/90">
      {children}
    </h2>
  );
}

export function OurServicesSection() {
  return (
    <section className="mt-20">
      <SectionEyebrow>Our Services</SectionEyebrow>
      <h3 className="mt-6 text-3xl md:text-4xl font-light text-foreground/85">
        Travel Solutions for Every Journey<span className="opacity-60">.....</span>
      </h3>

      <div className="mt-8 grid grid-cols-12 gap-4">
        {/* Row 1 */}
        <ServiceImage
          src={SERVICE_IMAGES.forest}
          alt="Forest road"
          className="col-span-12 sm:col-span-6 md:col-span-3 h-[180px] md:h-[200px] row-span-1"
        />
        <ServiceImage
          src={SERVICE_IMAGES.taxi}
          alt="Taxi"
          className="col-span-12 sm:col-span-6 md:col-span-3 h-[180px] md:h-[200px]"
        />
        <ServiceImage
          src={SERVICE_IMAGES.auto}
          alt="Auto rickshaws"
          className="col-span-12 sm:col-span-6 md:col-span-3 h-[180px] md:h-[200px]"
        />
        <ServiceImage
          src={SERVICE_IMAGES.hotelBuilding}
          alt="Hotel building"
          className="col-span-12 sm:col-span-6 md:col-span-3 h-[180px] md:h-[200px]"
        />

        {/* Row 2 */}
        <ServiceImage
          src={SERVICE_IMAGES.bus}
          alt="Vintage bus"
          className="col-span-12 md:col-span-5 h-[200px] md:h-[240px]"
        />
        <ServiceImage
          src={SERVICE_IMAGES.flight}
          alt="Airplane on runway"
          className="col-span-12 md:col-span-4 h-[200px] md:h-[240px]"
        />
        <ServiceImage
          src={SERVICE_IMAGES.bike}
          alt="Bike delivery"
          className="col-span-12 md:col-span-3 h-[200px] md:h-[240px]"
        />
      </div>
    </section>
  );
}

function ServiceImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className={"rounded-[20px] overflow-hidden shadow-[0_6px_24px_rgba(60,60,90,0.10)] " + className}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
}

export function WhatWeOfferSection() {
  return (
    <section className="mt-20">
      <SectionEyebrow>What we Offer</SectionEyebrow>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        <h3 className="lg:col-span-7 text-3xl md:text-4xl font-light text-foreground/85 leading-tight">
          Book taxis, buses, flights, hotels, and more
        </h3>
        <p className="lg:col-span-5 text-sm text-foreground/55 leading-relaxed max-w-md">
          Explore seamless booking services for every journey from daily rides
          to long-distance travel, all in one convenient platform.
        </p>
      </div>

      <div className="mt-5">
        <button
          type="button"
          className="rounded-full bg-white border border-foreground/10 px-5 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-colors"
        >
          Book a ride
        </button>
      </div>

      <div className="mt-6 grid grid-cols-12 gap-4 items-end">
        <motion.div
          whileHover={{ y: -3 }}
          className="col-span-12 sm:col-span-6 md:col-span-4 rounded-[24px] overflow-hidden shadow-[0_8px_28px_rgba(60,60,90,0.10)]"
        >
          <img
            src={SERVICE_IMAGES.mountainCabin}
            alt="Mountain cabin"
            loading="lazy"
            className="h-[260px] w-full object-cover"
          />
        </motion.div>
        <Link
          to="/hotels"
          className="col-span-12 sm:col-span-6 md:col-span-3 relative group rounded-[24px] overflow-hidden shadow-[0_8px_28px_rgba(60,60,90,0.10)]"
        >
          <img
            src={SERVICE_IMAGES.hotelGlass}
            alt="Hotels"
            loading="lazy"
            className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-xs font-medium text-foreground/80">
            Hotels →
          </span>
        </Link>
        <motion.div
          whileHover={{ y: -3 }}
          className="col-span-12 md:col-span-5 rounded-[24px] overflow-hidden shadow-[0_8px_28px_rgba(60,60,90,0.10)]"
        >
          <img
            src={SERVICE_IMAGES.trekker}
            alt="Trekker overlooking mountains"
            loading="lazy"
            className="h-[300px] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section className="mt-20">
      <SectionEyebrow>Plans &amp; Pricing</SectionEyebrow>
      <h3 className="mt-6 text-3xl md:text-4xl font-light text-foreground/85">
        Pick the plan for your ride...{" "}
        <span className="font-medium">!!</span>
      </h3>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRICING_PLANS.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="rounded-[20px] bg-white shadow-[0_8px_28px_rgba(60,60,90,0.08)] p-5 flex flex-col relative"
    >
      {plan.popular && (
        <p className="text-xs text-foreground/50 mb-1">Most Popular</p>
      )}
      {plan.badge && (
        <span className="absolute top-4 right-4 text-[10px] bg-secondary/80 text-foreground/70 rounded-full px-2 py-0.5">
          {plan.badge}
        </span>
      )}

      <h4 className="text-base font-semibold text-foreground/90">{plan.name}</h4>
      <p className="mt-1 text-xs text-foreground/55 leading-relaxed">
        {plan.desc}
      </p>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-light text-foreground">{plan.price}</span>
        <span className="text-xs text-foreground/50">/mo</span>
      </div>

      <button
        type="button"
        className={
          "mt-4 w-full rounded-full py-2 text-sm font-medium transition-colors " +
          (plan.popular
            ? "bg-foreground text-background hover:bg-foreground/90"
            : "bg-white border border-foreground/15 text-foreground/80 hover:border-foreground/40")
        }
      >
        check all plans
      </button>

      <p className="mt-3 text-[10px] text-foreground/45 leading-snug">
        get 48 months for ₹3,325 (renew at anytime regular price)
      </p>

      <div className="mt-4 border-t border-foreground/10 pt-3">
        <p className="text-[11px] font-medium text-foreground/70 mb-2">offers</p>
        <ul className="space-y-1.5">
          {plan.offers.map((o) => (
            <li
              key={o}
              className="flex items-start gap-1.5 text-[11px] text-foreground/65"
            >
              <Check className="h-3 w-3 mt-0.5 text-foreground/50 shrink-0" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

const QR_PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
      <rect width='100' height='100' fill='white'/>
      ${Array.from({ length: 100 })
        .map(() => {
          const x = Math.floor(Math.random() * 20) * 5;
          const y = Math.floor(Math.random() * 20) * 5;
          return `<rect x='${x}' y='${y}' width='5' height='5' fill='black'/>`;
        })
        .join("")}
      <rect x='0' y='0' width='25' height='25' fill='white' stroke='black' stroke-width='5'/>
      <rect x='75' y='0' width='25' height='25' fill='white' stroke='black' stroke-width='5'/>
      <rect x='0' y='75' width='25' height='25' fill='white' stroke='black' stroke-width='5'/>
      <rect x='8' y='8' width='9' height='9' fill='black'/>
      <rect x='83' y='8' width='9' height='9' fill='black'/>
      <rect x='8' y='83' width='9' height='9' fill='black'/>
    </svg>`,
  );

const QR_CARDS = [
  { title: "Download the app", subtitle: "Scan to download" },
  { title: "Download the Driver app", subtitle: "Scan to download" },
  { title: "Download the Bike pooling driver app", subtitle: "Scan to download" },
];

export function QrDownloadSection() {
  return (
    <section className="mt-20 mb-12">
      <SectionEyebrow>It&apos;s Easier in the app</SectionEyebrow>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {QR_CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-[20px] bg-white shadow-[0_8px_28px_rgba(60,60,90,0.08)] p-4 flex items-center gap-4"
          >
            <img
              src={QR_PLACEHOLDER}
              alt="QR code"
              loading="lazy"
              className="h-20 w-20 rounded-md"
            />
            <div className="flex flex-col">
              <p className="text-sm font-medium text-foreground/85">
                {card.title}
              </p>
              <p className="text-xs text-foreground/50 mt-1">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
