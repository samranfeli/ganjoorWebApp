import ContentChildrenList from "@/components/poem/content-children-list";
import PoemContent from "@/components/poem/poem-content";
import PoemList from "@/components/poem/poem-list";
import { Card } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/typography/heading";
import { SectionHeading } from "@/components/ui/typography/section-heading";
import { ApiError, BASE_URL } from "@/lib/api/client";
import { getPoemDetail } from "@/lib/api/poem-detail";
import { mapPoem } from "@/mappers/poem.mapper";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";

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

  const breadcrumbLabelSegments = data.fullTitle?.split(" » ").filter(Boolean);
  const breadcrumbUrlSegments = data.fullUrl?.split("/").filter(Boolean);
  const breadcrumbSegments: {
    url?: string;
    label: string;
  }[] = breadcrumbLabelSegments?.map((item, index) => {

    let segmentUrl = "";
    if (index < breadcrumbLabelSegments.length - 1 ){
      segmentUrl = breadcrumbUrlSegments?.slice(0, index+1).join("/") || "";
    }

    return {
      label: item,
      url: segmentUrl && "/"+segmentUrl ,
    };
  }) || [];

  const breadcrumb = (
    <div className="flex flex-wrap justify-center gap-1 mb-6 text-xs text-center">
      {breadcrumbSegments.map((item, index) => (
        <Fragment key={item.label}>
          {!!index && <span> » </span>}
          {item.url ? (
            <Link href={item.url}>{item.label}</Link>
          ):(
            <span>{item.label}</span>
          )}
        </Fragment>
      ))}
    </div>
  );

  return (
    <Container className="py-10">
      {poetImageUrl && (
        <Link href={`/${poetUrl}`}>
          <Image
            src={poetImageUrl}
            alt=""
            className="rounded-full block w-20 mx-auto mb-2"
            width={82}
            height={100}
            priority
            fetchPriority="high"
          />
        </Link>
      )}

      <SectionHeading className="mb-2">
        <Heading as="h1" size="xl">
          <span className="block truncate max-w-[calc(80vw-100px)]">
            {data.title}
          </span>
        </Heading>
      </SectionHeading>

      {breadcrumb}

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
