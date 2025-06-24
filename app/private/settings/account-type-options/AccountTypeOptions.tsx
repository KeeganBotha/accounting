"use client";

import { handleSafeActionResult } from "@/lib/utils";
import { OptionsCrud } from "@/components/optionsCrud";

import { deleteAccountType, mutateAccountType } from "./action";

type AccountOptionsProps = {
  options: OptionType[];
};

export function AccountTypeOptions({ options }: AccountOptionsProps) {
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
