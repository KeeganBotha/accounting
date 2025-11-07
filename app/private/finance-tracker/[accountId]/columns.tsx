"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { handleSafeActionResult } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import React from "react";
import { mutateTransactionSharedExpense } from "./action";

export type Payment = {
  id: number;
  amount: number;
  createdAt: string;
  transactionType: string;
  description: string;
  isShared: boolean;
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
    accessorKey: "transactionType",
    header: "Transaction Type",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ getValue }) => <>{format(getValue() as string, "dd/MM/yyyy")}</>,
  },
  {
    accessorKey: "isShared",
    header: "Is Shared",
    cell: ({ row }) => {
      const transaction = row.original;
      console.log("transaction", transaction);

      const [isChecked, setIsChecked] = React.useState(transaction.isShared);

      async function handleChange(input: boolean) {
        const result = handleSafeActionResult(
          await mutateTransactionSharedExpense(transaction.id)
        );

        if (result && result.result) setIsChecked(result.result);
      }

      return <Checkbox checked={isChecked} onCheckedChange={handleChange} />;
    },
  },
];
