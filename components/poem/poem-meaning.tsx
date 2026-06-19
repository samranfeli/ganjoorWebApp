import { Fragment } from "react/jsx-runtime";
import { Card } from "../ui/card";
import Heading from "../ui/typography/heading";
import { Couplet } from "@/types/poem";

type PoemMeaningProps = {
  couplets: Couplet[];
};

export function PoemMeaning({ couplets }: PoemMeaningProps) {
  const filteredCouplets = couplets.filter(
    (couplet) => couplet[0].coupletSummary,
  );

  if (filteredCouplets.length === 0) {
    return null;
  }

  return (
    <div className="text-center">
      <Heading as="h3" size="md" className="mb-4">
        برگردان به زبان ساده
      </Heading>
      {filteredCouplets.map((couplet) => (
        <Fragment key={couplet[0].id}>
          {couplet.map((hemistich) => (
            <div key={hemistich.id} className="mb-1">
              {hemistich.text}
            </div>
          ))}

          <Card variant="gold" className="mb-6">
            {couplet[0].coupletSummary}
          </Card>
        </Fragment>
      ))}
    </div>
  );
}
