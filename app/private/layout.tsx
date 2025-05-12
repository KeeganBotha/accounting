import { getSideMenu } from "./action";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-side-bar";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const sideMenuItemsQuery = await getSideMenu();
  const sideMenuItems = sideMenuItemsQuery?.data ?? [];

  return (
    <SidebarProvider>
      <AppSidebar items={sideMenuItems} />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
