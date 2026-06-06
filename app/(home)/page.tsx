import CenturiesPoetsSection from "@/components/poets/centuries-poets-section";
import FeaturedPoetsSection from "@/components/poets/featured-poets-section";
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
    <Container>
      <div className="text-center py-7">
        <Heading as="h1" size="2xl" className="mb-2">
          گنجور
        </Heading>
        <Text> دردانه‌های ادب پارسی </Text>
      </div>

      <FeaturedPoetsSection 
        poets={editedCentury?.[0].poets}
      />

      <CenturiesPoetsSection 
        centuries={editedCentury.slice(1)}
      />

    </Container>
  );
}
