import GlobalIcon from "@/components/GlobalIcon";
import Link from "next/link";

export default function LogoutButton() {
  return (
    <Link
      href="/login"
      className="text-[#000066] font-semibold font-sans text-base"
    >
      <GlobalIcon nameIcon="logoutOutlined" />
    </Link>
  );
}
