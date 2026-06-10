import { TextLink } from "../ui/text-link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GanjoorPoemSummary } from "@/types/poem";

export default function PoemNavigation({
  next,
  prev,
  parentUrl,
}: {
  next?: GanjoorPoemSummary;
  prev?: GanjoorPoemSummary;
  parentUrl?: string | null;
}) {
  
  if (!parentUrl){
    return null;
  }

  const makeLinkUrl = (slug: string) => `${parentUrl}/${slug}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-10 mb-8">
      {prev?.urlSlug ? (
        <TextLink
          prefetch
          href={makeLinkUrl(prev.urlSlug)}
          className="flex items-center gap-1 justify-start"
        >
          <ChevronRight className="w-5 shrink-0" />
          <span className="block truncate text-right max-w-[calc(100vw-50px)] md:max-w-[calc(50vw-50px)] grow-0">
            {[prev.title, prev.excerpt].filter(Boolean).join(": ")}
          </span>
        </TextLink>
      ) : (
        <div className="hidden md:block" />
      )}

      {next?.urlSlug && (
        <TextLink
          prefetch
          href={makeLinkUrl(next.urlSlug)}
          className="flex items-center gap-1 justify-end"
        >
          <span className="block truncate text-left max-w-[calc(100vw-50px)] md:max-w-[calc(50vw-50px)] grow-0">
            {[next.title, next.excerpt].filter(Boolean).join(": ")}
          </span>
          <ChevronLeft className="w-5 shrink-0" />
        </TextLink>
      )}
    </div>
  );
}
