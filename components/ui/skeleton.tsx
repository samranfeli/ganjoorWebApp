import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded-md",
        "bg-[#efe4d4] dark:bg-[#1f1916]",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 animate-skeleton",
          "bg-linear-to-r",
          "from-transparent",
          "via-[#fff7ee]/70",
          "dark:via-[#d4b483]/10",
          "to-transparent",
        )}
      />
    </div>
  );
}