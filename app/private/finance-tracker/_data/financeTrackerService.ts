import { z } from "zod";

import { validateAndParseCsv } from "@/lib/utils";

import {
  AccountCsvSchema,
  AccountRecordSchema,
  AccountSchema,
} from "./financeTrackerSchema";
import { financeTrackerProvider } from "./financeTrackerProvider";

export function financeTrackerService(serverCtx: ServerCtxType) {
  const _provider = financeTrackerProvider(serverCtx);

  async function getPersonalAccounts(search: string) {
    const result = await _provider.getPersonalAccounts(search);

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
    const result = rawResult?.transactions.map((transaction) => {
      return {
        id: +transaction.id,
        amount: +transaction.value,
        recordType: "Not Specified",
        createdAt: transaction.createdAt.toString(),
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

  async function mutateAccountRecordCsv(
    input: z.infer<typeof AccountCsvSchema>
  ) {
    const file = await input.file.arrayBuffer();
    const data = validateAndParseCsv(file);
    const result = await _provider.mutateAccountRecords(data, input.accountId);

    return result;
  }

  return {
    getAccount,
    getPersonalAccounts,
    mutateAccount,
    mutateAccountRecord,
    mutateAccountRecordCsv,
    deleteAccount,
  };
}
