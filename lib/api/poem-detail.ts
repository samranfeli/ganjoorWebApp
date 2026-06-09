import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import { GetPageByUrlResponse } from "@/types/page";
import { cache } from "react";

export const getPoemDetail = cache(async (url: string) => {
  return apiClient<GetPageByUrlResponse>(
    `${endpoints.pageByUrl}?url=${encodeURIComponent(url)}&catPoems=true`,
  );
});
