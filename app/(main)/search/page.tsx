/* import SearchForm from "@/components/search/search-form"; */
import SearchList from "@/components/search/search-list";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/typography/heading";
import { notFound } from "next/navigation";

type SearchPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Search({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  const searchQuery = String(params.s ?? "");

  const authorId = Number(params.author ?? 0);

  if (!searchQuery.trim()) {
    notFound();
  }

  return (
    <Container className="py-7">
      <Heading as="h1" size="md" className="mb-5">
        نتایج جستجوی «{searchQuery}»
      </Heading>
      {/* <SearchForm wrapperClassName="mb-6" /> */}
      <SearchList poetId={+authorId} term={searchQuery} />
    </Container>
  );
}
