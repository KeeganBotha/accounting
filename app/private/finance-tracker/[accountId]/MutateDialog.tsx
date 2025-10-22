"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { handleSafeActionResult } from "@/lib/utils";
import { RHFInput } from "@/components/controlled-components/RHFInput";
import { RHFSelect } from "@/components/controlled-components/RHFSelect";
import { AccountRecordSchema } from "@/app/private/finance-tracker/_data/financeTrackerSchema";

import { mutateAccountRecord } from "./action";
import { RHFDiagnostic } from "@/components/controlled-components/RHFDiagnostic";

type MutateDialogProps = {
  accountId?: number;
  accountRecordId?: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  options: OptionType[];
};

export function MutateDialog({
  accountId = 0,
  accountRecordId = 0,
  open,
  setOpen,
  options,
}: MutateDialogProps) {
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <RHFDiagnostic />
            <RHFInput label="Name" name="name" />
            <RHFInput label="Value" name="value" />
            <RHFSelect
              label="Transaction Category"
              name="transactionCategoryId"
              options={options}
            />
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
