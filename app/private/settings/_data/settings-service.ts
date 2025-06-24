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

  async function getAccountRecordTypeOptions(search: string) {
    const rawResult = await _provider.getAccountRecordTypes(search);

    const result = rawResult.map((accountRecordType) =>
      asOption(accountRecordType, "name", "iconName")
    );

    return result;
  }

  async function mutateAccountType(input: OptionType) {
    const result = await _provider.mutateAccountType(input);

    return result;
  }

  async function mutateAccountRecordType(input: OptionType) {
    const result = await _provider.mutateAccountRecordType(input);

    return result;
  }

  async function deleteAccountType(id: number) {
    const result = await _provider.deleteAccountType(id);

    return result;
  }

  async function deleteAccountRecordType(id: number) {
    const result = await _provider.deleteAccountRecordType(id);

    return result;
  }

  return {
    getAccountRecordTypeOptions,
    getAccountTypes,
    mutateAccountRecordType,
    mutateAccountType,
    deleteAccountRecordType,
    deleteAccountType,
  };
}
