"use client";

import { usePathname } from "next/navigation";

export function Title() {
  const pathname = usePathname();
  const title = pathname.split("/").pop();

  return <h4>{title}</h4>;
}
