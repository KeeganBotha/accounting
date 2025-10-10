import { columns } from "./columns";
import { DataTable } from "./DataTable";
import { getAccount } from "../personal/action";

type PageProps = {
  params: Promise<{ accountId: number }>;
};

export default async function Page({ params }: PageProps) {
  const { accountId } = await params;

  const query = await getAccount(accountId);

  const data = query?.data?.result ?? [];

  return (
    <DataTable
      columns={columns}
      data={data}
      accountId={accountId}
      options={[]}
    />
  );
}
