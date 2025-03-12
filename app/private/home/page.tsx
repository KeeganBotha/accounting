import { auth } from "@/auth";
import { Icon } from "@/components/icon";

export default async function Home() {
  const user = await auth();

  return (
    <div className="pl-4">
      <Icon iconName="house" />
    </div>
  );
}
