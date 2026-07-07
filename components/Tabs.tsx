import { useState, type ReactNode } from "react";

export interface TabItem {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  ariaLabel: string;
}

/** Hand-rolled accessible tabs (replaces Chakra Tabs). */
export default function Tabs({ tabs, ariaLabel }: TabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="flex overflow-x-auto border-b"
        style={{ borderColor: "var(--surface-border)" }}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            role="tab"
            id={`tab-${index}`}
            aria-selected={active === index}
            aria-controls={`tabpanel-${index}`}
            onClick={() => setActive(index)}
            className="whitespace-nowrap px-5 py-3 font-semibold transition-colors duration-200"
            style={
              active === index
                ? { color: "var(--accent)", boxShadow: "inset 0 -2px 0 var(--accent)" }
                : { color: "var(--ink-muted)" }
            }
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
          hidden={active !== index}
          className="py-6"
        >
          {active === index && tab.content}
        </div>
      ))}
    </div>
  );
}
