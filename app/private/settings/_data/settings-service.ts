import { asOption } from "@/lib/utils";

import { settingsProvider } from "./settings-provider";

export function settingsService(serverCtx: ServerCtxType) {
  const _provider = settingsProvider(serverCtx);

  // #region Account Types

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

  // #endregion

  // #region Transaction Categories

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

  // #endregion

  // #region Transaction Category Groups

  async function getTransactionCategoryGroups(search: string) {
    const rawResult = await _provider.getTransactionCategories(search);
    const result = rawResult.map((accountType) =>
      asOption(accountType, "name", "iconName")
    );

    return result;
  }

  async function mutateTransactionCategoryGroup(input: OptionType) {
    const result = await _provider.mutateTransactionCategoryGroup(input);

    return result;
  }

  async function deleteTransactionCategoryGroup(id: number) {
    const result = await _provider.deleteTransactionCategoryGroup(id);

    return result;
  }

  // #endregion

  return {
    getAccountTypes,
    mutateAccountType,
    deleteAccountType,
    getTransactionCategories,
    mutateTransactionCategory,
    deleteTransactionCategory,
    getTransactionCategoryGroups,
    mutateTransactionCategoryGroup,
    deleteTransactionCategoryGroup,
  };
}
