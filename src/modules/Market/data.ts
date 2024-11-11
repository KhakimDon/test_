import { t } from "~/utils";
// FILTER DATA

export const actionOptions = [
  {
    label: t("filter.all"),
    value: "",
  },
  {
    label: t("filter.action_options.simple"),
    value: "simple",
  },
  {
    label: t("filter.action_options.privileged"),
    value: "privileged",
  },
];

export const marketOptions = [
  {
    label: t("filter.all"),
    value: "",
  },
  {
    label: t("filter.market_options.listing"),
    value: "stk",
  },
  {
    label: t("filter.market_options.no_listing"),
    value: "sms",
  },
];

export const timeOptions = [
  {
    label: t("filter.time_options.all"),
    value: "",
  },
  {
    label: t("filter.time_options.daily"),
    value: "daily",
  },
  {
    label: t("filter.time_options.weekly"),
    value: "weekly",
  },
  {
    label: t("filter.time_options.monthly"),
    value: "monthly",
  },
  {
    label: t("filter.time_options.annually"),
    value: "annually",
  },
];

export const statusOptions = [
  {
    label: t("filter.status_options.up"),
    value: "up",
  },
  {
    label: t("filter.status_options.down"),
    value: "down",
  },
];

export const volumeOptions = [
  {
    label: t("filter.volume_options.min"),
    value: "min",
  },
  {
    label: t("filter.volume_options.max"),
    value: "max",
  },
];

export const offeringsTab = [
  {
    value: "about",
    label: t("about_company"),
  },
  {
    value: "apps",
    label: t("my_apps"),
  },
];
export const SpoIpoTab = [
  {
    value: "sold",
    label: t("full_your_account"),
    routeName: "sold-spo",
  },
  {
    value: "purchased",
    label: t("seizure"),
    routeName: "purchased-spo",
  },
];
