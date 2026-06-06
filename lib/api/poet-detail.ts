import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import { PoetDetail } from "@/types/poet";

export function getPoetDetail(url: string) {
  return apiClient<PoetDetail>(
    `${endpoints.poetByUrl}?url=${encodeURIComponent(url)}`,
  );
}
