import { sideMenuProvider } from "./side-menu-provider";

export function sideMenuService() {
  const _provider = sideMenuProvider();

  async function getSideMenu() {
    const result = await _provider.getSideMenu();

    return result;
  }

  return {
    getSideMenu,
  };
}
