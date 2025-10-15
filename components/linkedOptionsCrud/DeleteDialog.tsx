"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Icon } from "../icon";
import { Button } from "../ui/button";

type DeleteDialogProps = {
  onDelete: () => void;
  name: string;
};

export function DeleteDialog({ onDelete, name }: DeleteDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Icon iconName="Delete" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Delete {name}</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete {name}?
        </DialogDescription>
        <div className="flex flex-row justify-between">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button onClick={onDelete}>Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
