import z from "zod";

export const OptionSchema = z.object({
  text: z.string().min(1, "Please provide an option name"),
  value: z.string(),
  iconName: z.string(),
});

export const LinkedOptionSchema = OptionSchema.extend({
  linkedOptionId: z.coerce.number().nullable(),
});
