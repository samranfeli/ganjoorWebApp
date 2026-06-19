import { ButtonLink } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/typography/heading";
import { SectionHeading } from "@/components/ui/typography/section-heading";
import { ApiError, BASE_URL } from "@/lib/api/client";
import { getPoetDetail } from "@/lib/api/poet-detail";
import { PoetDetail } from "@/types/poet";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type PoetPageProps = {
  params: Promise<{
    poet: string;
  }>;
};

export async function generateMetadata({
  params,
}: PoetPageProps): Promise<Metadata> {
  const { poet: poetUrl } = await params;

  try {
    const data = await getPoetDetail(`/${poetUrl}`);

    return {
      title: data.poet.name,
      description: data.poet.description,
    };
  } catch {
    return {
      title: "شاعر یافت نشد",
    };
  }
}

export default async function Poet({ params }: PoetPageProps) {
  const { poet: poetUrl } = await params;

  let data: PoetDetail;
  try {
    data = await getPoetDetail(`/${poetUrl}`);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      notFound();
    }

    throw error;
  }

  const { poet, cat } = data;

  const poetYears = [poet.birthYearInLHijri, poet.deathYearInLHijri]
    .filter(Boolean)
    .join(" - ");

  return (
    <div>
      <Container>
        <div className="text-center py-10">
          <Image
            src={BASE_URL + poet.imageUrl}
            alt={""}
            className="rounded-full block w-20 mx-auto mb-2"
            width={82}
            height={100}
            priority
            fetchPriority="high"
          />
          <SectionHeading className="mb-2">
            <Heading as="h1" size={"xl"}>
              {poet.name}
            </Heading>
          </SectionHeading>

          {poetYears && <p className="mb-6 text-xs">{poetYears} هجری</p>}

          {cat.descriptionHtml && (
            <section
              className="max-w-2xl mx-auto text-justify mb-10"
              dangerouslySetInnerHTML={{
                __html: cat.descriptionHtml,
              }}
            />
          )}

          <div className="flex flex-wrap justify-center gap-3">
            {cat.children?.map((item) => (
              <ButtonLink
                key={item.id}
                href={item.fullUrl || "#"}
                variant={"secondary"}
              >
                {item.title}
              </ButtonLink>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
