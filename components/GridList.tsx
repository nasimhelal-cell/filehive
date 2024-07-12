"use client";

import { actionGridListView } from "@/globalActions";
import CheckIcon from "@mui/icons-material/Check";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

const GridList: React.FC = () => {
  const [view, setView] = useState("grid");

  const handleViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: string
  ) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <form action={actionGridListView}>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleViewChange}
        aria-label="view selection"
        size="small"
      >
        <ToggleButton
          value="list"
          aria-label="files"
          sx={{ width: "70px" }}
          type="submit"
          name="view"
        >
          {view === "list" && <CheckIcon style={{ marginRight: "4px" }} />}
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton
          value="grid"
          aria-label="folders"
          sx={{ width: "70px" }}
          type="submit"
          name="view"
        >
          {view === "grid" && <CheckIcon style={{ marginRight: "4px" }} />}
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </form>
  );
};

export default GridList;
