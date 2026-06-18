"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Input from "../ui/input";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/query/query-keys";
import { getPoets } from "@/lib/api/poets";
import Select from "../ui/select";
import Skeleton from "../ui/skeleton";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

export function SearchForm({
  onSuccess,
  wrapperClassName,
}: {
  onSuccess?: () => void;
  wrapperClassName?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data: poets = [], isLoading } = useQuery({
    queryKey: queryKeys.allPoets,
    queryFn: getPoets,
    staleTime: Infinity,
  });

  function handleSubmit(formData: FormData) {
    const params = new URLSearchParams();

    params.set("s", String(formData.get("text") ?? ""));

    params.set("author", String(formData.get("author") ?? "all"));

    onSuccess?.();

    router.push(`/search?${params}`);
  }

  const initialText = searchParams.get("s") ?? "";
  const initialAuthor = searchParams.get("author") ?? "0";

  const poetOptions = useMemo(
    () => [
      { value: "0", label: "در آثار همه سخنوران" },
      ...poets
        ?.filter((p) => p.id)
        .map((poet) => ({
          label: poet.nickname || "",
          value: poet.id.toString(),
        })),
    ],
    [poets],
  );

  return (
    <form
      action={handleSubmit}
      className={cn(
        "grid grid-cols-1 sm:grid-cols-5 gap-5 text-sm",
        wrapperClassName,
      )}
    >
      <Input
        defaultValue={initialText}
        name="text"
        className="sm:col-span-2"
        placeholder="جستجو"
      />

      {isLoading ? (
        <Skeleton className="sm:col-span-2 h-10 rounded-lg border border-black/20 dark:border-white/20" />
      ) : poets.length ? (
        <Select
          defaultValue={initialAuthor}
          name="author"
          className="sm:col-span-2"
          options={poetOptions}
        />
      ) : null}
      <Button type="submit" variant="primary">
        جستجو
      </Button>
    </form>
  );
}
