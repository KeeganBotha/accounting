import { NextResponse } from "next/server";
import { utils, write } from "xlsx";

export async function GET() {
  const sheet = utils.aoa_to_sheet([
    ["date", "description", "amount", "balance"],
  ]);

  const wb = utils.book_new();
  utils.book_append_sheet(wb, sheet, "Template");

  const buffer = write(wb, { type: "buffer", bookType: "csv" });

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": "attachment; filename=csv_template.csv",
    },
  });
}
