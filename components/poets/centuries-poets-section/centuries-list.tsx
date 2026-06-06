import { CenturyItem } from "@/types/century";
import Century from "./century";

export default function CenturiesList({
  centuries,
}: {
  centuries: CenturyItem[];
}) {
  return centuries.map((century) => (
    <Century key={century.id} century={century} />
  ));
}
