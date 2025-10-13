import z from "zod";

export const OptionSchema = z.object({
  text: z.string().min(1, "Please provide an option name"),
  value: z.string(),
  iconName: z.string(),
});
