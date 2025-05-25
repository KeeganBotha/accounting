"use client";

import { Icon } from "../icon";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MutateDialog } from "./MutateDialog";
import { OptionCard } from "./OptionCard";

type OptionsCrudProps = {
  data: OptionType[];
  onEdit: (option: OptionType) => void;
  onAdd: (option: OptionType) => void;
  onDelete: (value: string) => void;
};

export function OptionsCrud({
  data,
  onAdd,
  onDelete,
  onEdit,
}: OptionsCrudProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <Input placeholder="Search..." className="max-w-xs" />
        <MutateDialog onSubmit={onAdd} title="Add Option">
          <Button>
            <Icon iconName="Add" /> Add
          </Button>
        </MutateDialog>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start w-full">
        {data.map((option) => {
          return (
            <OptionCard
              key={option.value}
              data={option}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        })}
      </div>
    </div>
  );
}
