"use client";

import { splitCamelCase } from "@/lib/utils";

import { Icon } from "../icon";
import { Button } from "../ui/button";
import { DeleteDialog } from "./DeleteDialog";
import { MutateDialog } from "./MutateDialog";
import { Card, CardContent } from "../ui/card";

type OptionCardProps = {
  option: OptionType;
  onEdit: (option: OptionType) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
};

export function OptionCard({ option, onDelete, onEdit }: OptionCardProps) {
  const { iconName, text, value } = option;

  function handleDelete() {
    onDelete(+(value ?? 0));
  }

  return (
    <Card className="h-fit">
      <CardContent>
        <div className="flex flex-row items-center grow">
          <div className="flex flex-col gap-2 flex-grow">
            <p>{text}</p>
            <p className="text-xs text-muted-foreground capitalize">
              {splitCamelCase(iconName)}
            </p>
          </div>
          <div className="flex gap-4">
            <MutateDialog option={option} onSubmit={onEdit} title="Edit Option">
              <Button variant="outline" size="icon">
                <Icon iconName="Edit" />
              </Button>
            </MutateDialog>
            <DeleteDialog onDelete={handleDelete} name={text} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
