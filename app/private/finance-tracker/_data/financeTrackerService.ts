import { financeTrackerProvider } from "./financeTrackerProvider";

export function financeTrackerService(serverCtx: ServerCtxType) {
  const _provider = financeTrackerProvider(serverCtx);

  async function getPersonalAccounts(search: string) {
    const result = await _provider.getPersonalAccounts(search);

    return result;
  }

  async function getFamilyAccounts(search: string) {
    const result = await _provider.getFamilyAccounts(search);

    return result;
  }

  async function mutateAccount() {
    const result = await _provider.mutateAccount();

    return result;
  }

  async function deleteAccount(accountId: number) {
    const result = await _provider.deleteAccount(accountId);

    return result;
  }

  return { getPersonalAccounts };
}
