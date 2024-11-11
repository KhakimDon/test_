import { t } from "~/utils";
import type { ITabItem } from "@/types/components";

export const marketTabs: ITabItem[] = [
  {
    label: t("tabs.market.stock"),
    value: "market",
    routeName: "Market",
  },
  {
    label: t("tabs.market.bonding"),
    value: "bonds",
    routeName: "MarketBonds",
  },
  {
    label: "IPO/SPO",
    value: "offerings",
    routeName: "MarketOfferings",
  },
];
