"use server";

import { privateProcedure } from "@/lib/safe-action";

export const getSideMenu = privateProcedure.action(async ({ ctx }) => {
  const result = await ctx.svc.sideMenuService.getSideMenu();

  return result;
});
