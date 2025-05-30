"use client";

import { useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { Icon } from "../icon";

export function Search() {
  const searchParams = useSearchParams();
  const value = searchParams.get("search") ?? "";

  return (
    <div className="relative">
      <Icon
        iconName="Search"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4"
      />
      <Input placeholder="Search..." className="max-w-xs pl-8" />
    </div>
  );
}
