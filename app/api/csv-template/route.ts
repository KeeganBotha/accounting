import { NextResponse } from "next/server";
import { utils, write } from "xlsx";

export async function GET() {
  const sheet = utils.aoa_to_sheet([
    ["Date", "Description", "Amount (R)", "Balance (R)"],
  ]);

  const wb = utils.book_new();
  utils.book_append_sheet(wb, sheet, "Template");
  const buffer = write(wb, { type: "buffer", bookType: "xlsx" });

  return new NextResponse(buffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": "attachment; filename=transaction_template.xlsx",
    },
  });
}
