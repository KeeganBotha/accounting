"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: number;
  amount: number;
  createdAt: string;
  recordType: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "recordType",
    header: "Record Type",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
];
