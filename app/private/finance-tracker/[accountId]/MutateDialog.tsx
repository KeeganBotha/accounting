"use client";

import { DialogClose } from "@radix-ui/react-dialog";

import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { AccountRecordSchema } from "@/app/private/finance-tracker/_data/financeTrackerSchema";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RHFInput } from "@/components/controlled-components/RHFInput";
import { Button } from "@/components/ui/button";

type MutateDialog = {
  children: React.ReactNode;
};

export function MutateDialog({ title, children }: MutateDialog) {
  const formMethods = useForm({
    resolver: zodResolver(AccountRecordSchema),
    defaultValues: {
      name: "",
      value: 0,
    },
  });

  const handleSubmit = formMethods.handleSubmit(async (formData) => {});

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Add/Edit Record</DialogTitle>
        <DialogDescription hidden />
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit}>
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
