"use client";

import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSession } from "next-auth/react";
import Image from "next/image";
import * as React from "react";
import LogoutBtn from "./LogOutBtn";

export default function ProfileAvatar() {
  const { data: session } = useSession();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar>{session?.user?.name?.at(0)}</Avatar>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box
          sx={{
            width: "300px",
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Image
            src={session?.user?.image || ""}
            alt={session?.user?.name || ""}
            width={100}
            height={100}
          />
          <Typography variant="body1" color="initial" textAlign={"center"}>
            {session?.user?.name} <br />
            {session?.user?.email}
          </Typography>
          <MenuItem onClick={handleClose}>
            <LogoutBtn />
          </MenuItem>
        </Box>
      </Menu>
    </Box>
  );
}
