import { Cat } from "./cat";
import { Verse, GanjoorPoemSummary, PoemFormat } from "./poem";
import { PoetItem } from "./poet";
import { Recitation } from "./recitation";
import { Song } from "./song";

export interface GetPageByUrlResponse {
  title?: string;
  fullTitle?: string;
  ganjoorPageType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  poetOrCat?: {
    poet: PoetItem;
    cat: Cat;
  };

  id: number;
  urlSlug?: string;
  fullUrl?: string;
  htmlText?: string;
  noIndex: boolean;
  redirectFromFullUrl?: string;

  poem?: {
    id: number;
    title?: string;
    fullTitle?: string;
    urlSlug?: string;
    fullUrl?: string;
    plainText?: string;
    htmlText?: string;
    sourceName?: string;
    sourceUrlSlug?: string;
    oldTag?: string;
    oldTagPageUrl?: string;
    mixedModeOrder: number;
    published: boolean;
    language?: string;
    poemSummary?: string;
    category: {
      poet: PoetItem;
      cat: Cat;
    };
    next: GanjoorPoemSummary;
    previous: GanjoorPoemSummary;
    verses: Verse[];

    recitations: unknown; //todo type this Recitation[];
    images: unknown;//todo : type this
    songs: unknown; //todo type this Song[];
    sections?: {
      id: number;
      poemId: number;
      coupletsCount?: number;
      verseType: number;
      ganjoorMetreId: number;
      ganjoorMetre: {
        id: number;
        urlSlug?: string;
        rhythm?: string;
        verseCount: number;
      };
      poemFormat: PoemFormat;
    }[];
    sectionIndex?: number;
    comments: unknown; //todo type this Comment[];
  };
  next: {
    id: number;
    title?: string;
    fullUrl?: string;
  };
  previous: {
    id: number;
    title?: string;
    fullUrl?: string;
  };
}
