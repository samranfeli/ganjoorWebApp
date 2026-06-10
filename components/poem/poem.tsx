import { Couplet } from "@/types/poem";
import CoupletItem from "./verse-item";

type PoemProps = {
  couplets: Couplet[];
};

export default function Poem({ couplets }: PoemProps) {
  if (couplets.length === 0) {
    return null;
  }

  return (
    <div className="my-10">
      {couplets.map((couplet) => (
        <CoupletItem key={couplet[0].id} couplet={couplet} />
      ))}
    </div>
  );
}
