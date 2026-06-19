"use client";

import { useDeferredValue, useMemo, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import PoetsList from "@/components/poets/poets-list";

import { queryKeys } from "@/lib/query/query-keys";
import { getPoets } from "@/lib/api/poets";
import { SectionHeading } from "../ui/typography/section-heading";
import Heading from "../ui/typography/heading";
import Input from "../ui/input";

function normalizeText(text: string) {
  return text.replace(/ي/g, "ی").replace(/ك/g, "ک").trim().toLowerCase();
}

export default function PoetFilterSection() {
  const [filter, setFilter] = useState("");

  const deferredFilter = useDeferredValue(filter);

  const {
    data: poets = [],
    isError,
  } = useQuery({
    queryKey: queryKeys.allPoets,
    queryFn: getPoets,
    staleTime: Infinity,
  });

  const filteredPoets = useMemo(() => {
    const normalizedFilter = normalizeText(deferredFilter);

    if (normalizedFilter.length < 2) {
      return [];
    }

    return poets.filter((poet) =>
      normalizeText(poet.name ?? "").includes(normalizedFilter),
    );
  }, [poets, deferredFilter]);

  const hasSearch = deferredFilter.trim().length >= 2;

  if (isError) {
    return null;
  }

  return (
    <section className="space-y-6 pb-5">
      <SectionHeading>
        <Heading as="h2" size="lg">
          جستجوی سخنور
        </Heading>
      </SectionHeading>

      <div className="mx-auto max-w-md">
        <Input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="نام شاعر را وارد کنید..."
        />
      </div>

      {!!poets.length && hasSearch && (
        <>
          {filteredPoets.length > 0 ? (
            <PoetsList poets={filteredPoets} />
          ) : (
            <p className="text-center text-sm text-muted-foreground">
              سخنوری پیدا نشد.
            </p>
          )}
        </>
      )}
    </section>
  );
}
