"use client";

import { handleSafeActionResult } from "@/lib/utils";
import { OptionsCrud } from "@/components/optionsCrud";

import { deleteTransactionCategory, mutateTransactionCategory } from "./action";

type TransactionCategoryProps = {
  options: OptionType[];
};

export function TransactionCategory({ options }: TransactionCategoryProps) {
  async function handleMutate(option: OptionType) {
    handleSafeActionResult(await mutateTransactionCategory(option));
  }

  async function handleDelete(id: number) {
    handleSafeActionResult(await deleteTransactionCategory(id));
  }

  return (
    <OptionsCrud
      options={options}
      onDelete={handleDelete}
      onMutate={handleMutate}
    />
  );
}
