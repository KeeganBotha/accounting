"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { handleSafeActionResult } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import React from "react";
import {
  mutateTransactionCategory,
  mutateTransactionSharedExpense,
} from "./action";
import { Select } from "@/components/controlled-components/RHFSelect";

export type Payment = {
  id: number;
  amount: number;
  createdAt: string;
  transactionCategoryId: string | undefined;
  description: string;
  isShared: boolean;
};

export function createColumns(options: OptionType[]) {
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
    {
      accessorKey: "transactionCategoryId",
      header: "Transaction Category",
      cell: ({ row }) => {
        const transaction = row.original;

        const [selectedValue, setSelectedValue] = React.useState(
          transaction.transactionCategoryId
        );

        async function handleChange(value: string | undefined) {
          const result = handleSafeActionResult(
            await mutateTransactionCategory({
              transactionId: transaction.id,
              transactionCategoryId: transaction.transactionCategoryId
                ? +transaction.transactionCategoryId
                : undefined,
            })
          );

          if (result && result.result)
            setSelectedValue(
              result.result.transactionCategoryId?.toString() ?? undefined
            );
        }

        return (
          <div className="pr-8">
            <Select
              onChange={handleChange}
              options={options}
              value={selectedValue}
            />
          </div>
        );
      },
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

        const [isChecked, setIsChecked] = React.useState(transaction.isShared);

        async function handleChange() {
          const result = handleSafeActionResult(
            await mutateTransactionSharedExpense(transaction.id)
          );

          if (result && result.result) setIsChecked(result.result);
        }

        return <Checkbox checked={isChecked} onCheckedChange={handleChange} />;
      },
    },
  ];

  return columns;
}
