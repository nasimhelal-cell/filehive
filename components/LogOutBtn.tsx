"use client";
import { signOut } from "next-auth/react";
import { doLogout } from "@/lib/actions";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { redirect } from "next/navigation";

const LogoutBtn = () => {
  return (
    <Button
      variant="contained"
      color="error"
      onClick={() => {
        signOut();
        redirect("/");
      }}
      startIcon={<LogoutIcon />}
    >
      Logout
    </Button>
  );
};

export default LogoutBtn;
