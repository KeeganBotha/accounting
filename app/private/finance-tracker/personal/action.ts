"use client";

import { privateProcedure } from "@/lib/safe-action";
import { z } from "zod";
import { AccountSchema } from "../_data/financeTrackerSchema";

export const getPersonalAccounts = privateProcedure
  .schema(z.string())
  .action(async ({ ctx, parsedInput: search }) => {
    const result =
      await ctx.svc.financeTrackerService.getPersonalAccounts(search);

    return { result };
  });

export const getFamilyAccounts = privateProcedure
  .schema(z.string())
  .action(async ({ ctx, parsedInput: search }) => {
    const result =
      await ctx.svc.financeTrackerService.getPersonalAccounts(search);

    return { result };
  });

export const mutateAccount = privateProcedure
  .schema(AccountSchema)
  .action(async ({ ctx, parsedInput }) => {
    const result =
      await ctx.svc.financeTrackerService.mutateAccount(parsedInput);

    return { result };
  });

export const deleteAccount = privateProcedure
  .schema(z.string())
  .action(async ({ ctx, parsedInput: accountId }) => {
    const result = await ctx.svc.financeTrackerService.deleteAccount(accountId);

    return { result };
  });
