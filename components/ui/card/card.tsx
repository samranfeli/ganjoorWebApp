import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { cardVariants } from "./card-variants";

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({
  className,
  variant,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({ variant }),
        className
      )}
      {...props}
    />
  );
}