import React from "react";
import { Grid, Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

const SearchBar: React.FC = () => {
  return (
    <Grid
      item
      xs={12}
      style={{ padding: "10px", display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#f1f3f4",
          borderRadius: "24px",
          padding: "5px 10px",
        }}
      >
        <SearchIcon />
        <InputBase placeholder="Search in file hive" sx={{ ml: 1, flex: 1 }} />
      </Box>
    </Grid>
  );
};

export default SearchBar;
