import { AppBar } from "@/components/app-bar";
import { SideMenu } from "@/components/side-menu";
import { getSideMenu } from "./action";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const sideMenuItemsQuery = await getSideMenu();
  const sideMenuItems = sideMenuItemsQuery?.data ?? [];

  return (
    <div className="flex flex-row">
      <SideMenu />
      <div className="flex flex-col">
        <AppBar />
        <div>{children}</div>
      </div>
    </div>
  );
}
