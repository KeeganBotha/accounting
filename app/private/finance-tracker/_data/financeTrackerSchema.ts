import { z } from "zod";

const DateSchema = z.coerce
  .string()
  .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Date must be DD/MM/YYYY")
  .transform((val) => {
    const [day, month, year] = val.split("/").map(Number);
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
  accountRecordTypeId: z.string(),
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
