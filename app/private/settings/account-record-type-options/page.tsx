import { AccountRecordTypeOptions } from "./AccountRecordTypeOptions";
import { getAccountRecordTypeOptions } from "./action";

type PageProps = {
  searchParams: Promise<{ search: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { search } = await searchParams;
  const query = await getAccountRecordTypeOptions(search ?? "");
  const options = query?.data?.result ?? [];

  return <AccountRecordTypeOptions options={options} />;
}
