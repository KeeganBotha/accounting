import Link from "next/link";
import { InferSafeActionFnResult } from "next-safe-action";

import { getSideMenu } from "@/app/private/action";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import { Icon } from "../icon";
import { Header } from "./Header";
import { Footer } from "./footer1";
import { SideBarButton } from "./SideBarButton";

type AppSidebarProps = {
  items: NonNullable<InferSafeActionFnResult<typeof getSideMenu>["data"]>;
};

export function AppSidebar({ items }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Header />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) => {
              const { children } = item;
              const hasChildren = children.length > 0;

              if (hasChildren)
                return <SideBarButton key={item.id} item={item} />;

              return (
                <Link href={item.path} key={item.id}>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip={item.name}>
                      <Icon iconName={item.iconName as any} />
                      <span>{item.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </Link>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Footer />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
