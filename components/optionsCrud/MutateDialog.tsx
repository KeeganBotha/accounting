import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { OptionSchema } from "./schema";
import { ICON_OPTIONS, IconName } from "../icon";
import { RHFInput } from "../controlled-components/RHFInput";
import { RHFSelect } from "../controlled-components/RHFSelect";

type MutateDialog = {
  title: string;
  option?: OptionType;
  onSubmit: (option: OptionType) => void;
  children: React.ReactNode;
};

export function MutateDialog({
  onSubmit,
  title,
  option,
  children,
}: MutateDialog) {
  const formMethods = useForm({
    resolver: zodResolver(OptionSchema),
    defaultValues: {
      text: "",
      value: "0",
      iconName: "",
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription hidden />
        <FormProvider {...formMethods}>
          <form>
            <RHFInput label="Type" name="text" />
            <RHFSelect label="" name="" options={ICON_OPTIONS} />
            <div className="flex flex-row gap-4 items-center">
              <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
              <Button>Submit</Button>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
