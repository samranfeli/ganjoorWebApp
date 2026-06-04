import { cn } from "@/lib/utils";
import { textVariants } from "./typography-variants";
import { VariantProps } from "class-variance-authority";

type TextProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariants>;

export function Text({
  size,
  tone,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        textVariants({ size, tone }),
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}