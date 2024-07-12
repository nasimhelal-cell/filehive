"use client";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Type_ChildrenElement } from "@/types";

const CustomSessionProvider = ({ children }: Type_ChildrenElement) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default CustomSessionProvider;
