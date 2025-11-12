import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { DataTable } from "./DataTable";

interface AccountProps<TData, TValue> {
  accountId: number;
  data: TData[];
  options: OptionType[];
}

export function Account<TData, TValue>({
  accountId,
  data,
  options,
}: AccountProps<TData, TValue>) {
  return (
    <div className=" w-full">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <DataTable options={options} data={data} accountId={accountId} />
        </TabsContent>
        <TabsContent value="expenses">
          <div>Im an expense</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
