"use client";

import { Icon } from "../icon";
import { Search } from "../search";
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
    <div className="flex flex-col gap-4 grow w-full">
      <div className="flex flex-row justify-between">
        <Search />

        <MutateDialog onSubmit={onMutate} title="Add Option">
          <Button>
            <Icon iconName="Add" /> Add
          </Button>
        </MutateDialog>
      </div>

      <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {options.map((option) => (
          <OptionCard
            key={option.value}
            option={option}
            onDelete={onDelete}
            onEdit={onMutate}
          />
        ))}
      </div>
    </div>
  );
}
