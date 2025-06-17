"use client";

import { DialogClose } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

type MutateDialog = {
  title: string;
  children: React.ReactNode;
  form: React.ReactNode;
  onSubmit: () => Promise<void>;
};

export function MutateDialog({
  onSubmit,
  title,
  children,
  form,
}: MutateDialog) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription hidden />
        {form}
        <div className="flex flex-row justify-between">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" onClick={onSubmit}>
              Submit
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
