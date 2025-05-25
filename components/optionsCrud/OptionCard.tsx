import { splitCamelCase } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { MutateDialog } from "./MutateDialog";
import { Button } from "../ui/button";
import { Icon } from "../icon";
import { DeleteDialog } from "./DeleteDialog";

type OptionCardProps = {
  data: OptionType;
  onEdit: (option: OptionType) => void;
  onDelete: (value: string) => void;
};

export function OptionCard({ data, onDelete, onEdit }: OptionCardProps) {
  const { iconName, text, value } = data;

  return (
    <Card className="min-w-[19rem] h-fit">
      <CardContent>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-2">
            <p>{text}</p>
            <p className="text-xs text-muted-foreground capitalize">
              {splitCamelCase(iconName)}
            </p>
          </div>
          <div className="flex gap-4">
            <MutateDialog onSubmit={onEdit} title="Edit Option">
              <Button variant="outline" size="icon">
                <Icon iconName="Edit" />
              </Button>
            </MutateDialog>
            <DeleteDialog onDelete={onDelete} name={text} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
