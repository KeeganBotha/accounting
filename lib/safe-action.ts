import { createSafeActionClient } from "next-safe-action";

import { auth } from "@/auth";
import { _db } from "@/database/db";

import { getErrorMessage } from "./get-error-message";
import { serviceFactory } from "./service-factory";

export const safeAction = createSafeActionClient({
  handleServerError(error) {
    const errorMessage = getErrorMessage(error);

    return errorMessage;
  },
});

export const privateProcedure = safeAction.use(async ({ next }) => {
  const session = await auth();

  if (!session) {
    throw new Error("no ctx found in the safe action");
  }

  const serverCtx = {
    id: +((session as any).userId ?? 0),
  };

  const _serviceFactory = serviceFactory(serverCtx);

  return next({
    ctx: {
      ...session,
      userCredentials: {},
      svc: _serviceFactory,
      _db,
    },
  });
});
