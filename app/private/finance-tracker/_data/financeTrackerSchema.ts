import { z } from "zod";

export const AccountSchema = z.object({
  accountId: z.number(),
  accountName: z.string(),
  accountTypeId: z.string(),
  isShared: z.boolean(),
});
