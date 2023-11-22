import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen w-full flex flex-col text-[17px] bg-[#edf3f5]">
        <header>
          <section className="border border-[#444] text-purple-900">
            Header
          </section>
        </header>
        <main className="flex-1 flex">
          <section className="w-1/6">Nav Bar derecho</section>
          {children}
        </main>
        <footer className="text-purple-700">Footer</footer>
      </body>
    </html>
  );
}
