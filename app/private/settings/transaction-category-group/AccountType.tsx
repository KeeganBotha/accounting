"use client";

import { handleSafeActionResult } from "@/lib/utils";
import { OptionsCrud } from "@/components/optionsCrud";

import { deleteAccountType, mutateAccountType } from "./action";

type AccountTypeProps = {
  options: OptionType[];
};

export function AccountType({ options }: AccountTypeProps) {
  async function handleMutate(option: OptionType) {
    handleSafeActionResult(await mutateAccountType(option));
  }

  async function handleDelete(id: number) {
    handleSafeActionResult(await deleteAccountType(id));
  }

  return (
    <OptionsCrud
      options={options}
      onDelete={handleDelete}
      onMutate={handleMutate}
    />
  );
}
