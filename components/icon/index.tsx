import {
  Banknote,
  ChevronDown,
  House,
  LogOut,
  Menu,
  Moon,
  Settings,
  Sun,
} from "lucide-react";

const icons = {
  house: <House />,
  settings: <Settings />,
  menu: <Menu />,
  moon: <Moon />,
  sun: <Sun />,
  logout: <LogOut />,
  chevronDown: <ChevronDown />,
  banknote: <Banknote />,
};

export type IconName = keyof typeof icons;

type IconProps = {
  iconName: IconName;
};

export function Icon({ iconName }: IconProps) {
  return icons[iconName];
}
