import Image from "next/image";
import Container from "../../ui/container";
import { User } from "lucide-react";
import Search from "@/components/search";

export default function HomeHeader() {
  return (
    <header>
      <div className="p-3">
        <Image
          src="/images/logo.png"
          alt="ganjoor logo"
          width={112}
          height={112}
          className="w-20 h-20 md:w-28 md:h-28 mx-auto"
          sizes="(max-width: 767px) 80px, 112px"
          priority
          fetchPriority="high"
        />
      </div>
      <div className="bg-(--header-bg) p-4">
        <Container className="flex justify-between items-center">
          <Search />
          <User />
        </Container>
      </div>
    </header>
  );
}
