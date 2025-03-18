"use server";

import { privateProcedure } from "@/lib/safe-action";

const getSideMenu = privateProcedure.action(async ({ ctx }) => {
  const result = await ctx.svc.sideMenuService;
});
