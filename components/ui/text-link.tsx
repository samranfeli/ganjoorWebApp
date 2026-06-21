import Link from "next/link";
import { cn } from "@/lib/utils";

type TextLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  className?: string;
  children: React.ReactNode;
};

export function TextLink({ className, children, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn(
        "text-(--link) hover:text-(--link-hover) transition-colors outline-0",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
