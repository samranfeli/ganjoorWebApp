import Skeleton from "../ui/skeleton";

export default function SearchListLoading({ quantity }: { quantity: number }) {
  return Array.from({ length: quantity }).map((_, index) => (
    <div
      key={index}
      className="py-5 border-b border-black/20 dark:border-white/20"
    >
      <div className="mb-3 flex items-center gap-2">
        <Skeleton className="block w-14 h-14 rounded-full grow-0" />
        <Skeleton className="w-1/2 h-4 max-w-52" />
      </div>
      <Skeleton className="w-1/2 max-w-44 h-4 mb-3 mr-7" />
      <Skeleton className="w-1/2 max-w-44 h-4 mb-3 mr-7" />
      <Skeleton className="w-1/2 max-w-44 h-4 mr-7" />
    </div>
  ));
}
