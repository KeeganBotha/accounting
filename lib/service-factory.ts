import { sideMenuService } from "@/app/private/_data/side-menu-service";
import { financeTrackerService } from "@/app/private/finance-tracker/_data/financeTrackerService";
import { settingsService } from "@/app/private/settings/_data/settings-service";

export function serviceFactory(serverCtx: ServerCtxType) {
  const _sideMenuService = sideMenuService();
  const _settingsService = settingsService(serverCtx);
  const _financeTrackerService = financeTrackerService(serverCtx);

  const services = {
    sideMenuService: _sideMenuService,
    settingsService: _settingsService,
    financeTrackerService: _financeTrackerService,
  };

  return services;
}
