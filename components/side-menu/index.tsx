import { IconName } from "@/components/icon";

type SideMenuConfigType = {
  title: string;
  path: string;
  regex?: string;
  iconName: IconName;
  children?: SideMenuConfigType[];
};

const SideMenuConfi: SideMenuConfigType[] = [
  {
    title: "Home",
    path: "",
    iconName: "house",
  },
  {
    title: "Settings",
    path: "",
    iconName: "settings",
  },
];

export function SideMenu() {
  return <div className="bg-black w-[10rem] h-screen"></div>;
}
