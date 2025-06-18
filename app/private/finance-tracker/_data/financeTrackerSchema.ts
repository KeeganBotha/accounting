import { z } from "zod";

export const AccountSchema = z.object({
  accountId: z.number(),
  accountName: z.string(),
  accountTypeId: z.string(),
  isShared: z.boolean(),
});

export const accountSchemaDefaults: z.infer<typeof AccountSchema> = {
  accountId: 0,
  accountName: "",
  accountTypeId: "0",
  isShared: false,
};

export const AccountRecordSchema = z.object({
  accountRecordId: z.coerce.number(),
  accountId: z.coerce.number(),
  name: z.string(),
  value: z.coerce.number(),
});
