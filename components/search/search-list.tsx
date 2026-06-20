"use client";
/* 
import { search } from "@/lib/api/search";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SearchListItem from "./search-list-item";
import { Text } from "../ui/typography/text";
import { AlertTriangle } from "lucide-react";
import SearchListLoading from "./search-list-loading";
import { queryKeys } from "@/lib/query/query-keys"; */

export default function SearchList(
/*   {
  term,
  poetId,
}: {
  term: string;
  poetId: number;
} */
) {
  //const { ref, inView } = useInView();

  //const PAGE_SIZE = 10;

/*   const {
    isError,
    isPending,
    error,
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: queryKeys.search(term, poetId),
    initialPageParam: 1,
    queryFn: async ({ pageParam }) => {
      const res = await search({
        term,
        poetId,
        pageNumber: pageParam,
        pageSize: PAGE_SIZE,
      });

      return {
        data: res,
        nextPage: res.length === PAGE_SIZE ? pageParam + 1 : null,
      };
    },

    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if(isError){
    return(
      <Text className="text-red-600 text-center py-10">
        <AlertTriangle className="inline-block ml-2" size={20} />
        {error?.message || "متاسفانه این جستجو با خطا مواجه شد!"}
      </Text>
    )
  }

  if(isPending){
    return(<SearchListLoading quantity={5} />)
  }

  let loading = null;

  if (isFetchingNextPage) {
    loading = <SearchListLoading quantity={2} />;

  } */
  return (
    <div>
      در حال توسعه

{/*       {data?.pages.map((page, i) => (
        <div key={i}>
          {page.data.map((item) => (
            <SearchListItem key={item.fullUrl} item={item} term={term} />
          ))}
        </div>
      ))}

      {loading}
      <div ref={ref} />
 */}
    </div>
  );
}
