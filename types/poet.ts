export interface PoetItem {
  id: number;
  name?: string;
  nickname?: string;
  imageUrl?: string;
  fullUrl: string;
}

export interface PoetDetail {
  poet: {
    birthPlace?: string;
    description?: string;
    imageUrl?: string;
    name?: string;
    nickname?: string;
    birthYearInLHijri?: number;
    deathYearInLHijri?: number;
  };
  cat: {
    description?: string;
    descriptionHtml?: string;
    tableOfContentsStyle?: number;
    poems?: unknown;
    children?: {
      fullUrl?: string;
      id: number;
      tableOfContentsStyle: number;
      title?: string;
      urlSlug?: string;
    }[];
  };
}
