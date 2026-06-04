import * as React from "react";
import { type VariantProps } from "class-variance-authority";

import { buttonVariants } from "./button-variants";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}
