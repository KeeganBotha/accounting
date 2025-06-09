import { getMembers } from "./action";

type PageProps = {
  searchParams: Promise<{ search: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  const query = await getMembers();
  const members = query?.data?.result ?? [];

  return <Members members={members} />;
}
