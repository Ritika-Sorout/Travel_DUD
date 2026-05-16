import { Link } from "@tanstack/react-router";
import { Globe, LogIn } from "lucide-react";
import logo from "@/assets/dud-logo.png";
import { toast } from "sonner";

const navItems = [
  { label: "Home", to: "/", hash: false },
  { label: "About Us", to: "/#about", hash: true },
  { label: "Our Services", to: "/#services", hash: true },
  { label: "Blog", to: "/#blog", hash: true },
  { label: "Contact Us", to: "/#contact", hash: true },
];

export function Navbar() {
  return (
    <header className="w-full px-6 pt-5">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4">
        {/* Logo + wordmark */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="DUD"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="font-black text-xl tracking-tight text-foreground/90 hidden md:inline">
            DUD
          </span>
        </Link>

        {/* Center pill nav */}
        <nav className="flex items-center gap-1 rounded-full bg-white/90 backdrop-blur shadow-[0_2px_18px_rgba(60,60,90,0.06)] px-2 py-1.5 border border-white">
          {navItems.map((item) =>
            item.hash ? (
              <a
                key={item.label}
                href={item.to}
                className="px-4 py-1.5 text-[13px] font-medium text-foreground/70 hover:text-foreground rounded-full hover:bg-secondary/60 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to as "/"}
                className="px-4 py-1.5 text-[13px] font-medium text-foreground/70 hover:text-foreground rounded-full hover:bg-secondary/60 transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right utility actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Language"
            onClick={() => toast.info("Language switcher coming soon.")}
            className="h-9 w-9 rounded-full bg-white/90 border border-white shadow-[0_2px_18px_rgba(60,60,90,0.06)] flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
          >
            <Globe className="h-4 w-4" />
          </button>
          <Link
            to="/plans-pricing"
            className="h-9 px-4 rounded-full bg-white/90 border border-white shadow-[0_2px_18px_rgba(60,60,90,0.06)] text-[13px] font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center"
          >
            See all plans
          </Link>
          <button
            type="button"
            onClick={() => toast.info("Login & Signup coming soon.")}
            className="h-9 px-4 rounded-full bg-white/90 border border-white shadow-[0_2px_18px_rgba(60,60,90,0.06)] text-[13px] font-medium text-foreground/80 hover:text-foreground transition-colors inline-flex items-center gap-1.5"
          >
            <LogIn className="h-3.5 w-3.5" />
            Login & Signup
          </button>
        </div>
      </div>
    </header>
  );
}
