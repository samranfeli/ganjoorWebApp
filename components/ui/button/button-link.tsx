import Link from "next/link";
import { VariantProps } from "class-variance-authority";

import { buttonVariants } from "./button-variants";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  className?: string;
} & VariantProps<typeof buttonVariants>;

export function ButtonLink({
  href,
  className,
  variant,
  size,
  children,
}: React.PropsWithChildren<ButtonLinkProps>) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className,
      )}
    >
      {children}
    </Link>
  );
}