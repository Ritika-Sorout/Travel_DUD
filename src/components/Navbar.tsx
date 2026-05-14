import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="font-black text-2xl tracking-tight text-foreground">
          DUD
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            to="/"
            activeProps={{ className: "font-semibold text-foreground" }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            to="/plans-pricing"
            activeProps={{ className: "font-semibold text-foreground" }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Plans & Pricing
          </Link>
        </div>
      </nav>
    </header>
  );
}
