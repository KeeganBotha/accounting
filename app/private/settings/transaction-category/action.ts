"use server";

import { privateProcedure } from "@/lib/safe-action";
import { OptionSchema } from "@/components/optionsCrud/schema";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export const getAccountTypes = privateProcedure
  .schema(z.string())
  .action(async ({ ctx, parsedInput: search }) => {
    const result = await ctx.svc.settingsService.getAccountTypes(search);

    return { result };
  });

export const mutateAccountType = privateProcedure
  .schema(OptionSchema)
  .action(async ({ ctx, parsedInput }) => {
    const result = await ctx.svc.settingsService.mutateAccountType(parsedInput);
    revalidatePath("/private/settings/account-options", "layout");

    return { result, message: "Account Type Added/Updated Successfully" };
  });

export const deleteAccountType = privateProcedure
  .schema(z.coerce.number())
  .action(async ({ ctx, parsedInput: id }) => {
    const result = await ctx.svc.settingsService.deleteAccountType(id);
    revalidatePath("/private/settings/account-options", "layout");

    return { result, message: "Account Type Deleted Successfully" };
  });
