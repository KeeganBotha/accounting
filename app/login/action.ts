"use server";

import { signIn, signOut } from "@/auth";

export async function login() {
  await signIn("github", { redirectTo: "/home" });
}

export async function logout() {
  await signOut();
}
