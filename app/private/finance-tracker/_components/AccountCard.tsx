import { Icon, IconName } from "@/components/icon";
import { Card, CardContent } from "@/components/ui/card";

type AccountCardProps = {
  id: number;
  name: string;
  iconName: IconName;
  accountName: string;
};

export function AccountCard({
  iconName,
  id,
  name,
  accountName,
}: AccountCardProps) {
  return (
    <Card className="h-fit hover:scale-[99%] duration-300 transition-all cursor-pointer">
      <CardContent className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          <Icon className="h-4 w-4" iconName={iconName} />
          <p>{name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{accountName}</p>
      </CardContent>
    </Card>
  );
}
