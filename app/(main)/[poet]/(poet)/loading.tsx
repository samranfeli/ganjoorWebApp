import Skeleton from "@/components/ui/skeleton";

const LIST_ITEMS_COUNT = 5;
const BUTTONS_COUNT = 3;

export default function Loading() {
  const listItems = Array.from({ length: LIST_ITEMS_COUNT });
  const buttons = Array.from({ length: BUTTONS_COUNT });

  return (
    <div className="py-10 p-5 flex flex-col items-center mb-8">
      <Skeleton className="h-24 w-20 rounded-full mb-4" />

      <Skeleton className="h-6 w-1/2 md:w-1/4 mb-3" />
      <Skeleton className="h-4 w-1/3 md:w-1/5 mb-8" />

      <div className="w-full max-w-2xl space-y-3 mb-10">
        {listItems.map((_, i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
        <Skeleton className="h-4 w-1/3" />
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        {buttons.map((_, i) => (
          <Skeleton key={i} className="h-10 w-40 rounded-b-md" />
        ))}
      </div>
    </div>
  );
}
