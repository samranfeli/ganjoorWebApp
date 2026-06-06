import { Heading } from "../ui/typography/heading";
import { SectionHeading } from "../ui/typography/section-heading";
import { PoetItem as PoetItemType } from "@/types/poet";
import PoetsList from "./poets-list";

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

      <PoetsList poets={poets} className="mb-10" />
    </>
  );
}
