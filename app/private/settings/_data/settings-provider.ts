import { _db } from "@/database/db";

export function settingsProvider(serverCtx: ServerCtxType) {
  // #region Account Types

  async function getAccountTypes(search: string) {
    const result = await _db.accountType.findMany({
      where: {
        createdBy: {
          in: [1, serverCtx.id],
        },
        name: {
          contains: search,
          mode: "insensitive",
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

  // #endregion

  // #region Transaciton Categories

  async function getTransactionCategories(search: string) {
    const result = await _db.transactionCategory.findMany({
      where: {
        createdBy: {
          in: [1, serverCtx.id],
        },
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
    });

    return result;
  }

  async function mutateTransactionCategory(input: OptionType) {
    const { iconName, text, value } = input;

    const result = await _db.transactionCategory.upsert({
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

  async function deleteTransactionCategory(id: number) {
    const result = await _db.transactionCategory.delete({
      where: {
        id: id,
        createdBy: serverCtx.id,
      },
    });

    if (!result)
      throw new Error("You dont have the permissions to delete that option.");

    return result;
  }

  // #endregion

  // #region Transaction Category Groups

  async function getTransactionCategoryGroups(search: string) {
    const result = await _db.transactionCategoryGroup.findMany({
      where: {
        createdBy: {
          in: [1, serverCtx.id],
        },
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
    });

    return result;
  }

  async function mutateTransactionCategoryGroup(input: OptionType) {
    const { iconName, text, value } = input;

    const result = await _db.transactionCategoryGroup.upsert({
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

  async function deleteTransactionCategoryGroup(id: number) {
    const result = await _db.transactionCategoryGroup.delete({
      where: {
        id: id,
        createdBy: serverCtx.id,
      },
    });

    if (!result)
      throw new Error("You dont have the permissions to delete that option.");

    return result;
  }

  // #endregion

  return {
    getAccountTypes,
    mutateAccountType,
    deleteAccountType,
    getTransactionCategories,
    mutateTransactionCategory,
    deleteTransactionCategory,
    getTransactionCategoryGroups,
    mutateTransactionCategoryGroup,
    deleteTransactionCategoryGroup,
  };
}
