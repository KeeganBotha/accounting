"use server";

import { privateProcedure } from "@/lib/safe-action";
import { AccountRecordSchema } from "../_data/financeTrackerSchema";

export const mutateAccountRecord = privateProcedure
  .schema(AccountRecordSchema)
  .action(async ({ ctx, parsedInput }) => {
    const result = ctx.svc.financeTrackerService.mutateAccountRecord();

    return {
      message: "Account record updated successfully.",
      result,
    };
  });
