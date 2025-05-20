import { OptionsCrud } from "@/components/optionsCrud";
import { getAccountTypes } from "./action";

export default async function Page() {
  const query = await getAccountTypes();
  const data = query?.data?.result ?? [];

  return <OptionsCrud data={data} />;
}
