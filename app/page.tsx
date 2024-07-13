import HomeContent from "@/components/HomeContent";
import HomeNavbar from "@/components/HomeNavbar";

import { Box } from "@mui/material";

const Homepage = () => {
  return (
    <Box sx={{ height: "100vh" }} component={"section"}>
      <HomeNavbar />
      <HomeContent />
    </Box>
  );
};

export default Homepage;
