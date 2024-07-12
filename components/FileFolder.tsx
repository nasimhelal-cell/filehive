"use client";

import { actionFileFolderView } from "@/globalActions";
import CheckIcon from "@mui/icons-material/Check";
import FolderIcon from "@mui/icons-material/Folder";
import FileIcon from "@mui/icons-material/InsertDriveFile";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

const FileFolder: React.FC = () => {
  const [view, setView] = useState("files");

  const handleViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: string
  ) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <form action={actionFileFolderView}>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleViewChange}
        aria-label="view selection"
        size="small"
      >
        <ToggleButton
          value="files"
          aria-label="files"
          type="submit"
          name="view"
        >
          {view === "files" ? (
            <CheckIcon style={{ marginRight: "4px" }} />
          ) : (
            <FileIcon style={{ marginRight: "4px" }} />
          )}
          Files
        </ToggleButton>
        <ToggleButton
          value="folders"
          aria-label="folders"
          type="submit"
          name="view"
        >
          {view === "folders" ? (
            <CheckIcon style={{ marginRight: "4px" }} />
          ) : (
            <FolderIcon style={{ marginRight: "4px" }} />
          )}
          Folders
        </ToggleButton>
      </ToggleButtonGroup>
    </form>
  );
};

export default FileFolder;
