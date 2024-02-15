import HorizontalCollapse from "./components/HorizontalCollapse";
import TopNavBar from "./components/TopNavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-1">
        <div className="w-full">
          <TopNavBar />
          <main className="flex justify-center content-center">
            {children}
          </main>
        </div>
      </div>
      <footer></footer>
    </>
  );
}
