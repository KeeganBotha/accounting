import { sideMenuService } from "@/app/private/_data/side-menu-service";

export function serviceFactory() {
  const _sideMenuService = sideMenuService();

  const services = {
    sideMenuService: _sideMenuService,
  };

  return services;
}
