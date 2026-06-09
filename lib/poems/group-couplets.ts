import { Couplet, Verse } from "@/types/poem";

export function groupCouplets(verses: Verse[]): Couplet[] {
  const grouped = new Map<number, Couplet>();

  for (const verse of verses) {
    const key = verse.coupletIndex ?? -1;

    const existing = grouped.get(key);

    if (existing) {
      existing.push(verse);
    } else {
      grouped.set(key, [verse]);
    }
  }

  return Array.from(grouped.values());
}
