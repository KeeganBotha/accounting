"use client";

import Link from "next/link";
import { InferSafeActionFnResult } from "next-safe-action";

import { getSideMenu } from "@/app/private/action";

import { Icon } from "../icon";
import React from "react";
import { cn } from "@/lib/utils";

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
  const [isOpen, setIsOpen] = React.useState(false);

  const { iconName, id, name, parentId, path, children } = data;
  const hasChildren = !!children.length;

  function handleToggleOpen() {
    setIsOpen(!isOpen);
  }

  if (hasChildren)
    return (
      <div
        onClick={handleToggleOpen}
        className="flex flex-row p-2 hover:bg-gray-200 duration-300 transition-colors justify-between items-center cursor-pointer"
      >
        <div className="flex flex-row gap-2 items-center">
          <Icon iconName={iconName as any} className="h-4 w-4" />
          <div className="font-semibold">{name}</div>
        </div>
        {hasChildren && (
          <Icon
            iconName="chevronDown"
            className={cn(
              "w-4 h-4 transition-all duration-300",
              isOpen && "rotate-180 "
            )}
          />
        )}
      </div>
    );

  return (
    <Link
      href={path}
      className="flex flex-row p-2 hover:bg-gray-200 duration-300 transition-colors"
    >
      <div className="flex flex-row gap-2 items-center">
        <Icon iconName={iconName as any} className="h-4 w-4" />
        <div className="font-semibold">{name}</div>
      </div>
    </Link>
  );
}
