import { Icon } from "../icon";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

type OptionsCrudProps = {
  data: OptionType[];
};

export function OptionsCrud({ data }: OptionsCrudProps) {
  return (
    <div className="flex ">
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start w-full">
        {data.map((option) => {
          return <OptionCard key={option.value} data={option} />;
        })}
      </div>
    </div>
  );
}

type OptionCardProps = {
  data: OptionType;
};

function OptionCard({ data }: OptionCardProps) {
  const { iconName, text, value } = data;

  return (
    <Card className="min-w-[19rem] h-fit">
      <CardContent>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-2">
            <p>{text}</p>
            <p className="text-xs text-muted-foreground">{iconName}</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="icon">
              <Icon iconName="edit" />
            </Button>
            <Button variant="outline" size="icon">
              <Icon iconName="delete" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
