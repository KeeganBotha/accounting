"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

import { privateProcedure } from "@/lib/safe-action";
import { OptionSchema } from "@/components/optionsCrud/schema";

export const getAccountRecordTypeOptions = privateProcedure
  .schema(z.string())
  .action(async ({ ctx, parsedInput: search }) => {
    const result =
      await ctx.svc.settingsService.getAccountRecordTypeOptions(search);

    return { result };
  });

export const mutateAccountRecordType = privateProcedure
  .schema(OptionSchema)
  .action(async ({ ctx, parsedInput }) => {
    const result =
      await ctx.svc.settingsService.mutateAccountRecordType(parsedInput);
    revalidatePath("/private/settings/account-record-type-options", "layout");

    return {
      result,
      message: "Account Record Type Added/Updated Successfully",
    };
  });

export const deleteAccountRecordType = privateProcedure
  .schema(z.coerce.number())
  .action(async ({ ctx, parsedInput: id }) => {
    const result = await ctx.svc.settingsService.deleteAccountRecordType(id);
    revalidatePath("/private/settings/account-record-type-options", "layout");

    return { result, message: "Account Record Type Deleted Successfully" };
  });
