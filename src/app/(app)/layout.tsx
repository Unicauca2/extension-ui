export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className="min-h-screen w-full flex flex-col"
      style={{
        background:
          // "url('/app/bg.svg') fixed, #00136d",
          //   backgroundSize: "contain",
          "linear-gradient(90deg, rgba(2,2,75,1) 0%, rgba(157,3,17,1) 50%, rgba(2,2,75,1) 100%)",
      }}
    >
      {children}
    </body>
  );
}
