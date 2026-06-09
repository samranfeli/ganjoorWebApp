import { CatPoemsItem } from "@/types/cat";
import Link from "next/link";
import { ButtonLink } from "../ui/button";

export default function PoemListItem({
  poem,
  categoryUrl,
  variant="detailed"
}: {
  poem: CatPoemsItem;
  categoryUrl?: string;
  variant?: "compact" | "detailed";
}) {

  if(variant === "compact"){
    return(
      <ButtonLink
        href={poem.urlSlug ? `${categoryUrl}/${poem.urlSlug}` : "#"}
        variant={"secondary"}
      >
        {poem.title}
      </ButtonLink>
    )
  }
  return (
    <div>
      <Link
        href={poem.urlSlug ? `${categoryUrl}/${poem.urlSlug}` : "#"}
        className=""
      >
        {poem.title} : {poem.excerpt}
      </Link>
    </div>
  );
}
