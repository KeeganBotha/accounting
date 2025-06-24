import { getAccountTypes } from "../../settings/account-type-options/action";
import { List } from "../_components/List";
import { getPersonalAccounts } from "./action";

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
