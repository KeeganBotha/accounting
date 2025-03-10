import { AppBar } from "./(components)/AppBar";
import { SideMenu } from "./(components)/SideMenu";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col">
      <AppBar />
      <div className="flex flex-row">
        <SideMenu />
        <div>{children}</div>
      </div>
    </div>
  );
}
