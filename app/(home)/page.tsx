import FeaturedPoetsSection from "@/components/poets/featured-poets-section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/typography/heading";
import { Text } from "@/components/ui/typography/text";
import { getCenturies } from "@/lib/api/centuries";

export default async function Home() {
  const centuries = await getCenturies();

  return (
    <Container>
      <div className="text-center py-7">
        <Heading as="h1" size="2xl" className="mb-2">
          گنجور
        </Heading>
        <Text> دردانه‌های ادب پارسی </Text>
      </div>

      <FeaturedPoetsSection 
        poets={centuries?.[0].poets}
      />

    </Container>
  );
}
