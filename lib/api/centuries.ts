import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import type { CenturyItem } from "@/types/century";

export function getCenturies() {
  return apiClient<CenturyItem[]>(endpoints.centuries);
}
