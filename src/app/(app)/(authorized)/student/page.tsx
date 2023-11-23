import Link from "next/link";

export default function StudentHome() {
  return (
    <div className="mx-auto">
      <Link href="/student/academicEnrollment">
        <div className="px-16 py-2 rounded-3xl bg-[#000066] text-[#ffffff] border font-bold  hover:border-[#000066] hover:bg-[#ffffff] hover:text-[#000066]">
          Student
        </div>
      </Link>
    </div>
  );
}
