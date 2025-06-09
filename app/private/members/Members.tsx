"use client";

import { OptionsCrud } from "@/components/optionsCrud";
import { handleSafeActionResult } from "@/lib/utils";
import { deleteAccountType, mutateAccountType } from "./action";

type MembersProps = {
  members: any[];
};

export function Members({ members }: MembersProps) {
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
