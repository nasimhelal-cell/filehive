import { auth } from "@/auth";
import GridViewFolder from "@/components/GridViewFolder";
import ListViewFolder from "@/components/ListViewFolder";
import { actionGridListView } from "@/globalActions";
import { Box, Grid, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { getCookie } from "cookies-next";

const DashboardPage = async () => {
  const session = await auth();
  if (!session) redirect("/");
  let gridList = getCookie("gridList");
  console.log("gridList", gridList);
  return (
    <Box>
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <Grid item xs={3} key={index + "55"}>
            <GridViewFolder />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1}>
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <Grid item xs={12} key={index + "5u"}>
            <ListViewFolder />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardPage;
