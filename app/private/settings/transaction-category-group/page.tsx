import { TransactionCategoryGroup } from "./TransactionCategoryGroup";
import { getTransactionCategoryGroups } from "./action";

type PageProps = {
  searchParams: Promise<{ search: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { search } = await searchParams;
  const query = await getTransactionCategoryGroups(search ?? "");
  const options = query?.data?.result ?? [];

  return <TransactionCategoryGroup options={options} />;
}
