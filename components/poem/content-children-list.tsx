import { CatChildrenItem } from "@/types/cat";
import { ButtonLink } from "../ui/button";

export default function ContentChildrenList({
  items,
}: {
  items: CatChildrenItem[];
}) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <ButtonLink href={item.fullUrl} variant={"secondary"}>
            {item.title}
          </ButtonLink>
        </div>
      ))}
    </>
  );
}
