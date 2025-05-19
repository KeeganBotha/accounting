import { settingsProvider } from "./settings-provider";

export function settingsService() {
  const _provider = settingsProvider();

  async function getAccountTypes() {
    const result = await _provider.getAccountTypes();

    return result;
  }

  return {
    getAccountTypes,
  };
}
