"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LayoutFunctionary({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status, data } = useSession() as any;
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    redirect("/");
  }
  if (!data?.user?.students?.length ?? true) {
    signOut();
    redirect("/");
  }
  return <>{children}</>;
}
