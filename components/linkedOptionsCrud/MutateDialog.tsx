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
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ICON_OPTIONS } from "../icon";
import { OptionSchema } from "./schema";
import { RHFInput } from "../controlled-components/RHFInput";
import { RHFSelect } from "../controlled-components/RHFSelect";

type MutateDialog = {
  title: string;
  option?: OptionType;
  onSubmit: (option: OptionType) => Promise<void>;
  children: React.ReactNode;
  categoryGroupOptions: OptionType[];
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
  categoryGroupOptions,
}: MutateDialog) {
  const formMethods = useForm({
    resolver: zodResolver(OptionSchema),
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
            <RHFInput label="Type" name="text" />
            <RHFSelect label="Icon" name="iconName" options={ICON_OPTIONS} />
            <RHFSelect
              label="Category Group"
              name="categoryGroup"
              options={categoryGroupOptions}
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
