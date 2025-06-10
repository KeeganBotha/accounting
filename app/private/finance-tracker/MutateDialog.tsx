"use client";

import { FormProvider, useForm } from "react-hook-form";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type MutateDialog = {
  title: string;
  option?: OptionType;
  onSubmit: (option: OptionType) => Promise<void>;
  children: React.ReactNode;
};

const defaultValues = {
  text: "",
  value: "0",
  iconName: "",
};

export function MutateDialog({
  onSubmit,
  title,
  option = defaultValues,
  children,
}: MutateDialog) {
  const formMethods = useForm({});

  const handleSubmit = formMethods.handleSubmit(async (formData) => {});

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription hidden />
        <FormProvider {...formMethods}>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}></form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
