import Eslimi from "../ornaments/eslimi";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <Eslimi className="h-5 md:h-7 w-auto fill-current scale-x-[-1] opacity-30" />

      <div className="shrink-0 max-w-full text-center">{children}</div>

      <Eslimi className="h-5 md:h-7 w-auto fill-current opacity-30" />
    </div>
  );
}
