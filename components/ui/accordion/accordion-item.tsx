"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";

export default function AccordionItem({
  title,
  content,
  initiallyOpen,
  className,
  contentClassName,
  buttonClassName,
}: {
  title: string;
  content: ReactNode;
  initiallyOpen?: boolean;
  className?: string;
  contentClassName?: string;
  buttonClassName?: string;
}) {
  const [open, setOpen] = useState(!!initiallyOpen);

  return (
    <div className={cn("overflow-hidden", className)}>
      <button
        type="button"
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        className={cn(
          "w-full flex gap-3 items-start justify-between cursor-pointer text-right outline-none",
          buttonClassName,
        )}
      >
        <span>{title}</span>

        <ChevronDown
          className={cn(
            "mt-0.5 w-5 h-5 transition-transform duration-300 shrink-0",
            open && "rotate-180",
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className={cn("text-justify",contentClassName)}>{content}</div>
        </div>
      </div>
    </div>
  );
}
