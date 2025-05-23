import { asOption } from "@/lib/utils";
import { settingsProvider } from "./settings-provider";

export function settingsService() {
  const _provider = settingsProvider();

  async function getAccountTypes() {
    const rawResult = await _provider.getAccountTypes();
    const result = rawResult.map((accountType) =>
      asOption(accountType, "name", "iconName")
    );

    return result;
  }

  return {
    getAccountTypes,
  };
}
