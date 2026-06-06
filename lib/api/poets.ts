import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import { PoetItem } from "@/types/poet";

export function getPoets() {
  return apiClient<PoetItem[]>(endpoints.poets);
}
