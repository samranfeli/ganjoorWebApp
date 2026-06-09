import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import { PoetDetail } from "@/types/poet";
import { cache } from "react";

export const getPoetDetail = cache(
  async (url: string): Promise<PoetDetail> => {
    return apiClient<PoetDetail>(
      `${endpoints.poetByUrl}?url=${encodeURIComponent(url)}`
    );
  }
);