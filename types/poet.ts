import { Cat } from "./cat";

export interface PoetItem {
  id: number;
  name?: string;
  nickname?: string;
  imageUrl?: string;
  fullUrl: string;
  description?: string;
  birthYearInLHijri: number;
  deathYearInLHijri: number;
}

export interface PoetDetail {
  poet: PoetItem;
  cat: Cat;
}
