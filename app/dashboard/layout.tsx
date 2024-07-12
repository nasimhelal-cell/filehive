import React from "react";
import Box from "@mui/material/Box";
import { Type_ChildrenElement } from "@/types";
import MainNavbar from "@/components/MainNavbar";
import Sidebar from "@/components/Sidebar";
import FileFolder from "@/components/FileFolder";
import GridList from "@/components/GridList";
import Typography from "@mui/material/Typography";

const Layout = ({ children }: Type_ChildrenElement) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh" width={"100vw"}>
      {/* Section 1 */}
      <Box flex="0 1 auto" p={2}>
        <MainNavbar />
      </Box>

      <Box display="flex" flexDirection="row" height="100vh">
        <Box flex="0 1 auto" px={2}>
          <Sidebar />
        </Box>

        {/* Section 3 */}
        <Box
          flex="1 1 auto"
          px={3}
          py={2}
          sx={{ backgroundColor: "#ffffff" }}
          borderRadius={3}
        >
          <Box pb={2}>
            <Typography variant="h5" color="initial" gutterBottom>
              Welcome to FileHive
            </Typography>
            <Box display={"flex"} justifyContent={"space-between"}>
              <FileFolder />
              <GridList />
            </Box>
          </Box>
          <Box sx={{ overflowY: "hidden", overflowX: "hidden" }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
