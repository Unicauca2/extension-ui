export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="m-4 pb-10 bg-[#ffffff] w-full rounded-3xl ">
      <div className="m-4 ">{children}</div>
    </section>
  );
}
