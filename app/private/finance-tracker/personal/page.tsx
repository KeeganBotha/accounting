import { List } from "../List";
import { getPersonalAccounts } from "./action";
import { getAccountTypes } from "../../settings/account-type/action";

type PageProps = {
  searchParams: Promise<{ search: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { search } = await searchParams;

  const [query, accountTypeOptionsQuery] = await Promise.all([
    getPersonalAccounts(search ?? ""),
    getAccountTypes(""),
  ]);

  const accounts = query?.data?.result ?? [];
  const accountTypeOptions = accountTypeOptionsQuery?.data?.result ?? [];

  return <List accounts={accounts} accountTypeOptions={accountTypeOptions} />;
}
