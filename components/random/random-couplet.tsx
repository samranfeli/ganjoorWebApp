import { Couplet } from "@/types/poem";
import { useState } from "react";

export default function RandomCouplet({ couplets }: { couplets: Couplet[] }) {
  const [randomIndex] = useState(() =>
    Math.floor(Math.random() * couplets.length),
  );

  const randomCouplet = couplets[randomIndex];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-3 justify-center w-full text-lg">
      {randomCouplet?.map((verse) => (
        <div key={verse.id} className="odd:text-right lg:odd:text-left even:text-left lg:even:text-right">{verse.text}</div>
      ))}
    </div>
  );
}
