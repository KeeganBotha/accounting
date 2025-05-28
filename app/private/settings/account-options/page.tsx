import { getAccountTypes } from "./action";
import { AccountOptions } from "./AccountOptions";

export default async function Page() {
  const query = await getAccountTypes();
  const options = query?.data?.result ?? [];

  return <AccountOptions options={options} />;
}
