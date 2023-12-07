"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const redirectToParent = () => {
      router.replace(pathname.slice(0, pathname.lastIndexOf("/")));
    };

    redirectToParent();
  }, [router]);

  return <></>;
}
