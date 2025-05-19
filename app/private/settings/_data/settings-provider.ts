import { _db } from "@/database/db";

export function settingsProvider() {
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

  return {
    getAccountTypes,
  };
}
