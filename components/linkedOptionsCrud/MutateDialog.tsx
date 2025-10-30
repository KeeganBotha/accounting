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
import { LinkedOptionSchema } from "./schema";
import { RHFInput } from "../controlled-components/RHFInput";
import { RHFSelect } from "../controlled-components/RHFSelect";
import { RHFDiagnostic } from "../controlled-components/RHFDiagnostic";

type MutateDialog = {
  title: string;
  option?: LinkedOptionType;
  onSubmit: (option: LinkedOptionType) => Promise<void>;
  children: React.ReactNode;
  linkedOptions: OptionType[];
  linkedOptionLabel: string;
};

const defaultValues = {
  text: "",
  value: "0",
  iconName: "",
  linkedOptionId: null,
};

export function MutateDialog({
  onSubmit,
  title,
  option = defaultValues,
  children,
  linkedOptions,
  linkedOptionLabel,
}: MutateDialog) {
  const formMethods = useForm({
    resolver: zodResolver(LinkedOptionSchema),
    defaultValues: {
      ...option,
      linkedOptionId: option.linkedOptionId?.toString() ?? "",
    },
  });

  const handleSubmit = formMethods.handleSubmit(async (formData) => {
    await onSubmit(formData);
    formMethods.reset();
  });

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription hidden />
        <FormProvider {...formMethods}>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <RHFDiagnostic />
            <RHFInput label="Type" name="text" />
            <RHFSelect label="Icon" name="iconName" options={ICON_OPTIONS} />
            <RHFSelect
              label={linkedOptionLabel}
              name="linkedOptionId"
              options={linkedOptions}
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
