"use client";

import { OptionsCrud } from "@/components/optionsCrud";
import { handleSafeActionResult } from "@/lib/utils";
import { deleteAccountRecordType, mutateAccountRecordType } from "./action";

type AccountOptionsProps = {
  options: OptionType[];
};

export function AccountRecordTypeOptions({ options }: AccountOptionsProps) {
  async function handleMutate(option: OptionType) {
    handleSafeActionResult(await mutateAccountRecordType(option));
  }

  async function handleDelete(id: number) {
    handleSafeActionResult(await deleteAccountRecordType(id));
  }

  return (
    <OptionsCrud
      options={options}
      onDelete={handleDelete}
      onMutate={handleMutate}
    />
  );
}
