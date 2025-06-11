import { asOption } from "@/lib/utils";

import { settingsProvider } from "./settings-provider";
import { raw } from "@prisma/client/runtime/library";

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

  return {
    getAccountTypes,
    mutateAccountType,
    deleteAccountType,
  };
}
