import { splitCamelCase } from "@/lib/utils";
import {
  Banknote,
  ChevronDown,
  House,
  LogOut,
  Menu,
  Moon,
  Settings,
  Sun,
  Calendar,
  Landmark,
  PiggyBank,
  CreditCard,
  DollarSign,
  TrendingUp,
  FileText,
  Umbrella,
  Ellipsis,
  Trash,
  Pen,
  Plus,
  LoaderCircle,
} from "lucide-react";
import { cloneElement } from "react";

const icons = {
  House: <House />,
  Menu: <Menu />,
  Moon: <Moon />,
  Sun: <Sun />,
  Logout: <LogOut />,
  ChevronDown: <ChevronDown />,
  Banknote: <Banknote />,
  Calendar: <Calendar />,
  Landmark: <Landmark />,
  PiggyBank: <PiggyBank />,
  CreditCard: <CreditCard />,
  DollarSign: <DollarSign />,
  TrendingUp: <TrendingUp />,
  FileText: <FileText />,
  Umbrella: <Umbrella />,
  Settingss: <Settings />,
  Ellipsis: <Ellipsis />,
  Delete: <Trash />,
  Edit: <Pen />,
  Add: <Plus />,
  Loading: <LoaderCircle />,
};

export type IconName = keyof typeof icons;

type IconProps = {
  iconName: IconName;
  className?: string;
};

export function Icon({ iconName, className = "" }: IconProps) {
  return cloneElement(icons[iconName], { className });
}

export const ICON_OPTIONS: OptionType[] = Object.keys(icons).map(
  (iconName) => ({
    text: splitCamelCase(iconName),
    value: iconName,
    iconName: iconName,
  })
);
