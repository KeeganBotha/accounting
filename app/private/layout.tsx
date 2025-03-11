import { AppBar } from "@/components/app-bar";
import { SideMenu } from "@/components/side-menu";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
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
