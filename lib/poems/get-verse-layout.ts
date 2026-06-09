type VerseLayout =
  | "couplet"
  | "centered"
  | "paragraph";

export function getVerseLayoutType(
  versePosition: number,
  coupletLength: number
): VerseLayout {
  if (versePosition === 0 && coupletLength === 2) {
    return "couplet";
  }

  if (versePosition === 2 || versePosition === 3) {
    return "centered";
  }

  return "paragraph";
}