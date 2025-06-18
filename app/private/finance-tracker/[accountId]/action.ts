"use server";

import { privateProcedure } from "@/lib/safe-action";
import { AccountRecordSchema } from "../_data/financeTrackerSchema";

export const mutateAccountRecord = privateProcedure
  .schema(AccountRecordSchema)
  .action(async ({ ctx, parsedInput }) => {
    const result =
      await ctx.svc.financeTrackerService.mutateAccountRecord(parsedInput);

    return {
      message: "Account record updated successfully.",
      result,
    };
  });
