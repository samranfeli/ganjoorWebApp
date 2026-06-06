import { PoetItem as PoetItemType } from "@/types/poet";
import PoetItem from "./poet-item";
import { cn } from "@/lib/utils";

export default function PoetsList({
  poets,
  className,
}: {
  poets: PoetItemType[];
  className?: string;
}) {
  return (
    <div className={cn("flex gap-3 flex-wrap justify-center", className)}>
      {poets?.map((poet) => (
        <PoetItem key={poet.id} poet={poet} />
      ))}
    </div>
  );
}
