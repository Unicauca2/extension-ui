import HorizontalCollapse from "./components/CollapseMenu";
import { Box } from "@mui/material";
import TopNavBar from "./components/TopNavBar";
import MainClient from "./components/_MainClient";

export default function ProgramManagement() {
  return (
    <body
      className="bg-image bg-center min-h-screen w-full flex"
      style={{
        backgroundImage: `url("./app/login.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <HorizontalCollapse />
      <Box
        sx={{
          m: "1rem",
          width: "100%",
          minHeight: "95vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TopNavBar
          crumbs={[
            { label: "Estudiante", url: "/student" },
            { label: "Matrícula", url: "/asignatureEnrollment" },
          ]}
        />
        <MainClient />
      </Box>
    </body>
  );
}
