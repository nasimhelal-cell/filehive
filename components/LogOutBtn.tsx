"use client";
import { signOut } from "next-auth/react";
import { doLogout } from "@/lib/actions";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutBtn = () => {
  return (
    <Button
      variant="contained"
      color="error"
      onClick={() => {
        signOut();
      }}
      startIcon={<LogoutIcon />}
    >
      Logout
    </Button>
  );
};

export default LogoutBtn;
