import { PoetItem } from "@/types/poet";
import { Heading } from "../ui/typography/heading";
import { SectionHeading } from "../ui/typography/section-heading";
import PoetsList from "./poets-list";

export default function FeaturedPoetsSection({
  poets,
}: {
  poets: PoetItem[];
}) {
  return (
    <section className="space-y-6">
      <SectionHeading>
        <Heading as="h2" size="lg">
          سخنوران پرمخاطب
        </Heading>
      </SectionHeading>

      <PoetsList poets={poets} imagePriority />
    </section>
  );
}
