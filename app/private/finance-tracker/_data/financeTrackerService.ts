import { z } from "zod";
import { utils, read } from "xlsx";

import {
  AccountCsvSchema,
  AccountRecordSchema,
  AccountSchema,
} from "./financeTrackerSchema";
import { financeTrackerProvider } from "./financeTrackerProvider";

// Needed for validation at a later stage
// const REQUIRED_CSV_COLUMNS = ["Date", "Description", "Amount", "Balance"];

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

  async function mutateAccountRecordCsv(
    input: z.infer<typeof AccountCsvSchema>
  ) {
    const file = await input.file.arrayBuffer();
    const workbook = read(file, { type: "array" });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const json = utils.sheet_to_json(worksheet, { defval: "" });

    return json;
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
