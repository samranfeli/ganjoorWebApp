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
            className="w-16 h-16 md:w-20 md:h-20"
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
