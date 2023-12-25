"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AuthPage() {
  const { data } = useSession() as any;

  if (data?.user?.coordinator?.id) redirect("/functionary");
  if (data?.user?.students.length > 0) redirect("/student");
}
