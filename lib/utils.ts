import { z } from "zod";
import { toast } from "sonner";
import { format } from "date-fns";
import { utils, read } from "xlsx";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { SafeActionResult } from "next-safe-action";

import { AccountCsvShapeSchema } from "@/app/private/finance-tracker/_data/financeTrackerSchema";

import { getErrorMessage } from "./get-error-message";

const REQUIRED_CSV_COLUMNS = ["date", "description", "amount", "balance"];

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

export function validateAndParseCsv(file: any) {
  const result: z.infer<typeof AccountCsvShapeSchema>[] = [];
  const workbook = read(file, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const rows = utils.sheet_to_json(worksheet, { defval: "", raw: false });

  const actualColumnNames = Object.keys(rows[0] || {});
  const missingColumns = REQUIRED_CSV_COLUMNS.filter(
    (name) => !actualColumnNames.includes(name)
  );

  if (missingColumns.length)
    throw new Error(`Missing columns: ${missingColumns.join(", ")}`);

  const cleanedRows = rows.map((row) =>
    Object.fromEntries(
      REQUIRED_CSV_COLUMNS.map((col) => [
        col,
        (row as Record<string, any>)[col],
      ])
    )
  );

  for (const [i, cleanRow] of cleanedRows.entries()) {
    const parsed = AccountCsvShapeSchema.safeParse(cleanRow);

    if (!parsed.success) {
      const error = parsed.error.issues
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join(", ");

      throw new Error(`Row ${i + 1} invalid → ${error}`);
    }

    result.push(parsed.data);
  }

  return result;
}
