import Link from "next/link";
import { InferSafeActionFnResult } from "next-safe-action";

import { getSideMenu } from "@/app/private/action";

import { Icon } from "../icon";

type SideMenuProps = {
  data: NonNullable<InferSafeActionFnResult<typeof getSideMenu>["data"]>;
};

export function SideMenu({ data }: SideMenuProps) {
  return (
    <div className="w-[15rem] h-screen flex flex-col border-r p-4 gap-1">
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
  const { iconName, id, name, parentId, path, children } = data;
  const hasChildren = !!children.length;

  return (
    <Link
      href={path}
      className="flex flex-row gap-4 p-2 hover:bg-gray-200 duration-300 transition-colors"
    >
      <div>
        <Icon iconName={iconName as any} />
        <div className="font-semibold">{name}</div>
      </div>
      {hasChildren && <Icon iconName="chevronDown" />}
    </Link>
  );
}
