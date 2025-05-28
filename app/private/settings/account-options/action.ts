"use server";

import { privateProcedure } from "@/lib/safe-action";
import { OptionSchema } from "@/components/optionsCrud/schema";
import { z } from "zod";

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

export const deleteAccountType = privateProcedure
  .schema(z.coerce.number())
  .action(async ({ ctx, parsedInput: id }) => {
    const result = await ctx.svc.settingsService.deleteAccountType(id);

    return { result, message: "Account Type Deleted Successfully" };
  });
