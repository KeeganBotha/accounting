import { splitCamelCase } from "@/lib/utils";
import { orderBy } from "lodash";
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
  Search,
  Users,
  Download,
  Upload,
  UtilityPole,
  UtensilsCrossed,
  Car,
  Store
} from "lucide-react";
import { cloneElement } from "react";

const icons = {


  Store: <Store />,
  Car: <Car />,
  UtensilsCrossed: <UtensilsCrossed />,
  UtilityPole: <UtilityPole />,
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
  Search: <Search />,
  Users: <Users />,
  Download: <Download />,
  Upload: <Upload />,
};

export type IconName = keyof typeof icons;

type IconProps = {
  iconName: IconName;
  className?: string;
};

export function Icon({ iconName, className = "" }: IconProps) {
  return cloneElement(icons[iconName], { className });
}

const UNORDERED_ICON_OPTIONS: OptionType[] = Object.keys(icons).map(
  (iconName) => ({
    text: splitCamelCase(iconName),
    value: iconName,
    iconName: iconName,
  })
);

export const ICON_OPTIONS: OptionType[] = orderBy(UNORDERED_ICON_OPTIONS, "text");