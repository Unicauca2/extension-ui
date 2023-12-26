import LinkOptions from "@/app/(app)/(authorized)/components/LinkOptions";

const linkOptions = [
  {
    label: "Inscritos",
    link: "applicants",
  },
  // {
  //   label: "Inscripciones canceladas",
  //   link: "deniedApplicants",
  // },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="m-4 pb-10 bg-[#ffffff] w-full rounded-3xl">
      <LinkOptions options={linkOptions} />
      <div className="m-4 flex flex-wrap ">{children}</div>
    </section>
  );
}
