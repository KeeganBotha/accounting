import { _db } from "@/database/db";

export function settingsProvider(serverCtx: ServerCtxType) {
  async function getAccountTypes() {
    const result = await _db.accountType.findMany({
      where: {
        // createdBy:{
        //   in: [1 ]
        // }
        //Once we get the context passing down to the provider we can refine this
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
        createdBy: 1,
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
        //if you not the creator, throw nice permissions error
      },
    });

    return result;
  }

  return {
    getAccountTypes,
    mutateAccountType,
    deleteAccountType,
  };
}
