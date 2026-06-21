import Container from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import Heading from "@/components/ui/typography/heading";
import { SectionHeading } from "@/components/ui/typography/section-heading";
import { Text } from "@/components/ui/typography/text";
import Image from "next/image";

export default function About() {
  return (
    <Container className="py-10">
      <SectionHeading className="mb-6">
        <Heading as="h1" size="xl">
          دربارهٔ گنجور
        </Heading>
      </SectionHeading>

      <div className="text-justify">
        <Text className="mb-3">
          «<strong>گنجور</strong>» مجموعه&zwnj;ای تحت وب از آثار سخنسرایان
          پارسی&zwnj;گو است که با استفاده از آن می&zwnj;توان ضمن مرور به تفکیک نام
          شاعر و نام آثار او، در بین آثار جستجو کرد. این مجموعه در ابتدا به کمک
          نرم&zwnj;افزار مدیریت محتوای <a href="http://wordpress.org"> وردپرس </a>{" "}
          راه&zwnj;اندازی شده بود و از{" "}
          <TextLink href="https://blog.ganjoor.net/1400/02/30/ganjoorazor/">
            سال ۱۴۰۰
          </TextLink>{" "}
          به بعد به پشتوانهٔ نرم&zwnj;افزار اختصاصی بازمتن خود کار می&zwnj;کند (
          <TextLink href="https://github.com/ganjoor/GanjoorService">
            کد منبع گنجور
          </TextLink>
          ).
        </Text>
        <Text className="mb-3">
          این مجموعه پیش&zwnj;تر به عنوان زیرمجموعه&zwnj;ای از{" "}
          <TextLink href="http://hrmoh.ir" title="حمیدرضا محمدی">
            سایت شخصی سازندهٔ آن
          </TextLink>{" "}
          راه&zwnj;اندازی شده بود که نهایتاً به دامنهٔ{" "}
          <TextLink href="https://ganjoor.net" title="ganjoor.net">
            گنجور نقطه نت
          </TextLink>{" "}
          انتقال پیدا کرد (
          <TextLink href="https://blog.ganjoor.net/1386/12/05/hello-world/">
            سال ۸۶
          </TextLink>
          ). هم&zwnj;اکنون منبع عمدهٔ آثار موجود در این مجموعه منابع آزاد در دسترس
          همگان است. فهرست منابع اشعار گنجور را به طور کلی در{" "}
          <TextLink href="/sources/" title="منابع شعرهای گنجور">
            این صفحه
          </TextLink>{" "}
          و به طور جزئی در حاشیهٔ هر یک از اشعار نقل شده در این مجموعه
          می&zwnj;توانید مشاهده کنید. به حکم «
          <TextLink href="/bahar/4parebk/sh4">
            دگران کاشتند و ما خوردیم، ما بکاریم و دیگران بخورند
          </TextLink>
          » گنجور نیز اشعاری را که از منابع دیگر نقل کرده به صورت دوره&zwnj;ای و
          در قالب پایگاه داده&zwnj;های نرم&zwnj;افزار آزاد و رایگان{" "}
          <TextLink href="https://ganjoor.sourceforge.net">
            {" "}
            گنجور رومیزی{" "}
          </TextLink>{" "}
          منتشر می&zwnj;کند تا گروهها و علاقمندان دیگر بتوانند با استفاده از این
          مجموعه کارهای مشابه گنجور را انجام دهند و در مجموع گامهای بیشتری در جهت
          انتشار آزاد ادبیات فارسی برداشته شود.
        </Text>
        <Text className="mb-3">
          کل کار، یک سرگرمی شخصی با انگیزهٔ علاقه به آثار ادبی فارسی بوده است.
          <strong> گنجور وابسته به هیچ سازمان خصوصی یا دولتی&zwnj;ای نیست</strong>.
          گنجور هیچ گونه فعالیت تجاری اعم از فروش برنامه یا داده&zwnj;ها یا کتاب
          یا تبلیغات نداشته و ندارد و محتوا و کدهای آن همیشه به رایگان در دسترس
          بوده است. از این جهت سایتها و برنامه&zwnj;های تجاری که از نام گنجور برای
          فروش محصولات خود سوء استفاده می&zwnj;کنند با گنجور ارتباطی ندارند. تنها
          دامنهٔ اینترنتی متعلق به گنجور ganjoor.net است و دامنه&zwnj;های مشابه به
          افراد و شرکتهای غیرمرتبط با گنجور تعلق داشته و گنجور مسئولیتی در قبال
          آنها ندارد. جهت ارائهٔ پیشنهاد یا اعلام نقص فنی می&zwnj;توانید از صفحهٔ{" "}
          <TextLink href="/contact/">تماس با ما</TextLink> استفاده کنید.
        </Text>
        <Text className="mb-6">
          <a href="https://blog.ganjoor.net/wp-content/uploads/2022/06/ganjoor.png">
            نشان کنونی گنجور
          </a>{" "}
          هدیهٔ آقای{" "}
          <a href="https://www.instagram.com/sone.nejati">مجید نجاتی</a> است.
        </Text>
        <Image
          src="https://i.ganjoor.net/ganjoor.png"
          alt="لوگوی گنجور طراحی شده توسط آقای مجید نجاتی"
          className="w-44 h-44 mx-auto"
          width={384}
          height={384}
        />
      </div>
    </Container>
  );
}
