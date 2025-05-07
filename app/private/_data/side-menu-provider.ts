import { _db } from "@/database/db";

export function sideMenuProvider() {
  async function getSideMenu() {
    const result = await _db.sideMenu.findMany({
      include: {
        children: true,
      },
      where: {
        parentId: null,
      },
    });

    return result;
  }

  return {
    getSideMenu,
  };
}
