import HorizontalCollapse from "./components/CollapseMenu";
import { Box } from "@mui/material";
import TopNavBar from "./components/TopNavBar";
import Main from "./components/Main";
import BottomBar from "./components/BottomBar";

export default function ProgramManagement() {
  return (
    <body
      className="bg-image bg-center max-h-screen w-full flex"
      style={{
        backgroundImage: `url("./../app/login.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <HorizontalCollapse/>
      <Box className="w-full m-4 min-h-[95vh] flex flex-col"
      >
        <TopNavBar
          user={{
            id: "1110101", 
            name: "Santiago"
          }}
          
        />
        <Main />
        <BottomBar />
      </Box>
    </body>
  );
}
