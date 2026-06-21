import FaqCategory from "@/components/faq/faq-category";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/typography/heading";
import { SectionHeading } from "@/components/ui/typography/section-heading";
import { getFaqCategories } from "@/lib/api/faq";

export default async function Faq() {
  const faqs = await getFaqCategories();

  return (
    <Container className="py-10">
      <SectionHeading className="mb-6">
        <Heading as="h1" size="lg">
          پرسش های متداول
        </Heading>
      </SectionHeading>

      {faqs.map((faq) => (
        <FaqCategory
          key={faq.id}
          id={faq.id}
          title={faq.title}
          description={faq.description}
        />
      ))}
    </Container>
  );
}
