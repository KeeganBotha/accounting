import { getTransactionCategoryGroups } from "../transaction-category-group/action";
import { TransactionCategory } from "./TransactionCategory";
import { getTransactionCategories } from "./action";

type PageProps = {
  searchParams: Promise<{ search: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { search } = await searchParams;

  const [query, groupQuery] = await Promise.all([
    getTransactionCategories(search ?? ""),
    getTransactionCategoryGroups(""),
  ]);

  const options = query?.data?.result ?? [];
  const transactionCategoryGroupOptions = groupQuery?.data?.result ?? [];

  return (
    <TransactionCategory
      options={options}
      transactionCategoryGroupOptions={transactionCategoryGroupOptions}
    />
  );
}
