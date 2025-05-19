"use server";

import { privateProcedure } from "@/lib/safe-action";

export const getAccountTypes = privateProcedure.action(async ({ ctx }) => {
  const result = await ctx.svc.settingsService.getAccountTypes();

  return { result };
});
