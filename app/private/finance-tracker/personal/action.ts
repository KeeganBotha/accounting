"use server";

import { privateProcedure } from "@/lib/safe-action";
import { z } from "zod";
import { AccountSchema } from "../_data/financeTrackerSchema";
import { revalidatePath } from "next/cache";

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
    revalidatePath("private/finance-tracker/personal", "layout");

    return { result };
  });

export const deleteAccount = privateProcedure
  .schema(z.coerce.number())
  .action(async ({ ctx, parsedInput: accountId }) => {
    const result = await ctx.svc.financeTrackerService.deleteAccount(accountId);
    revalidatePath("private/finance-tracker/personal", "layout");

    return { result };
  });

export const getAccount = privateProcedure
  .schema(z.coerce.number())
  .action(async ({ ctx, parsedInput: accountId }) => {
    const result = await ctx.svc.financeTrackerService.getAccount(accountId);

    return { result };
  });
