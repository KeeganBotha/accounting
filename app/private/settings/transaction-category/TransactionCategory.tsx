"use client";

import { handleSafeActionResult } from "@/lib/utils";

import { deleteTransactionCategory, mutateTransactionCategory } from "./action";
import { LinkedOptionsCrud } from "@/components/linkedOptionsCrud";

type TransactionCategoryProps = {
  options: LinkedOptionType[];
  transactionCategoryGroupOptions: OptionType[];
};

export function TransactionCategory({
  options,
  transactionCategoryGroupOptions,
}: TransactionCategoryProps) {
  async function handleMutate(option: LinkedOptionType) {
    handleSafeActionResult(await mutateTransactionCategory(option));
  }

  async function handleDelete(id: number) {
    handleSafeActionResult(await deleteTransactionCategory(id));
  }

  return (
    <LinkedOptionsCrud
      options={options}
      onDelete={handleDelete}
      onMutate={handleMutate}
      linkedOptions={transactionCategoryGroupOptions}
      linkedOptionLabel="Transaction Category Group"
    />
  );
}
