import { PoetItem } from "./poet";

export interface CenturyItem {
  id: number;
  name?: string;
  showInTimeLine?: boolean;
  poets: PoetItem[];
}
