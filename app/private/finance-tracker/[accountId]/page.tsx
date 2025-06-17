import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { getAccount } from "../personal/action";

type PageProps = {
  params: Promise<{ accountId: number }>;
};

export default async function Page({ params }: PageProps) {
  const { accountId } = await params;
  const query = await getAccount(accountId);
  const data = query?.data?.result ?? [];

  return <DataTable columns={columns} data={data} />;
}
