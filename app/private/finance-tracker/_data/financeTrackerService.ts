import { z } from "zod";
import { financeTrackerProvider } from "./financeTrackerProvider";
import { AccountRecordSchema, AccountSchema } from "./financeTrackerSchema";
import { asOption } from "@/lib/utils";

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

  async function mutateAccount(input: z.infer<typeof AccountSchema>) {
    const result = await _provider.mutateAccount(input);

    return result;
  }

  async function deleteAccount(accountId: number) {
    const result = await _provider.deleteAccount(accountId);

    return result;
  }

  async function getAccount(accountId: number) {
    const rawResult = await _provider.getAccount(accountId);
    const result = rawResult?.accountRecords.map((record) => {
      return {
        id: +record.id,
        amount: +record.value,
        recordType: record.recordType.name,
        createdAt: record.createdAt.toString(),
      };
    });

    return result;
  }

  async function mutateAccountRecord(
    input: z.infer<typeof AccountRecordSchema>
  ) {
    const result = await _provider.mutateAccountRecord(input);

    return result;
  }

  return {
    getAccount,
    getFamilyAccounts,
    getPersonalAccounts,
    mutateAccount,
    mutateAccountRecord,
    deleteAccount,
  };
}
