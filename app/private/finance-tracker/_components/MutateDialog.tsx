"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import {
  Dialog,
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
import { FormButtons } from "@/components/controlled-components/FormButtons";

type MutateDialog = {
  title: string;
  children: React.ReactNode;
  onSubmit: () => Promise<void>;
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

  const handleSubmit = formMethods.handleSubmit(async () => {
    await onSubmit();
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
            <FormButtons />
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
