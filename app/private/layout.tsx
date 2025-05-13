import { getSideMenu } from "./action";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-side-bar";

import { AppBar } from "@/components/app-bar";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const itemsQuery = await getSideMenu();
  const items = itemsQuery?.data ?? [];

  return (
    <SidebarProvider>
      <AppSidebar items={items} />
      <AppBar />
      <main>{children}</main>
    </SidebarProvider>
  );
}
