"use client";

import { usePathname } from "next/navigation";

export function Title() {
  const pathName = usePathname();

  return <h4></h4>;
}
