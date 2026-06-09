import { Card } from "@/components/ui/card";
import { POEM_FORMATS } from "@/lib/poems/poem-formats";

type Props = {
  rhythm?: string;
  poemFormat?: number;
  sourceName?: string;
  category?: string;
  coupletsCount?: number;
};

export function PoemInfoCard({ rhythm, poemFormat, sourceName, category, coupletsCount }: Props) {

  return (
    <Card variant="purple" className="mb-6 text-center">
      <h3 className="mb-4 text-lg font-semibold">اطلاعات</h3>

      <div className="space-y-3">
        {rhythm && (
          <div>
            <span className="font-medium">وزن:</span> {rhythm}
          </div>
        )}

        {poemFormat && (
          <div>
            <span className="font-medium">قالب شعری:</span>
            {POEM_FORMATS[poemFormat] ?? null}
          </div>
        )}

        {category && (
          <div>
            <span className="font-medium">دسته:</span>{" "}
            {category}
          </div>
        )}

        {sourceName && (
          <div>
            <span className="font-medium">منبع اولیه:</span> {sourceName}
          </div>
        )}
        {coupletsCount !== null && (
          <div>
            <span className="font-medium">تعداد ابیات:</span> {coupletsCount}
          </div>
        )}
      </div>

      <p className="mt-6 text-sm opacity-80">
        * با انتخاب متن و لمس متن انتخابی می‌توانید آن را در لغتنامهٔ دهخدا
        جستجو کنید.
      </p>
    </Card>
  );
}
