import ContentChildrenList from "@/components/poem/content-children-list";
import PoemContent from "@/components/poem/poem-content";
import PoemList from "@/components/poem/poem-list";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/typography/heading";
import { SectionHeading } from "@/components/ui/typography/section-heading";
import { ApiError, BASE_URL } from "@/lib/api/client";
import { getPoemDetail } from "@/lib/api/poem-detail";
import { mapPoem } from "@/mappers/poem.mapper";
import Image from "next/image";
import { notFound } from "next/navigation";

type PoetPageProps = {
  params: Promise<{
    poet: string;
    poem: string[];
  }>;
};

export default async function Poem({ params }: PoetPageProps) {
  const { poet: poetUrl, poem: poemUrl } = await params;

  if (
    !poetUrl ||
    !poemUrl ||
    poetUrl.startsWith(".") ||
    poemUrl.some((u) => u.startsWith("."))
  ) {
    notFound();
  }

  const urlSegments: string[] = [`/${poetUrl}`, ...poemUrl];

  const url = urlSegments.join("/");

  const data = await (async () => {
    try {
      return await getPoemDetail(url);
    } catch (error) {
      if (error instanceof ApiError && error.status === 404) {
        notFound();
      }

      throw error;
    }
  })();

  const imagePath =
    data.poetOrCat?.poet.imageUrl ?? data.poem?.category?.poet?.imageUrl;

  const poetImageUrl = imagePath ? BASE_URL + imagePath : "";

  const poem =
    data.ganjoorPageType === 3 && data.poem ? mapPoem(data.poem) : null;

  const cat = data.poetOrCat?.cat;

  return (
    <Container className="py-10">
      {poetImageUrl && (
        <Image
          src={poetImageUrl}
          alt=""
          className="rounded-full block w-20 mx-auto mb-2"
          width={82}
          height={100}
          priority
          fetchPriority="high"
        />
      )}

      <SectionHeading className="mb-2">
        <Heading as="h1" size="xl">
          <span className="block truncate max-w-[calc(80vw-100px)]">
            {data.title}
          </span>
        </Heading>
      </SectionHeading>

      {data.fullTitle && (
        <p className="mb-6 text-xs text-center">{data.fullTitle} </p>
      )}

      {cat?.description && (
        <p className="mb-6 text-xs text-center">{cat.description}</p>
      )}

      {cat?.children?.length ? (
        <div className="flex gap-3 justify-center flex-wrap">
          <ContentChildrenList items={cat.children} />

          {!!cat.poems?.length && (
            <PoemList
              poems={cat.poems}
              categoryUrl={cat.fullUrl}
              variant="compact"
            />
          )}
        </div>
      ) : cat?.poems?.length ? (
        <Card variant="gold" className="max-w-3xl mx-auto space-y-2">
          <PoemList poems={cat.poems} categoryUrl={cat.fullUrl} />
        </Card>
      ) : null}

      {poem && <PoemContent poem={poem} />}
    </Container>
  );
}
