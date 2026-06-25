import Image from "next/image";
import Container from "../../ui/container";
import Link from "next/link";
import Search from "@/components/search";
import ThemeToggleButton from "../theme-toggle-button";

export default function MainHeader() {
  return (
    <header className="bg-(--header-bg)">
      <Container className="flex justify-between items-center py-2">
        <Link href={"/"} className="block outline-none">
          <Image
            src="/images/logo.png"
            alt="ganjoor logo"
            width={112}
            height={112}
            className="w-20 h-20 md:w-28 md:h-28 mx-auto"
            sizes="(max-width: 767px) 64px, 80px"
            priority
            fetchPriority="high"
          />
        </Link>
        <div className="flex items-center gap-5">
          <Search />
          <ThemeToggleButton />
        </div>
      </Container>
    </header>
  );
}
