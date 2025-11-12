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
    <Tabs>
      <TabsList>
        <TabsTrigger value="account"></TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <DataTable options={options} data={data} accountId={accountId} />;
      </TabsContent>
    </Tabs>
  );
}
