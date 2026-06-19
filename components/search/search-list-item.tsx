import { PoemSearchItem } from "@/types/poem";
import parse from "html-react-parser";
import { TextLink } from "../ui/text-link";
import Heading from "../ui/typography/heading";
import Image from "next/image";
import { BASE_URL } from "@/lib/api/client";
import extractSearchContext from "@/lib/search/extract-search-context";

export default function SearchListItem({
  item,
  term,
}: {
  item: PoemSearchItem;
  term: string;
}) {
  const versesHasTerm = item.plainText
    ? extractSearchContext({ text: item.plainText, markedText: term })
    : undefined;

  return (
    <div className="py-4 border-b border-black/20 dark:border-white/20">
      <div className="mb-2 flex items-center gap-2">
        {item.category.poet.imageUrl && (
          <Image
            src={BASE_URL + item.category.poet.imageUrl}
            alt={""}
            className="block w-14 h-14 rounded-full grow-0 object-cover"
            width={82}
            height={100}
          />
        )}

        <Heading as="h3" size="sm">
          <TextLink href={item.fullUrl || "#"}>{item.fullTitle}</TextLink>
        </Heading>
      </div>

      {versesHasTerm?.map((verseItem, index) => (
        <p key={index} className="text-sm pr-8">
          {parse(verseItem)}
        </p>
      ))}
    </div>
  );
}
