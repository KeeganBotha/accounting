"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RHFSelect } from "@/components/controlled-components/RHFSelect";
import { RHFInput } from "@/components/controlled-components/RHFInput";
import {
  AccountSchema,
  accountSchemaDefaults,
} from "../_data/financeTrackerSchema";
import { Button } from "@/components/ui/button";
import { z } from "zod";

type MutateDialog = {
  title: string;
  children: React.ReactNode;
  onSubmit: (formData: z.infer<typeof AccountSchema>) => Promise<void>;
  accountTypeOptions: OptionType[];
};

export function MutateDialog({
  onSubmit,
  children,
  title,
  accountTypeOptions,
}: MutateDialog) {
  const formMethods = useForm({
    resolver: zodResolver(AccountSchema),
    defaultValues: accountSchemaDefaults,
  });

  const handleSubmit = formMethods.handleSubmit(async (formData) => {
    await onSubmit(formData);
  });

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription hidden />
        <FormProvider {...formMethods}>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <RHFInput label="Account Name" name="accountName" />
            <RHFSelect
              label="Account Type"
              name="accountTypeId"
              options={accountTypeOptions}
            />
            <div className="flex flex-row justify-between">
              <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="submit">Submit</Button>
              </DialogClose>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
