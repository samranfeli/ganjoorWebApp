import CenturiesPoetsSection from "@/components/poets/centuries-poets-section";
import FeaturedPoetsSection from "@/components/poets/featured-poets-section";
//import PoetFilterSection from "@/components/poets/poet-filter-section";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/typography/heading";
import { Text } from "@/components/ui/typography/text";
import { getCenturies } from "@/lib/api/centuries";
import { CenturyItem } from "@/types/century";

export default async function Home() {

  let centuries: CenturyItem[] = [];

  try {
    centuries = await getCenturies();
  } catch {
    centuries = [];
  }

  return (
    <Container className="space-y-10 py-10">

      <section className="text-center">
        <Heading as="h1" size="2xl" className="mb-1">
          گنجور
        </Heading>
        <Text> دردانه‌های ادب پارسی </Text>
      </section>

      <FeaturedPoetsSection 
        poets={centuries?.[0]?.poets}
      />

      {/* <PoetFilterSection /> */}

      <CenturiesPoetsSection 
        centuries={centuries?.slice(1)}
      />

    </Container>
  );
}
