import { getSideMenu } from "@/app/private/action";
import { InferSafeActionFnResult } from "next-safe-action";
import Link from "next/link";

type SideMenuProps = {
  data: NonNullable<InferSafeActionFnResult<typeof getSideMenu>["data"]>;
};

export function SideMenu({ data }: SideMenuProps) {
  return (
    <div className="w-[10rem] h-screen flex flex-col border-r">
      {data.map((sideMenuItem) => {
        return <SideMenuButton key={sideMenuItem.id} data={sideMenuItem} />;
      })}
    </div>
  );
}

type SideMenuButtonProps = {
  data: NonNullable<InferSafeActionFnResult<typeof getSideMenu>["data"]>[0];
};

function SideMenuButton({ data }: SideMenuButtonProps) {
  const { iconName, id, name, parentId, path } = data;

  return (
    <Link href={path}>
      <div>{name}</div>
    </Link>
  );
}
