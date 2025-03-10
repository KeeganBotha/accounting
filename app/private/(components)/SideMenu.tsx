type SideMenuConfigType = {
  title: string;
  path: string;
  regex?: string;
  iconName?: string;
  children?: SideMenuConfigType[];
};

const SideMenuConfi: SideMenuConfigType[] = [
  {
    title: "Home",
    path: "",
  },
];

export function SideMenu() {}
