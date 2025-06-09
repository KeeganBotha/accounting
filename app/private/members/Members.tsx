"use client";

import { handleSafeActionResult } from "@/lib/utils";
import { deleteAccountType, getMembers, mutateAccountType } from "./action";
import { InferSafeActionFnInput } from "next-safe-action";

type MembersProps = {
  members: InferSafeActionFnInput<typeof getMembers>;
};

export function Members({ members }: MembersProps) {
  async function handleMutate(option: OptionType) {
    handleSafeActionResult(await mutateAccountType(option));
  }

  async function handleDelete(id: number) {
    handleSafeActionResult(await deleteAccountType(id));
  }

  return <>Members</>;
}
