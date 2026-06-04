import type { Metadata } from "next";
import "@/styles/globals.css";
import QueryProvider from "@/providers/query-provider";
import { vazir } from "@/lib/fonts";

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
        <body className="min-h-full flex flex-col">
          {children}
        </body>
      </QueryProvider>
    </html>
  );
}
