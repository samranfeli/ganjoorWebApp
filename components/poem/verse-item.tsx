import { getVerseLayoutType } from "@/lib/poems/get-verse-layout";
import { cn } from "@/lib/utils";
import { Couplet } from "@/types/poem";

export default function CoupletItem({ couplet }: { couplet: Couplet }) {

  const layout = getVerseLayoutType(
    couplet[0].versePosition,
    couplet.length
  );

  if (layout === "couplet") {
    return (
      <div className="sm:flex sm:justify-center mb-2 sm:mb-4 sm:flex-wrap">
        {couplet.map((hemistich) => (
          <div
            key={hemistich.id}
            className={cn(
              "sm:px-8 grow-0 shrink-0 basis-2/4",
              hemistich.versePosition === 0
                ? "text-right sm:text-left"
                : "text-left sm:text-right"
            )}
          >
            {hemistich.text}
          </div>
        ))}
      </div>
    );
  }
  if (layout === "centered") {
    return (
      <div className="text-center mb-3 sm:mb-6 text-base sm:text-lg">
        {couplet.map((hemistich) => (
          <div key={hemistich.id} className="font-semibold">
            {hemistich.text}
          </div>
        ))}
      </div>
    );
  }
  if(layout === "paragraph"){
    return (
      <>
        {couplet.map((verse) => (
          <div
            key={verse.id}
            className="my-3 sm:my-6 leading-6 sm:leading-8 text-justify"
          >
            {verse.text}
          </div>
        ))}
      </>
    );
  }

  const _exhaustiveCheck: never = layout;
  return _exhaustiveCheck;

}
