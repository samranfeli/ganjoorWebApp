import { CatPoemsItem } from "@/types/cat";
import PoemListItem from "./poem-list-item";

export default function PoemList({
  poems,
  categoryUrl,
  variant
}: {
  poems: CatPoemsItem[];
  categoryUrl?: string;
  variant?: "compact" | "detailed";
}) {
  return (
    <>
      {poems.map((poem) => (
        <PoemListItem 
          key={poem.id} 
          poem={poem}
          categoryUrl={categoryUrl}
          variant={variant}
        />
      ))}
    </>
  );
}
