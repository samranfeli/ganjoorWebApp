import { Text } from "@/components/ui/typography/text";
import { WifiOff } from "lucide-react";
import Image from "next/image";

export default function Offline() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 py-10 grow">
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
      <strong> متاسفانه ارتباط با گنجور برقرار نشد.  </strong>
      <Text> <WifiOff className="inline-block ml-1 w-5 h-5 align-middle" /> اتصالتان به اینترنت را بررسی کنید </Text>
    </div>
  );
}
