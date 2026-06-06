import { Heading } from "@/components/ui/typography/heading";
import { CenturyItem } from "@/types/century";
import PoetsList from "../poets-list";
import { getCenturyElementId } from "@/lib/century";

export default function Century({ century }: { century: CenturyItem }) {
  return (
    <div id={getCenturyElementId(century.id)} className="py-6">
      <Heading as="h3" size={"md"} className="mb-4 text-center">
        {century.name}
      </Heading>
      <PoetsList poets={century.poets} />
    </div>
  );
}
