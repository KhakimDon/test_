import dayjs from "dayjs";
import i18n from "~/plugins/i18n";

export function formatMoneyDecimal(number: any, fix = 0, option = "decimal") {
  let style: string;
  if (["USD", "RUB"].includes(option)) {
    style = "currency";
  } else if (["kilogram", "meter", "percent"].includes(option)) {
    style = "unit";
  } else {
    style = "decimal";
  }

  const option2 = {
    style,
    currency: style === "currency" ? option : undefined,
    unit: style === "unit" ? option : undefined,
    maximumFractionDigits: fix,
    minimumFractionDigits: fix,
  };

  return number !== null && number !== undefined
    ? new Intl.NumberFormat("ru-RU", option2).format(Number(number))
    : "0";
}

export function formatPhoneNumber(number: string) {
  const format = number
    ?.replace(/\D/g, "")
    .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
  return `+${format && format[1] ? format[1] : ""}
          ${format && format[2] ? format[2] : ""}
          ${format && format[3] ? format[3] : ""}
          ${format && format[4] ? format[4] : ""} ${
    format && format[5] ? format[5] : ""
  }`;
}

export function formatDate(date?: string | Date, style?: string) {
  return dayjs(date || "").format(style ?? "DD.MM.YYYY");
}

export function formatCardNumber(cardNumber: string, mask?: boolean): string {
  if (mask) {
    const start = cardNumber.slice(0, 6);
    const end = cardNumber.slice(-4);
    return `${start}** **** ${end}`.replace(/\d{4}(?=.)/g, "$& ");
  }
  return cardNumber.replace(/\d{4}(?=.)/g, "$& ");
}

export function formatNumbers(num: number) {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(2).replace(/\.0$/, "") + "B";
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2).replace(/\.0$/, "") + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(2).replace(/\.0$/, "") + "k";
  } else {
    return num.toString();
  }
}

export const t = (key: string) => {
  return i18n.global.t(key);
};

const timeouts: Record<string, string | never> = {};

const cTimeout = (key = "key") => {
  if (timeouts[key]) {
    clearTimeout(timeouts[key]);
    timeouts[key] = undefined;
  }
};

// solution for debounce function with api
export const debounce = (key = "key", fn = () => {}, timeout = 500) => {
  const sTimeout = (key: string, fn: () => void, timeout: number) => {
    cTimeout(key);

    timeouts[key] = setTimeout(() => {
      try {
        fn();
      } catch (e) {
        console.log(e);
      } finally {
        timeouts[key] = undefined;
      }
    }, timeout);
  };

  return sTimeout(key, fn, timeout);
};

export const scrollTo = (y?: number) => {
  window.scrollTo({
    top: y ?? 0,
    behavior: "smooth",
  });
};
