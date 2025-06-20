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
      <div className="flex flex-grow h-screen overflow-hidden ">
        <AppSidebar items={items} />
        <div className="flex h-screen flex-col flex-grow w-full">
          <AppBar>{children}</AppBar>
        </div>
      </div>
    </SidebarProvider>
  );
}
