import Container from "@/components/ui/container";
import Heading from "@/components/ui/typography/heading";
import { SectionHeading } from "@/components/ui/typography/section-heading";
import Image from "next/image";

export default function Contact() {
  return (
    <Container className="py-8 md:py-24">
      <SectionHeading className="mb-5 md:mb-12">
        <Heading as="h1" size="lg">
          تماس با ما
        </Heading>
      </SectionHeading>

      <div className="text-justify">
        <p className="mb-2 md:mb-4">
          برای تماس با ما از طریق ایمیل از نشانی
          <a
            href="mailto:ganjoor@ganjoor.net"
            className="text-(--link) hover:text-(--link-hover) transition-colors outline-0"
            target="_blank"
          > ganjoor@ganjoor.net </a>
          استفاده کنید.
        </p>
        <p className="mb-2 md:mb-4">
          متأسفانه تماس با گنجور دربارهٔ پیدا کردن نام شاعر شعر مد نظر یا تأیید
          یا رد انتساب اشعار به شاعران، معنی و مفهوم اشعار و پاسخگویی به سؤالات
          مرتبط با ادبیات یا حتی پیدا کردن شعری برای شما که ممکن است در سایت
          موجود باشد کمکی نمی‌تواند بکند و با عرض پوزش این گونه درخواستها
          بی‌پاسخ می‌ماند.
        </p>
        <p className="mb-2 md:mb-4">
          گنجور امکانات ویژه‌ای برای اضافه کردن مجموعه‌های جدید ندارد و در این
          زمینه به کمک دوستان علاقمند متکی است. لذا پیشنهاد اضافه کردن شاعران مد
          نظر امکان دریافت پاسخ مثبت را ندارد.
        </p>
        <div className="text-center py-4">
          <a
            href="https://telegram.me/GanjoorOfficial"
            target="_blank"
            className="inline-block mx-2 md:mx-4 outline-none"
          >
            <Image
              src="/images/icons/telegram.svg"
              alt="telegram"
              width="48"
              height="48"
              className="h-8 w-8 md:h-12 md:w-12"
            />
          </a>

          <a
            href="http://www.facebook.com/ganjoor"
            target="_blank"
            className="inline-block mx-2 md:mx-4 outline-none"
          >
            <Image
              src="/images/icons/facebook.svg"
              alt="facebook"
              width="48"
              height="48"
              className="h-8 w-8 md:h-12 md:w-12"
            />
          </a>

          <a
            href="https://www.instagram.com/ganjoorofficial/"
            target="_blank"
            className="inline-block mx-2 md:mx-4 outline-none"
          >
            <Image
              src="/images/icons/instagram.svg"
              alt="instagram"
              width="48"
              height="48"
              className="h-8 w-8 md:h-12 md:w-12"
            />
          </a>

          <a
            href="https://twitter.com/GanjoorOfficial"
            target="_blank"
            className="inline-block mx-2 md:mx-4 outline-none"
          >
            <Image
              src="/images/icons/twitter.svg"
              alt="twitter"
              width="48"
              height="48"
              className="h-8 w-8 md:h-12 md:w-12"
            />
          </a>
        </div>
      </div>
    </Container>
  );
}
