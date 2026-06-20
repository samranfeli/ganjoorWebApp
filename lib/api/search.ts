import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import { PoemSearchItem } from "@/types/poem";

export const search = async ({
  term,
  poetId,
  pageNumber,
  pageSize,
}: {
  term: string;
  poetId: number;
  pageNumber: number;
  pageSize: number;
}): Promise<PoemSearchItem[]> => {
  return apiClient<PoemSearchItem[]>(
    `${endpoints.search}?PageNumber=${pageNumber}&PageSize=${pageSize}&term=${term}&poetId=${poetId}&catId=0`,
  );
};
