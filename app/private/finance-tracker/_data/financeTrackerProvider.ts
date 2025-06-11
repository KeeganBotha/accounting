import { _db } from "@/database/db";
import { AccountSchema } from "./financeTrackerSchema";
import { z } from "zod";

export function financeTrackerProvider(serverCtx: ServerCtxType) {
  async function getPersonalAccounts(search: string) {
    const result = await _db.account.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
        isActive: true,
        is_shared: false,
        userId: serverCtx.id,
      },
    });

    return result;
  }

  async function getFamilyAccounts(search: string) {
    //We will need to come back and find a way to link people to the family accounts - Dont want people seeing things they are not meant to
    const result = await _db.account.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
        isActive: true,
        is_shared: true,
      },
    });

    return result;
  }

  async function mutateAccount(input: z.infer<typeof AccountSchema>) {
    const currentDate = new Date();
    const { accountId, accountName, accountTypeId, isShared } = input;

    const result = await _db.account.upsert({
      create: {
        name: accountName,
        accountTypeId: +accountTypeId,
        isActive: true,
        is_shared: isShared,
        userId: serverCtx.id,
        createdAt: currentDate,
      },
      update: {
        name: accountName,
        accountTypeId: +accountTypeId,
        isActive: true,
        is_shared: isShared,
        updatedAt: currentDate,
      },
      where: {
        id: accountId,
      },
    });

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
