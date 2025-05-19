import { sideMenuService } from "@/app/private/_data/side-menu-service";
import { settingsService } from "@/app/private/settings/_data/settings-service";

export function serviceFactory() {
  const _sideMenuService = sideMenuService();
  const _settingsService = settingsService();

  const services = {
    sideMenuService: _sideMenuService,
    settingsService: _settingsService,
  };

  return services;
}
