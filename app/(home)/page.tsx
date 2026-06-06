import CenturiesPoetsSection from "@/components/poets/centuries-poets-section";
import FeaturedPoetsSection from "@/components/poets/featured-poets-section";
import PoetFilterSection from "@/components/poets/poet-filter-section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/typography/heading";
import { Text } from "@/components/ui/typography/text";
import { getCenturies } from "@/lib/api/centuries";

export default async function Home() {

  const centuries = await getCenturies();

  const editedCentury = centuries?.map(century =>{
    const poets = century.poets?.map(poet => ({
      id: poet.id,
      name: poet.name,
      nickname: poet.nickname,
      imageUrl: poet.imageUrl,
      fullUrl: poet.fullUrl
    }))

    return({
        id: century.id,
        name: century.name,
        showInTimeLine: century.showInTimeLine,
        poets: poets
    })
  })

  return (
    <Container className="space-y-10 py-10">

      <section className="text-center">
        <Heading as="h1" size="2xl" className="mb-1">
          گنجور
        </Heading>
        <Text> دردانه‌های ادب پارسی </Text>
      </section>

      <FeaturedPoetsSection 
        poets={editedCentury?.[0].poets}
      />

      <PoetFilterSection />

      <CenturiesPoetsSection 
        centuries={editedCentury.slice(1)}
      />

    </Container>
  );
}
