import { getFaqItems } from "@/lib/api/faq";
import Heading from "../ui/typography/heading";
import parse from "html-react-parser";
import { Text } from "../ui/typography/text";
import Accordion from "../ui/accordion";
import classes from "./faq-category.module.css";
import { cn } from "@/lib/utils";

export default async function FaqCategory({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description?: string;
}) {
  const items = await getFaqItems(id);
  const accordionItems = items
    ?.filter((item) => item.answerExcerpt && item.question)
    ?.map((item) => ({
      content: parse(item.answerExcerpt!),
      title: item.question!,
    })) ?? [];

  return (
    <div className="mb-10">
        
      <Heading as="h2" size="md">
        {title}
      </Heading>

      {description && <Text className="text-sm mt-1">{description}</Text>}

      <Accordion
        items={accordionItems}
        buttonClassName="py-4 font-semibold"
        itemClassName="border-t border-black/20 dark:border-white/20"
        contentClassName={cn("pb-4 pr-6", classes.content)}
        wrapperClassName="mt-5"
      />
    </div>
  );
}
