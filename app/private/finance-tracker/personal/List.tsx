import { Icon } from "@/components/icon";
import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { MutateDialog } from "./MutateDialog";

type ListProps = {
  accounts: any[];
};

export function List({ accounts }: ListProps) {
  return (
    <div className="flex flex-col gap-4 grow w-full">
      <div className="flex flex-row justify-between">
        <Search />

        <MutateDialog onSubmit={} title="Add Option">
          <Button>
            <Icon iconName="Add" /> Add
          </Button>
        </MutateDialog>
      </div>

      <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {accounts.map((account) => (
          <div>Accounts</div>
        ))}
      </div>
    </div>
  );
}
