import { VariantProps } from "class-variance-authority";
import { headingVariants } from "./typography-variants";
import { cn } from "@/lib/utils";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

export function Heading({
  as: Comp = "h2",
  size,
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Comp className={cn(headingVariants({ size }), className)} {...props}>
      {children}
    </Comp>
  );
}
