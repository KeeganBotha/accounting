import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function asOption<T extends { id: number }>(
  obj: T,
  text: keyof Omit<T, "id">,
  iconName: keyof Omit<T, "id">
) {
  return {
    value: obj.id.toString(),
    text: (obj[text] as any).toString() as string,
    iconName: (obj[iconName] as any).toString() as string,
  };
}
