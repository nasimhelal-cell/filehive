import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid, Stack, Toolbar } from "@mui/material";
import FileFolder from "./FileFolder";
import GridList from "./GridList";
import FileCard from "./FileCardGridView";

const DashboardContent = () => {
  return (
    <>
      <Typography variant="h5" color="initial">
        Welcome to File Manager
      </Typography>
      <Toolbar sx={{ padding: "0", marginBottom: "20px" }}>
        <Typography variant="body1" color="initial" sx={{ mr: 2 }}>
          Suggested
        </Typography>

        <FileFolder />

        <Box sx={{ flexGrow: 1 }} />

        <GridList />
      </Toolbar>

      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ overflowY: "auto", margin: "0 auto" }}
      >
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
      </Grid>
    </>
  );
};

export default DashboardContent;
