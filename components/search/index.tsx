"use client";

import lodash from "lodash";
import { Input } from "../ui/input";
import { Icon } from "../icon";
import { useSearchParamsCrud } from "@/lib/useSearchParamsCrud";
import React from "react";

export function Search() {
  const { set, get } = useSearchParamsCrud();
  const initialValue = get("search");
  const [search, setSearch] = React.useState(initialValue ?? "");

  const handleSearch = lodash.debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
      set("search", event.target.value);
    },
    1000
  );

  return (
    <div className="relative">
      <Icon
        iconName="Search"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4"
      />
      <Input
        onChange={handleSearch}
        placeholder="Search..."
        className="max-w-xs pl-8"
        value={search}
      />
    </div>
  );
}
