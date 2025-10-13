"use client";

import { handleSafeActionResult } from "@/lib/utils";
import { OptionsCrud } from "@/components/optionsCrud";

import {
  deleteTransactionCategoryGroup,
  mutateTransactionCategoryGroup,
} from "./action";

type TransactionCategoryGroupProps = {
  options: OptionType[];
};

export function TransactionCategoryGroup({
  options,
}: TransactionCategoryGroupProps) {
  async function handleMutate(option: OptionType) {
    handleSafeActionResult(await mutateTransactionCategoryGroup(option));
  }

  async function handleDelete(id: number) {
    handleSafeActionResult(await deleteTransactionCategoryGroup(id));
  }

  return (
    <OptionsCrud
      options={options}
      onDelete={handleDelete}
      onMutate={handleMutate}
    />
  );
}
