import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ServiceTabs } from "@/components/ServiceTabs";

export const Route = createFileRoute("/hotels")({
  head: () => ({
    meta: [
      { title: "Hotels — DUD Travel" },
      {
        name: "description",
        content:
          "Search and book hotels across India with flexible rooms, dates, and room types on DUD Travel.",
      },
      { property: "og:title", content: "Hotels — DUD Travel" },
      {
        property: "og:description",
        content: "Search and book hotels across India on DUD Travel.",
      },
    ],
  }),
  component: HotelsPage,
});

function HotelsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-10">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-light text-foreground/90">
            Find your next stay
          </h1>
          <p className="mt-2 text-sm text-foreground/60 max-w-xl">
            Compare rooms, dates, and room types across destinations — all in
            one quick form.
          </p>
        </header>
        <ServiceTabs />
      </main>
    </div>
  );
}
