import MainHeader from "@/components/layout/headers/main-header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      <main className="grow flex flex-col items-stretch">{children}</main>
    </>
  );
}
