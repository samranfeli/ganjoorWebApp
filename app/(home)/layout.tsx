import HomeHeader from "@/components/layout/headers/home-header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
          <HomeHeader />
          <main className="grow">
            {children}
          </main>
        </>
  );
}
