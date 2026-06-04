import { cva } from "class-variance-authority";

export const cardVariants = cva(
  [
    "rounded-lg",
    "border",
    "transition-colors",
    "shadow-xs",
    "p-4",
  ],
  {
    variants: {
      variant: {
        white: [
          "bg-[var(--card-white-bg)]",
          "border-[var(--card-white-border)]",
          "text-[var(--card-white-foreground)]",
        ],

        gray: [
          "bg-[var(--card-gray-bg)]",
          "border-[var(--card-gray-border)]",
          "text-[var(--card-gray-foreground)]",
        ],

        purple: [
          "bg-[var(--card-purple-bg)]",
          "border-[var(--card-purple-border)]",
          "text-[var(--card-purple-foreground)]",
        ],

        rose: [
          "bg-[var(--card-rose-bg)]",
          "border-[var(--card-rose-border)]",
          "text-[var(--card-rose-foreground)]",
        ],

        gold: [
          "bg-[var(--card-gold-bg)]",
          "border-[var(--card-gold-border)]",
          "text-[var(--card-gold-foreground)]",
        ],
      },
    },

    defaultVariants: {
      variant: "white",
    },
  }
);