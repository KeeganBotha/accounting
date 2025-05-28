"use server";

import { privateProcedure } from "@/lib/safe-action";
import { OptionSchema } from "@/components/optionsCrud/schema";

export const getAccountTypes = privateProcedure.action(async ({ ctx }) => {
  const result = await ctx.svc.settingsService.getAccountTypes();

  return { result };
});

export const mutateAccountType = privateProcedure
  .schema(OptionSchema)
  .action(async ({ ctx, parsedInput }) => {
    const result = await ctx.svc.settingsService.mutateAccountType(parsedInput);

    return { result, message: "Account Type Added/Updated Successfully" };
  });

export const deleteAccountType = privateProcedure.action(async ({ ctx }) => {
  const result = await ctx.svc.settingsService.getAccountTypes();

  return { result, message: "Account Type Deleted Successfully" };
});
