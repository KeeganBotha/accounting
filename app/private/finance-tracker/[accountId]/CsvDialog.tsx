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
import { AccountCsvSchema } from "@/app/private/finance-tracker/_data/financeTrackerSchema";
import { RHFInput } from "@/components/controlled-components/RHFInput";
import { RHFDiagnostic } from "@/components/controlled-components/RHFDiagnostic";

type CsvDialogProps = {
  accountId?: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function CsvDialog({ accountId = 0, open, setOpen }: CsvDialogProps) {
  const formMethods = useForm({
    resolver: zodResolver(AccountCsvSchema),
    defaultValues: {
      accountId: accountId ?? 0,
      file: "",
    },
  });

  function handleOpenChange(isOpen: boolean) {
    setOpen(isOpen);
    formMethods.reset();
  }

  function handleClose() {
    handleOpenChange(false);
    formMethods.reset();
  }

  const handleSubmit = formMethods.handleSubmit(async (formData) => {});

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogTitle>Upload CSV</DialogTitle>
        <DialogDescription hidden />
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <RHFDiagnostic />
            <RHFInput type="file" label="Upload File" name="file" />
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
