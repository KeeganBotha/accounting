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
import { RHFDiagnostic } from "@/components/controlled-components/RHFDiagnostic";

type MutateDialog = {
  accountId?: number;
  accountRecordId?: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MutateDialog({
  accountId = 0,
  accountRecordId = 0,
  open,
  setOpen,
}: MutateDialog) {
  const formMethods = useForm({
    resolver: zodResolver(AccountRecordSchema),
    defaultValues: {
      name: "",
      value: 0,
      accountId: accountId ?? 0,
      accountRecordId: accountRecordId,
    },
  });

  function handleOpenChange(isOpen: boolean) {
    setOpen(isOpen);
  }

  function handleClose() {
    handleOpenChange(false);
    formMethods.reset();
  }

  const handleSubmit = formMethods.handleSubmit(async (formData) => {
    const result = handleSafeActionResult(
      await mutateAccountRecord({
        ...formData,
      })
    );

    if (result && result?.result) handleClose();
  });

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogTitle>Add/Edit Record</DialogTitle>
        <DialogDescription hidden />
        <FormProvider {...formMethods}>
          <RHFDiagnostic />
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <RHFInput label="Name" name="name" />
            <RHFInput label="Value" name="value" />
            <div className="flex flex-row justify-between">
              <Button onClick={handleClose} variant="secondary">
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
