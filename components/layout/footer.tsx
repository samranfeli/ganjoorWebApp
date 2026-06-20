import Container from "../ui/container";
import { TextLink } from "../ui/text-link";

export default function Footer() {
  const items: {
    url: string;
    label: string;
  }[] = [
    { url: "/", label: "خانه" },
    { url: "/about", label: "معرفی" },
    { url: "/faq", label: "پرسش‌های متداول" },
    { url: "/privacy", label: "حریم خصوصی" },
    { url: "/random", label: "بیت تصادفی" },
    { url: "/blog", label: "تازه‌های گنجور" },
    { url: "/contact", label: "تماس" },
  ];

  return (
    <footer>
      <Container>
        <div className="py-5 border-t border-neutral-300 flex flex-wrap gap-5 justify-center text-sm">
          {items.map((item) => (
            <TextLink key={item.url} href={item.url}>
              {item.label}
            </TextLink>
          ))}
        </div>
      </Container>
    </footer>
  );
}
