import type { Metadata } from "next";
import "@/styles/globals.css";
import QueryProvider from "@/providers/query-provider";
import { vazir } from "@/lib/fonts";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazir.className} h-full antialiased`}
    >
      <QueryProvider>
        <body className="min-h-screen flex flex-col" dir="rtl">
          {children}
          <Footer />
        </body>
      </QueryProvider>
    </html>
  );
}
