"use client";

import RandomCouplet from "@/components/random/random-couplet";
import { Button } from "@/components/ui/button";
import Skeleton from "@/components/ui/skeleton";
import { TextLink } from "@/components/ui/text-link";
import { Text } from "@/components/ui/typography/text";
import { getRandomPoem } from "@/lib/api/random";
import { groupCouplets } from "@/lib/poems/group-couplets";
import { queryKeys } from "@/lib/query/query-keys";
import { cn } from "@/lib/utils";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AlertTriangle, RefreshCcw, RefreshCw } from "lucide-react";

export default function RandomPoem() {
  const queryClient = useQueryClient();

  const {
    data: poem,
    isError,
    isFetching,
  } = useQuery({
    queryKey: queryKeys.random,
    queryFn: getRandomPoem,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const couplets = poem?.verses ? groupCouplets(poem.verses) : [];

  if (isError) {
    return (
      <>
        <AlertTriangle className="w-10 h-10" />
        خطا در دریافت بیت تصادفی
      </>
    );
  }

  const poetName = poem?.fullTitle?.split("»")[0]?.trim() ?? "";
  const poemUrl = poem?.fullUrl;

  return (
    <>
      <div />
      <div className="text-center space-y-16 mb-10 self-stretch">
        {isFetching ? (
          <Skeleton className="w-32 h-6 mx-auto" />
        ) : (
          <TextLink
            href={poemUrl || "#"}
            className="inline-block text-lg font-semibold"
          >
            {poetName}
          </TextLink>
        )}

        {isFetching ? (
          <div className="flex flex-col lg:flex-row gap-x-10 gap-y-5 justify-center w-full">
            <Skeleton className="w-2/3 lg:w-1/3 h-5" />
            <Skeleton className="w-2/3 lg:w-1/3 h-5 self-end" />
          </div>
        ) : (
          <RandomCouplet couplets={couplets} />
        )}
      </div>

      <div className="space-y-3 text-center">
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            queryClient.invalidateQueries({
              queryKey: queryKeys.random,
            });
          }}
        >
          بیتی دیگر
          <RefreshCw
            className={cn("w-4 h-4", { "animate-spin": isFetching })}
          />
        </Button>

        <Text>برای مطالعهٔ متن کامل شعر روی نام سخنور بزنید.</Text>
      </div>
    </>
  );
}
