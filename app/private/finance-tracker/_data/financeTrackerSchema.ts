import { z } from "zod";

const DateSchema = z
  .string()
  .regex(/^\d{8}$/, "Date must be in YYYYMMDD format")
  .transform((val) => {
    const year = Number(val.slice(0, 4));
    const month = Number(val.slice(4, 6));
    const day = Number(val.slice(6, 8));

    return new Date(year, month - 1, day);
  });

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
  transactionCategoryId: z.string().optional(),
});

export const AccountCsvSchema = z.object({
  accountId: z.coerce.number(),
  file: z.any(),
});

export const AccountCsvShapeSchema = z.object({
  date: DateSchema,
  amount: z.coerce.number(),
  description: z.string(),
  balance: z.coerce.number(),
});
