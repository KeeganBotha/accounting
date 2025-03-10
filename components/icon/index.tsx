import { House, Settings } from "lucide-react";

const icons = {
  house: <House />,
  settings: <Settings />,
};

type IconProps = {
  iconName: keyof typeof icons;
};

export function Icon({ iconName }: IconProps) {
  return icons[iconName];
}
