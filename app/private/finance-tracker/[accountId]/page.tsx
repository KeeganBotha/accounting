import { columns } from "./columns";
import { getAccount } from "../personal/action";
import { DataTable } from ".";
import { getAccountRecordTypeOptions } from "../../settings/account-record-type-options/action";

type PageProps = {
  params: Promise<{ accountId: number }>;
};

export default async function Page({ params }: PageProps) {
  const { accountId } = await params;

  const [query, optionsQuert] = await Promise.all([
    getAccount(accountId),
    getAccountRecordTypeOptions(""),
  ]);

  const data = query?.data?.result ?? [];
  const options = optionsQuert?.data?.result ?? [];

  return (
    <DataTable
      columns={columns}
      data={data}
      accountId={accountId}
      options={options}
    />
  );
}
