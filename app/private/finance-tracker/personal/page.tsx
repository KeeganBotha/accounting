import { List } from "../_components/List";
import { getPersonalAccounts } from "./action";

type PageProps = {
  searchParams: Promise<{ search: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { search } = await searchParams;
  const query = await getPersonalAccounts(search ?? "");
  const accounts = query?.data?.result ?? [];

  return <List accounts={accounts} />;
}
