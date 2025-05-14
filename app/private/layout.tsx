import { AppBar } from "@/components/app-bar";
import { AppSidebar } from "@/components/app-side-bar";
import { SidebarProvider } from "@/components/ui/sidebar";

import { getSideMenu } from "./action";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const itemsQuery = await getSideMenu();
  const items = itemsQuery?.data ?? [];

  return (
    <SidebarProvider>
      <AppSidebar items={items} />
      <AppBar>
        <main>{children}</main>
      </AppBar>
    </SidebarProvider>
  );
}
