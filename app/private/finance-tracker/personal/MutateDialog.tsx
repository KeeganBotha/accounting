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
import { z } from "zod";

type MutateDialog = {
  title: string;
  option?: OptionType;
  onSubmit: (data: any) => Promise<void>;
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
  const formMethods = useForm({
    resolver: zodResolver(z.object({})),
    defaultValues: { ...option },
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
            Mutate Here
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
