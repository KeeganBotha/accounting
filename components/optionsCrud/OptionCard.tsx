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

  const safeIconName = iconName ? iconName : "Not Selected";

  return (
    <Card className="h-fit relative">
      <CardContent>
        <div className="flex flex-row items-center justify-between grow gap-4">
          <div className="flex flex-col gap-2 flex-1 min-w-0">
            <p className="truncate">{text}</p>
            <p className="text-xs text-muted-foreground capitalize">
              {splitCamelCase(safeIconName)}
            </p>
          </div>
          {/* <div className="flex gap-4">
            <MutateDialog option={option} onSubmit={onEdit} title="Edit Option">
              <Button variant="outline" size="icon">
                <Icon iconName="Edit" />
              </Button>
            </MutateDialog>
            <DeleteDialog onDelete={handleDelete} name={text} />
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
}
