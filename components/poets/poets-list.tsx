import { PoetItem as PoetItemType } from "@/types/poet";
import PoetItem from "./poet-item";
import { cn } from "@/lib/utils";

export default function PoetsList({
  poets,
  className,
  imagePriority
}: {
  poets: PoetItemType[];
  className?: string;
  imagePriority?: boolean;
}) {
  return (
    <div className={cn("flex gap-3 flex-wrap justify-center", className)}>
      {poets?.map((poet, index) => (
        <PoetItem key={poet.id} poet={poet} imagePriority={imagePriority && index < 4} />
      ))}
    </div>
  );
}
