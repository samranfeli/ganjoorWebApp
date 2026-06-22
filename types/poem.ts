import { Cat } from "./cat";
import { PoetItem } from "./poet";

export interface Verse {
  coupletIndex?: number;
  coupletSummary?: string;
  id: number;
  text?: string;
  vOrder: number;
  versePosition: 0 | 1 | 2 | 3 | 4 | 5 | -1;
}

export type Couplet = [Verse, ...Verse[]];

export interface GanjoorPoemSummary {
  id: number;
  title?: string;
  urlSlug?: string;
  excerpt?: string;
}

export type PoemFormat =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 10
  | 11
  | 16
  | 32
  | 40
  | 45
  | 64
  | 128
  | 176
  | 187
  | 256
  | 512
  | 992
  | 1024
  | 2032
  | 2048;

export interface PoemSection {
  coupletsCount: number;
  ganjoorMetre: {
    rhythm?: string;
  };
  poemFormat: PoemFormat;
}

export interface Poem {
  verses: Verse[];
  next: GanjoorPoemSummary;
  previous: GanjoorPoemSummary;

  sourceName?: string;
  oldTag?: string;

  parentUrl?: string;

  sections?: PoemSection[];
}

export interface PoemSearchItem {
  plainText?: string;
  category: {
    poet: PoetItem;
    cat: Cat;
  };
  fullTitle?: string;
  fullUrl?: string;
}

export interface Random {
  fullUrl?: string;
  fullTitle?: string;
  verses: Verse[];
}