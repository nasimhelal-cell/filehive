// components/Sidebar.tsx
import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DriveIcon from "@mui/icons-material/DriveFileMove";
import ComputerIcon from "@mui/icons-material/Computer";
import SharedIcon from "@mui/icons-material/People";
import RecentIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import SpamIcon from "@mui/icons-material/Report";
import TrashIcon from "@mui/icons-material/Delete";

const Sidebar: React.FC = () => {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DriveIcon />
        </ListItemIcon>
        <ListItemText primary="My Drive" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ComputerIcon />
        </ListItemIcon>
        <ListItemText primary="Computers" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SharedIcon />
        </ListItemIcon>
        <ListItemText primary="Shared with me" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <RecentIcon />
        </ListItemIcon>
        <ListItemText primary="Recent" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SpamIcon />
        </ListItemIcon>
        <ListItemText primary="Spam" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <TrashIcon />
        </ListItemIcon>
        <ListItemText primary="Trash" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
