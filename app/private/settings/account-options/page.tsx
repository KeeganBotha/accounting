import { getAccountTypes } from "./action";
import { AccountOptions } from "./AccountOptions";

type PageProps = {
  searchParams: Promise<{ search: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { search } = await searchParams;
  const query = await getAccountTypes(search ?? "");
  const options = query?.data?.result ?? [];

  return <AccountOptions options={options} />;
}
