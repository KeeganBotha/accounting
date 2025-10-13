import { TransactionCategory } from "./TransactionCategory";
import { getTransactionCategories } from "./action";

type PageProps = {
  searchParams: Promise<{ search: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { search } = await searchParams;
  const query = await getTransactionCategories(search ?? "");
  const options = query?.data?.result ?? [];

  return <TransactionCategory options={options} />;
}
