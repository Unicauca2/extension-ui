import { Button } from "@mui/material";

export default function StudentHome() {
  return (
    <body
      className="bg-image bg-center h-screen w-full flex"
      style={{
        backgroundImage: `url("./app/login.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full align-middle text-center">
        <Button href= "/student/academicEnrollment" className="w-2/5 rounded-2xl bg-[#000066] text-[#ffffff] border border-[#F6F6F6] border-solid font-bold py-2 px-4 mb-5 hover:border-b-2 hover:border-[#000066] hover:bg-[#ffffff] hover:text-[#000066]">
          Student
        </Button>
      </div>
    </body>
  );
}
