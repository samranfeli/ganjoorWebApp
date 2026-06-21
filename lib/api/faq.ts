import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import { FaqCategory, FaqItem } from "@/types/faq";

export const getFaqCategories = async() => {
  return apiClient<FaqCategory[]>(endpoints.faq.categories);
}

export const getFaqItems = async (catId: number) => {
  return apiClient<FaqItem[]>(
    `${endpoints.faq.items}?catId=${catId}`,
  );
};
