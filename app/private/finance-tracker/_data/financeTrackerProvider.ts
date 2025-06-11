import { _db } from "@/database/db";

export function financeTrackerProvider(serverCtx: ServerCtxType) {
  async function getPersonalAccounts(search: string) {
    const result = await _db.account.findMany({
      where: {
        isActive: true,
        is_shared: false,
      },
    });

    return result;
  }

  async function getFamilyAccounts(search: string) {
    const result = await _db.account.findMany({
      where: {
        isActive: true,
        is_shared: true,
      },
    });

    return result;
  }

  async function mutateAccount() {
    const result = true;

    return result;
  }

  async function deleteAccount(accountId: number) {
    const result = await _db.account.delete({
      where: {
        id: accountId,
      },
    });

    return result;
  }

  return {
    getPersonalAccounts,
    getFamilyAccounts,
    deleteAccount,
    mutateAccount,
  };
}
