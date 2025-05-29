import { _db } from "@/database/db";

export function settingsProvider(serverCtx: ServerCtxType) {
  async function getAccountTypes() {
    const result = await _db.accountType.findMany({
      where: {
        createdBy: {
          in: [1, serverCtx.id],
        },
      },
    });

    return result;
  }

  async function mutateAccountType(input: OptionType) {
    const { iconName, text, value } = input;

    const result = await _db.accountType.upsert({
      create: {
        name: text,
        iconName: iconName,
        createdBy: serverCtx.id,
      },
      update: {
        name: text,
        iconName: iconName,
      },
      where: {
        id: +value,
      },
    });

    return result;
  }

  async function deleteAccountType(id: number) {
    const result = await _db.accountType.delete({
      where: {
        id: id,
        createdBy: serverCtx.id,
      },
    });

    if (!result)
      throw new Error("You dont have the permissions to delete that option.");

    return result;
  }

  return {
    getAccountTypes,
    mutateAccountType,
    deleteAccountType,
  };
}
