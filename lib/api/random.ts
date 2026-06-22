import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import { Random } from "@/types/poem";

export const getRandomPoem = async() => {
  return apiClient<Random>(endpoints.random);
}
