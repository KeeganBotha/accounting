import { asOption } from "@/lib/utils";

import { settingsProvider } from "./settings-provider";

export function settingsService(serverCtx: ServerCtxType) {
  const _provider = settingsProvider(serverCtx);

  async function getAccountTypes(search: string) {
    const rawResult = await _provider.getAccountTypes(search);
    const result = rawResult.map((accountType) =>
      asOption(accountType, "name", "iconName")
    );

    return result;
  }

  async function mutateAccountType(input: OptionType) {
    const result = await _provider.mutateAccountType(input);

    return result;
  }

  async function deleteAccountType(id: number) {
    const result = await _provider.deleteAccountType(id);

    return result;
  }

  async function getTransactionCategories(search: string) {
    const rawResult = await _provider.getTransactionCategories(search);
    const result = rawResult.map((accountType) =>
      asOption(accountType, "name", "iconName")
    );

    return result;
  }

  async function mutateTransactionCategory(input: OptionType) {
    const result = await _provider.mutateTransactionCategory(input);

    return result;
  }

  async function deleteTransactionCategory(id: number) {
    const result = await _provider.deleteTransactionCategory(id);

    return result;
  }

  return {
    getAccountTypes,
    mutateAccountType,
    deleteAccountType,
    getTransactionCategories,
    mutateTransactionCategory,
    deleteTransactionCategory,
  };
}
