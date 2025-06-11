"use client";

import { z } from "zod";
import { InferSafeActionFnResult } from "next-safe-action";

import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { Icon, IconName } from "@/components/icon";
import { handleSafeActionResult } from "@/lib/utils";

import { MutateDialog } from "./MutateDialog";
import { AccountCard } from "./AccountCard";
import { AccountSchema } from "../_data/financeTrackerSchema";
import { getPersonalAccounts, mutateAccount } from "../personal/action";

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
        {accounts.map((account) => {
          const { id, name, accountType } = account;
          const { iconName: accountIconName, name: accountName } = accountType;

          const iconName = (accountIconName ?? "Loading") as IconName;

          return (
            <AccountCard
              key={id}
              iconName={iconName}
              id={id}
              name={name}
              accountName={accountName}
            />
          );
        })}
      </div>
    </div>
  );
}
