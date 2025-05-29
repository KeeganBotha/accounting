import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { SafeActionResult } from "next-safe-action";

import { getErrorMessage } from "./get-error-message";

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
    iconName: ((obj[iconName] as any).toString() as string) ?? "",
  };
}

export function splitCamelCase(word: string) {
  const words = word.split(/(?=[A-Z])/);
  const result = words.join(" ");

  return result;
}

export function handleSafeActionResult<T>(
  result: SafeActionResult<any, any, any, any, any, T> | undefined
) {
  if (!result) throw new Error("Result cannot be undefined.");

  if (result.serverError && global.window && !!window.location) {
    toast.error(getErrorMessage(result.serverError));
  }

  if (
    !!result?.data &&
    typeof result.data == "object" &&
    "message" in result.data &&
    global.window &&
    !!window.location
  ) {
    toast.success(getErrorMessage(result.data.message));
  }

  return result.data as NonNullable<T>;
}
