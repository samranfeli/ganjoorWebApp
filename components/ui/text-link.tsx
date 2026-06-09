import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

type TextLinkProps = LinkProps & {
  className?: string;
  children: React.ReactNode;
};

export function TextLink({ className, children, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn(
        "text-(--link) hover:text-(--link-hover) transition-colors",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
