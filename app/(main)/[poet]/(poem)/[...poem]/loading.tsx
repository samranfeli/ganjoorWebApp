import Skeleton from "@/components/ui/Skeleton";
import { Fragment } from "react/jsx-runtime";

const LIST_ITEMS_COUNT = 10;

export default function Loading() {
  const listItems = Array.from({ length: LIST_ITEMS_COUNT });

  return (
    <div className="py-10 p-5 flex flex-col items-center mb-8">
      <Skeleton className="h-24 w-20 rounded-full mb-4" />

      <Skeleton className="h-6 w-1/2 md:w-1/4 mb-3" />
      <Skeleton className="h-4 w-1/3 md:w-1/5 mb-8" />

            <div className="w-full my-6 grid grid-cols-1 gap-x-16 gap-y-5 sm:grid-cols-2 max-w-2xl mx-auto">
              {[1,2,3,4,5,6].map((_, i) => (
                <Fragment
                  key={i}
                >
                  <div className="text-left">
                    <Skeleton className="h-4 w-3/4 inline-block" />
                  </div>
                  <div className="text-right">
                    <Skeleton className="h-4 w-3/5 inline-block" />
                  </div>
                  <div className="text-left">
                    <Skeleton className="h-4 w-3/5 inline-block" />
                  </div>
                  <div className="text-right">
                    <Skeleton className="h-4 w-3/4 inline-block" />
                  </div>
                </Fragment>
              ))}
            </div>
    </div>
  );
}
