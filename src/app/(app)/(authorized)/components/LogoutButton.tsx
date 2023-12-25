import GlobalIcon from "@/components/GlobalIcon";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function LogoutButton() {
  return (
    <Link
      href="/login"
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="text-[#000066] font-semibold font-sans text-base"
    >
      <GlobalIcon nameIcon="logoutOutlined" />
    </Link>
  );
}
