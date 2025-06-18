"use client";

import { DialogClose } from "@radix-ui/react-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { handleSafeActionResult } from "@/lib/utils";
import { RHFInput } from "@/components/controlled-components/RHFInput";
import { AccountRecordSchema } from "@/app/private/finance-tracker/_data/financeTrackerSchema";

import { mutateAccountRecord } from "./action";

type MutateDialog = {
  children: React.ReactNode;
  accountId: number;
  accountRecordId?: number;
};

export function MutateDialog({
  children,
  accountId,
  accountRecordId = 0,
}: MutateDialog) {
  const formMethods = useForm({
    resolver: zodResolver(AccountRecordSchema),
    defaultValues: {
      name: "",
      value: 0,
    },
  });

  const handleSubmit = formMethods.handleSubmit(async (formData) => {
    const result = handleSafeActionResult(
      await mutateAccountRecord({
        ...formData,
        accountId: accountId,
        accountRecordId: accountRecordId,
      })
    );

    if (result && result?.result) formMethods.reset();
  });

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Add/Edit Record</DialogTitle>
        <DialogDescription hidden />
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <RHFInput label="Name" name="name" />
            <RHFInput label="Value" name="value" />
          </form>
        </FormProvider>
        <div className="flex flex-row justify-between">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit">Submit</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
