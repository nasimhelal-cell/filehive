"use client";
import { useSession } from "next-auth/react";
import FileFolder from "@/components/FileFolder";
import GridList from "@/components/GridList";
import GridViewFolder from "@/components/GridViewFolder";
import ListViewFolder from "@/components/ListViewFolder";
import { Box, Grid, Typography, Button } from "@mui/material";
import { redirect } from "next/navigation";
import { useState } from "react";
import FileCardGridView from "@/components/FileCardGridView";
import FileCardListView from "@/components/FileCardListView";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddIcon from "@mui/icons-material/Add";

const DashboardPage = () => {
  const { data: session } = useSession();
  // console.log("session", session);
  if (!session) redirect("/");

  const [gridView, setGridView] = useState("grid");
  const [fileView, setFileView] = useState("files");

  return (
    <Box
      flex="1 1 auto"
      px={3}
      py={2}
      sx={{ backgroundColor: "#ffffff" }}
      borderRadius={3}
    >
      <Box pb={2}>
        <Box display={"flex"} justifyContent={"space-between"} mb={2} gap={2}>
          <Typography variant="h5" color="initial" gutterBottom>
            Welcome to FileHive
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ marginLeft: "auto" }}
            startIcon={<CloudUploadIcon />}
          >
            upload file
          </Button>
          <Button variant="outlined" color="inherit" startIcon={<AddIcon />}>
            create file
          </Button>
          <Button variant="outlined" color="inherit" startIcon={<AddIcon />}>
            create folder
          </Button>
        </Box>

        <Box display={"flex"} justifyContent={"space-between"}>
          <FileFolder setFileView={setFileView} />
          <GridList setGridView={setGridView} />
        </Box>
      </Box>

      {/* folders */}
      <Box>
        {fileView === "folders" && (
          <>
            {gridView === "grid" && (
              <Grid container spacing={3} marginBottom={3}>
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <Grid item xs={3} key={index + "55"}>
                    <GridViewFolder />
                  </Grid>
                ))}
              </Grid>
            )}
            {gridView === "list" && (
              <Grid container spacing={1}>
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <Grid item xs={12} key={index + "5u"}>
                    <ListViewFolder />
                  </Grid>
                ))}
              </Grid>
            )}
          </>
        )}

        {/* files */}

        {fileView === "files" && (
          <>
            {gridView === "grid" && (
              <Grid container spacing={3} marginBottom={3}>
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <Grid item xs={3} key={index + "55"}>
                    <FileCardGridView />
                  </Grid>
                ))}
              </Grid>
            )}
            {gridView === "list" && (
              <Grid container spacing={1}>
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <Grid item xs={12} key={index + "5u"}>
                    <FileCardListView />
                  </Grid>
                ))}
              </Grid>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default DashboardPage;
