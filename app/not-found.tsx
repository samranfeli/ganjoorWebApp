"use client";

import { Heading } from "@/components/ui/typography/heading";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 py-10">
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
      <Heading as="h1">یافت می‌نشود ....</Heading>
      <strong>صفحه مورد نظر شما در این مجموعه وجود ندارد.</strong>
    </div>
  );
}
