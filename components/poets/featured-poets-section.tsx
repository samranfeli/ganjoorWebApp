import { Heading } from "../ui/typography/heading";
import { SectionHeading } from "../ui/typography/section-heading";
import { PoetItem as PoetItemType } from "@/types/poet";
import PoetItem from "./poet-item";

export default function FeaturedPoetsSection({
  poets,
}: {
  poets: PoetItemType[];
}) {
  return (
    <>
      <SectionHeading className="mb-6">
        <Heading as="h2" size="lg">
          سخنوران پرمخاطب
        </Heading>
      </SectionHeading>

      <div className="flex gap-5 flex-wrap justify-center">
        {poets?.map((poet) => (
          <PoetItem key={poet.id} poet={poet} />
        ))}
      </div>
    </>
  );
}
