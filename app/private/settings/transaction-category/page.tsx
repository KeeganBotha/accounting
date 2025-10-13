import { AccountType } from "./TransactionCategory";
import { getAccountTypes } from "./action";

type PageProps = {
  searchParams: Promise<{ search: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { search } = await searchParams;
  const query = await getAccountTypes(search ?? "");
  const options = query?.data?.result ?? [];

  return <AccountType options={options} />;
}
