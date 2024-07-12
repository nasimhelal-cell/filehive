import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

const ListViewFolder: React.FC = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="all my notebooks"
          >
            <FolderIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            All my notebooks
          </Typography>
        </Box>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          You opened 03/20/21
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" component="div">
            90 Days to Write
          </Typography>

          <IconButton edge="end" color="inherit" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ListViewFolder;
