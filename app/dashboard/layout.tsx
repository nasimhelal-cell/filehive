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
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
