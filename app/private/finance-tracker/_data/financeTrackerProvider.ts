import { z } from "zod";

import { _db } from "@/database/db";

import {
  AccountCsvShapeSchema,
  AccountRecordSchema,
  AccountSchema,
} from "./financeTrackerSchema";

export function financeTrackerProvider(serverCtx: ServerCtxType) {
  async function getPersonalAccounts(search: string) {
    const result = await _db.account.findMany({
      include: {
        accountType: true,
      },
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

  async function getAccount(accountId: number) {
    const result = await _db.account.findFirst({
      include: {
        transactions: true,
      },
      where: {
        id: accountId,
      },
    });

    return result;
  }

  async function mutateAccountRecord(
    input: z.infer<typeof AccountRecordSchema>
  ) {
    const currentDate = new Date();

    const result = await _db.transaction.upsert({
      create: {
        value: input.value,
        description: "",
        accountId: input.accountId,
        transactionCategoryId: undefined,
        createdBy: serverCtx.id,
        createdAt: currentDate,
        updatedBy: serverCtx.id,
      },
      update: {
        value: input.value,
        description: "",
        accountId: input.accountId,
        transactionCategoryId: undefined,
        updatedBy: serverCtx.id,
        updatedAt: currentDate,
      },
      where: {
        accountId: input.accountId,
        id: input.accountRecordId,
      },
    });

    if (result) return true;

    return false;
  }

  async function mutateAccountRecords(
    input: z.infer<typeof AccountCsvShapeSchema>[],
    accountId: number
  ) {
    const result = await _db.transaction.createMany({
      data: input.map((i) => {
        return {
          accountId: accountId,
          value: i.amount,
          description: i.description,
          transactionCategoryId: undefined,
          createdAt: i.date,
          createdBy: serverCtx.id,
          updatedBy: serverCtx.id,
        };
      }),
    });

    return result;
  }

  return {
    getAccount,
    getPersonalAccounts,
    mutateAccount,
    mutateAccountRecord,
    mutateAccountRecords,
    deleteAccount,
  };
}
