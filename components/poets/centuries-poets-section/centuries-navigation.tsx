"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { CenturiesNavigationItem } from "@/types/century";

type Props = {
  items: CenturiesNavigationItem[];
};

export default function CenturyNavigation({ items }: Props) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const handleScroll = () => {
      let currentId = items[0]?.id;

      for (const item of items) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 50) {
          currentId = item.id;
        } else {
          break;
        }
      }

      if (currentId) {
        setActiveId((prev) => (prev === currentId ? prev : currentId));
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    setActiveId(id);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav aria-label="Century navigation" className="sticky top-10 opacity-80">
      <div className="flex flex-col items-end text-xs pt-3">
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item.id)}
              className="
                flex
                items-center
                gap-2
                py-2
                font-medium
                whitespace-nowrap
                outline-none
                cursor-pointer
              "
            >
              <span>{item.label}</span>

              <span className="flex size-4 items-center justify-center rounded-full border-2">
                <span
                  className={cn(
                    "size-2 rounded-full bg-current transition-opacity",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                />
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
