"use client";

import React from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { MoreVert } from "@mui/icons-material";

const GridViewFolder: React.FC = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={1}
      border={"1px solid"}
      borderRadius={2}
      pl={2}
    >
      <FolderIcon />
      <Typography variant="button" color="initial">
        My self doc
      </Typography>

      <IconButton
        aria-label="folder-menu"
        onClick={() => {}}
        sx={{ marginLeft: "auto" }}
      >
        <MoreVert />
      </IconButton>
    </Box>
  );
};

export default GridViewFolder;
