import { GetPageByUrlResponse } from "@/types/page";
import { Poem } from "@/types/poem";

export function mapPoem(
  apiPoem: NonNullable<GetPageByUrlResponse["poem"]>,
): Poem {
  return {
    verses: apiPoem.verses,
    next: apiPoem.next,
    previous: apiPoem.previous,

    sourceName: apiPoem.sourceName,
    oldTag: apiPoem.oldTag,

    parentUrl: apiPoem.category.cat.fullUrl,

    sections: apiPoem.sections?.map((section) => ({
      coupletsCount: section.coupletsCount ?? 0,
      poemFormat: section.poemFormat,
      ganjoorMetre: {
        rhythm: section.ganjoorMetre.rhythm,
      },
    })),
  };
}