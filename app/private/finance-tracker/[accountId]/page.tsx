import { columns } from "./columns";
import { DataTable } from "./DataTable";
import { getAccount } from "../personal/action";
import { getTransactionCategories } from "../../settings/transaction-category/action";

type PageProps = {
  params: Promise<{ accountId: number }>;
};

export default async function Page({ params }: PageProps) {
  const { accountId } = await params;

  const [query, optionsQuery] = await Promise.all([
    getAccount(accountId),
    getTransactionCategories(""),
  ]);

  const data = query?.data?.result ?? [];
  const options = optionsQuery?.data?.result ?? [];

  return (
    <DataTable
      columns={columns}
      data={data}
      accountId={accountId}
      options={options}
    />
  );
}
