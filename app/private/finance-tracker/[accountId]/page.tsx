type PageProps = {
  params: Promise<{ accountId: number }>;
};

export default async function Page({ params }: PageProps) {
  const { accountId } = await params;

  return <div>I am ID {accountId} - You want to put a table here</div>;
}
