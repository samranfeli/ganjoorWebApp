import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex gap-1 items-center justify-center",
    "rounded-lg",
    "font-medium",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "cursor-pointer",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "leading-4",
  ],
  {
    variants: {
      variant: {
        primary: "bg-[#B48A4D] text-white hover:bg-[#9F7740]",

        secondary: "bg-[#5D7153] text-white hover:bg-[#4D6045]",

        accent: "bg-[#BF3F2A] text-white hover:bg-[#A63624]",

        outline: "border border-[#D6C7B3] text-[#2F241D] hover:bg-[#F3EBDD]",

        ghost: "text-[#6D4C3D]",

        destructive: "bg-[#C93C2A] text-white hover:bg-[#AF3425]",
      },

      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg",
        icon: "h-10 w-10",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
