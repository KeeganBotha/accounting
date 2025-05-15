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
  calendar: <Calendar />,
  landmark: <Landmark />,
  piggyBank: <PiggyBank />,
  creditCard: <CreditCard />,
  dollarSign: <DollarSign />,
  trendingUp: <TrendingUp />,
  fileText: <FileText />,
  umbrella: <Umbrella />,
};

export type IconName = keyof typeof icons;

type IconProps = {
  iconName: IconName;
  className?: string;
};

export function Icon({ iconName, className = "" }: IconProps) {
  return cloneElement(icons[iconName], { className });
}
