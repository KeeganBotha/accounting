import { asOption } from "@/lib/utils";
import { settingsProvider } from "./settings-provider";

export function settingsService(serverCtx: ServerCtxType) {
  const _provider = settingsProvider(serverCtx);

  async function getAccountTypes() {
    const rawResult = await _provider.getAccountTypes();
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
