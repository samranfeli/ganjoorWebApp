import Heading from "@/components/ui/typography/heading";
import { SectionHeading } from "@/components/ui/typography/section-heading";
import { CenturiesNavigationItem, CenturyItem } from "@/types/century";
import CenturiesNavigation from "./centuries-navigation";
import CenturiesList from "./centuries-list";
import { getCenturyElementId } from "@/lib/century";

export default function CenturiesPoetsSection({
  centuries,
}: {
  centuries: CenturyItem[];
}) {

  if(!centuries.length) return null;

  const navigationItems: CenturiesNavigationItem[] = centuries.map(
    (century) => ({
      id: getCenturyElementId(century.id),
      label: century.name || century.id.toString(),
    }),
  );

  return (
    <section>
      <SectionHeading className="mb-0">
        <Heading as="h2" size="lg">
          دسته‌بندی بر اساس قرن
        </Heading>
      </SectionHeading>

      <div className="relative flex">
        <div className="hidden md:block w-32 flex-none" />
        <div className="grow md:px-5">
          <CenturiesList centuries={centuries} />
        </div>
        <div className="hidden md:block w-32 flex-none">
          <CenturiesNavigation items={navigationItems} />
        </div>
      </div>
    </section>
  );
}
