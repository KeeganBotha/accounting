import { _db } from "@/database/db";

export function sideMenuProvider() {
  async function getSideMenu() {
    const result = await _db.sideMenu.findMany({});

    return result;
  }

  return {
    getSideMenu,
  };
}
