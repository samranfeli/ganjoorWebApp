import Poem from "./poem";
import PoemNavigation from "./poem-navigation";
import { PoemInfoCard } from "./poem-info-card";
import { PoemMeaning } from "./poem-meaning";
import { groupCouplets } from "@/lib/poems/group-couplets";
import { Poem as PoemType} from "@/types/poem";

type PoemContentProps = {
  poem: PoemType;
};

export default function PoemContent({
  poem,
}: PoemContentProps) {
  
  const couplets = groupCouplets(poem.verses);

  const firstSection = poem.sections?.[0];
  
  return (
    <>
      <Poem couplets={couplets} />

      <PoemNavigation
        next={poem.next}
        prev={poem.previous}
        parentUrl={poem.parentUrl}
      />

      <PoemInfoCard
        poemFormat={firstSection?.poemFormat}
        rhythm={firstSection?.ganjoorMetre?.rhythm}
        sourceName={poem.sourceName}
        coupletsCount={firstSection?.coupletsCount}
        category={poem.oldTag}
      />

      <PoemMeaning couplets={couplets} />
    </>
  );
}
