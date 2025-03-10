import { House, Settings } from "lucide-react";

const icons = {
  house: <House />,
  settings: <Settings />,
};

export type IconName = keyof typeof icons;

type IconProps = {
  iconName: IconName;
};

export function Icon({ iconName }: IconProps) {
  return icons[iconName];
}
