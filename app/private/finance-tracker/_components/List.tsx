"use client";

import { Icon } from "@/components/icon";
import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { MutateDialog } from "./MutateDialog";
import { InferSafeActionFnResult } from "next-safe-action";
import { getPersonalAccounts, mutateAccount } from "../personal/action";
import { handleSafeActionResult } from "@/lib/utils";
import { z } from "zod";
import { AccountSchema } from "../_data/financeTrackerSchema";

type ListProps = {
  accounts: NonNullable<
    InferSafeActionFnResult<typeof getPersonalAccounts>["data"]
  >["result"];
  accountTypeOptions: OptionType[];
};

export function List({ accounts, accountTypeOptions }: ListProps) {
  async function handleSubmit(formData: z.infer<typeof AccountSchema>) {
    handleSafeActionResult(await mutateAccount(formData));
  }

  return (
    <div className="flex flex-col gap-4 grow w-full">
      <div className="flex flex-row justify-between">
        <Search />

        <MutateDialog
          onSubmit={handleSubmit}
          title="Add Account"
          accountTypeOptions={accountTypeOptions}
        >
          <Button>
            <Icon iconName="Add" /> Add
          </Button>
        </MutateDialog>
      </div>

      <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {accounts.map((account) => (
          <div>{account.name}</div>
        ))}
      </div>
    </div>
  );
}
