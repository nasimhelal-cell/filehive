"use server";

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData: any) {
  let provider = formData.get("provider");
  await signIn(provider, { redirectTo: "/dashboard" });
}

export async function doLogout() {
  await signOut();
}
