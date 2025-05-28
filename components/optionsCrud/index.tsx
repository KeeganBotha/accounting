"use client";

import { Icon } from "../icon";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { OptionCard } from "./OptionCard";
import { MutateDialog } from "./MutateDialog";

type OptionsCrudProps = {
  options: OptionType[];
  onMutate: (option: OptionType) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
};

export function OptionsCrud({ onMutate, options, onDelete }: OptionsCrudProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <Input placeholder="Search..." className="max-w-xs" />
        <MutateDialog onSubmit={onMutate} title="Add Option">
          <Button>
            <Icon iconName="Add" /> Add
          </Button>
        </MutateDialog>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start w-full">
        {options.map((option) => {
          return (
            <OptionCard
              key={option.value}
              data={option}
              onDelete={onDelete}
              onEdit={onMutate}
            />
          );
        })}
      </div>
    </div>
  );
}
