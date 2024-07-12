import { Type_ChildrenElement } from "@/types";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomSessionProvider from "./providers/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "File Hive | file management app",
  description: "Sophisticated file management app",
};

export default async function RootLayout({ children }: Type_ChildrenElement) {
  return (
    <html lang="en">
      <body className={inter.className + "mainBg"}>
        <Box
          sx={{ backgroundColor: "#F8FAFD" }}
          color={"ButtonText"}
          overflow={"hidden"}
        >
          <CustomSessionProvider>{children}</CustomSessionProvider>
        </Box>
      </body>
    </html>
  );
}
