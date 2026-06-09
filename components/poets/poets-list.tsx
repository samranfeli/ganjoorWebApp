import { cn } from "@/lib/utils";
import { PoetItem } from "@/types/poet";
import PoetItemLink from "./poet-item";

export default function PoetsList({
  poets,
  className,
  imagePriority
}: {
  poets: PoetItem[];
  className?: string;
  imagePriority?: boolean;
}) {
  return (
    <div className={cn("flex gap-3 flex-wrap justify-center", className)}>
      {poets?.map((poet, index) => (
        <PoetItemLink key={poet.id} poet={poet} imagePriority={imagePriority && index < 4} />
      ))}
    </div>
  );
}
