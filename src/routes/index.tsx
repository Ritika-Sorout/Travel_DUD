import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { ServiceTabs } from "@/components/ServiceTabs";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <section className="flex flex-col items-center gap-3 py-12">
          <AnimatedHeadline />
          <p className="text-lg text-gray-500 text-center mt-3">
            Every trip, effortlessly planned.
          </p>
        </section>
        <section className="mt-8">
          <ServiceTabs />
        </section>
      </main>
    </div>
  );
}
