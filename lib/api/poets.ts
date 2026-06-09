import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import { PoetItem } from "@/types/poet";
import { cache } from "react";

export const getPoets = cache(async() => {
  return apiClient<PoetItem[]>(endpoints.poets);
})
