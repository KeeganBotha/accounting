"use client";

import { privateProcedure } from "@/lib/safe-action";
import { z } from "zod";

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
  .schema(z.string())
  .action(async ({ ctx, parsedInput: search }) => {
    const result =
      await ctx.svc.financeTrackerService.getPersonalAccounts(search);

    return { result };
  });

export const deleteAccount = privateProcedure
  .schema(z.string())
  .action(async ({ ctx, parsedInput: search }) => {
    const result =
      await ctx.svc.financeTrackerService.getPersonalAccounts(search);

    return { result };
  });
