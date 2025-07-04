"use server";

import { privateProcedure } from "@/lib/safe-action";
import { AccountRecordSchema } from "../_data/financeTrackerSchema";
import { revalidatePath } from "next/cache";

export const mutateAccountRecord = privateProcedure
  .schema(AccountRecordSchema)
  .action(async ({ ctx, parsedInput }) => {
    const result =
      await ctx.svc.financeTrackerService.mutateAccountRecord(parsedInput);
    revalidatePath("/private/finance-tracker/[accountId]", "layout");

    return {
      message: "Account record updated successfully.",
      result,
    };
  });
