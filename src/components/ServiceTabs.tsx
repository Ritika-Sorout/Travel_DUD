import { useState } from "react";

type TabId = "flights" | "cab" | "bike" | "hotels";

const TABS: { id: TabId; label: string; emoji: string; disabled: boolean }[] = [
  { id: "flights", label: "Flights", emoji: "✈️", disabled: true },
  { id: "cab", label: "Cab", emoji: "🚕", disabled: true },
  { id: "bike", label: "Bike", emoji: "🏍️", disabled: true },
  { id: "hotels", label: "Hotels", emoji: "🏨", disabled: false },
];

export function ServiceTabs() {
  const [active, setActive] = useState<TabId>("hotels");

  const activeTab = TABS.find((t) => t.id === active)!;

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 rounded-2xl bg-white/80 backdrop-blur p-2 shadow-md">
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={
                "flex flex-col items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors cursor-pointer " +
                (isActive
                  ? "bg-blue-600 text-white"
                  : "bg-transparent text-gray-500 hover:bg-gray-100")
              }
            >
              <span>
                <span className="mr-1">{tab.emoji}</span>
                {tab.label}
              </span>
              {isActive && tab.disabled && (
                <span className="animate-pulse bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full">
                  Coming Soon 🚧
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="min-h-[200px] bg-white rounded-2xl shadow-md p-6 mt-2">
        {activeTab.disabled ? (
          <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
            <div className="text-6xl">{activeTab.emoji}</div>
            <h3 className="text-2xl font-bold text-gray-800">Coming Soon</h3>
            <p className="text-gray-500">
              We're building this — check back soon!
            </p>
            <span className="animate-pulse bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full">
              In Development 🚧
            </span>
          </div>
        ) : (
          <div className="text-gray-500">Hotels form loads here</div>
        )}
      </div>
    </div>
  );
}
