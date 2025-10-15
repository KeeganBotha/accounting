"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { privateProcedure } from "@/lib/safe-action";

import { LinkedOptionSchema } from "@/components/linkedOptionsCrud/schema";

export const getTransactionCategories = privateProcedure
  .schema(z.string())
  .action(async ({ ctx, parsedInput: search }) => {
    const result =
      await ctx.svc.settingsService.getTransactionCategories(search);

    return { result };
  });

export const mutateTransactionCategory = privateProcedure
  .schema(LinkedOptionSchema)
  .action(async ({ ctx, parsedInput }) => {
    const result =
      await ctx.svc.settingsService.mutateTransactionCategory(parsedInput);
    revalidatePath("/private/settings/transaction-category", "layout");

    return {
      result,
      message: "Transaction Category Added/Updated Successfully",
    };
  });

export const deleteTransactionCategory = privateProcedure
  .schema(z.coerce.number())
  .action(async ({ ctx, parsedInput: id }) => {
    const result = await ctx.svc.settingsService.deleteTransactionCategory(id);
    revalidatePath("/private/settings/transaction-category", "layout");

    return { result, message: "Transaction Category Deleted Successfully" };
  });
