import type { Metadata } from "next";
import "@/styles/globals.css";
import QueryProvider from "@/providers/query-provider";
import { vazir } from "@/lib/fonts";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/providers/theme-context";
import SWRegister from "./sw-register";

export const metadata: Metadata = {
  title: "گنجور",
  description: "گنجینه شعر فارسی",
    appleWebApp: {
    title: "گنجور",
  },
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
      <ThemeProvider>
        <QueryProvider>
          <SWRegister />
          <body className="min-h-screen flex flex-col dark:bg-red-600" dir="rtl">
            {children}
            <Footer />
            <div id="modal_root" />
          </body>
        </QueryProvider>
      </ThemeProvider>
    </html>
  );
}
