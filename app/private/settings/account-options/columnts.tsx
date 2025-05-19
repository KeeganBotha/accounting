"use client";

import { ColumnDef } from "@tanstack/react-table";
import { InferSafeActionFnResult } from "next-safe-action";
import { getAccountTypes } from "./action";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";

type ColumnType = NonNullable<
  NonNullable<InferSafeActionFnResult<typeof getAccountTypes>["data"]>["result"]
>;

export const columns: ColumnDef<ColumnType>[] = [
  {
    accessorKey: "name",
    header: "Type",
  },
  {
    accessorKey: "iconName",
    header: "Icon",
    cell: ({ getValue }) => {
      const iconName = getValue() as any;

      return <Icon iconName={iconName} />;
    },
  },
  {
    accessorKey: "id",
    header: "Actions",
    cell: ({ getValue }) => {
      const iconName = getValue() as any;
      return (
        <Button variant="outline" size="icon">
          <Icon iconName={"ellipsis"} />
        </Button>
      );
    },
  },
];
