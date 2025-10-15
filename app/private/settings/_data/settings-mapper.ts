import { settingsProvider } from "./settings-provider";

type TransactionCategoryType = Awaited<
  ReturnType<ReturnType<typeof settingsProvider>["getTransactionCategories"]>
>["0"];

export function transactionCategoryMapper(input: TransactionCategoryType) {
  return {
    text: input.name,
    value: input.id.toString(),
    iconName: input.iconName,
    linkedOptionId: input.transactionCategoryGroupId,
  };
}
