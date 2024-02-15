"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LayoutFunctionary({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = useSession() as any;
  if (data?.user?.students?.length === 0) {
    signOut();
    redirect("/login");
  }
  return <>{children}</>;
}
