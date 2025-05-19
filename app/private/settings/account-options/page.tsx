import { DataTable } from "@/components/data-table";
import { columns } from "./columnts";
import { getAccountTypes } from "./action";

export default async function Page() {
  const query = await getAccountTypes();
  const data = query?.data?.result ?? [];

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
