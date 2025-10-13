"use server";

import { privateProcedure } from "@/lib/safe-action";
import { OptionSchema } from "@/components/optionsCrud/schema";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export const getTransactionCategoryGroups = privateProcedure
  .schema(z.string())
  .action(async ({ ctx, parsedInput: search }) => {
    const result =
      await ctx.svc.settingsService.getTransactionCategoryGroups(search);

    return { result };
  });

export const mutateTransactionCategoryGroup = privateProcedure
  .schema(OptionSchema)
  .action(async ({ ctx, parsedInput }) => {
    const result =
      await ctx.svc.settingsService.mutateTransactionCategoryGroup(parsedInput);
    revalidatePath("/private/settings/transaction-category-group", "layout");

    return {
      result,
      message: "Transaction Category Group Added/Updated Successfully",
    };
  });

export const deleteTransactionCategoryGroup = privateProcedure
  .schema(z.coerce.number())
  .action(async ({ ctx, parsedInput: id }) => {
    const result =
      await ctx.svc.settingsService.deleteTransactionCategoryGroup(id);
    revalidatePath("/private/settings/transaction-category-group", "layout");

    return {
      result,
      message: "Transaction Category Group Deleted Successfully",
    };
  });
