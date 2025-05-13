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
import { cloneElement } from "react";

const icons = {
  house: <House />,
  settings: <Settings />,
  menu: <Menu />,
  moon: <Moon />,
  sun: <Sun />,
  logout: <LogOut />,
  chevronDown: <ChevronDown />,
  banknote: <Banknote />,
  None: <></>,
};

export type IconName = keyof typeof icons;

type IconProps = {
  iconName: IconName;
  className?: string;
};

export function Icon({ iconName, className = "" }: IconProps) {
  return cloneElement(icons[iconName], { className });
}
