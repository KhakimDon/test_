type TClass =
  | string
  | string[]
  | Record<string, boolean>
  | Record<string, boolean>[];

export type TClassName = TClass | TClass[];

export interface ICompany {
  title: string;
  isVerified: true;
  rating: number;
  commentsCount: number;
  categories: {
    title: string;
    slug: string;
  }[];
  about_company: string;
  work_time: string;
  work_days: string[];
  not_work_days: string[];
  site: string;
  email: string;
  phone: string;
  address: string;
}

export type TStatus = "pending" | "rejected" | "accepted" | "cancelled";

export interface IResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results?: T[];
}

export interface IStock {
  id: string;
  title: string;
  code: string;
  logo: string;
  stk_or_sms: "stk" | "sms";
  base_price: string;
  change_rate: number;
  changed_price: string;
  is_favorite: string;
  is_bonds: boolean;
  profitability: string;
  abbreviated_title: string;
}

export interface IStockPagination {
  limit: number;
  offset: number;
  search?: string;
  type: "simple" | "privileged" | "";
  stk_or_sms?: "stk" | "sms" | "";
  is_bonds?: boolean;
  category?: string;
  time?: string;
  volume?: string;
  status?: string;
}

export interface IPagination {
  offset: number;
  limit: number;
}

export type TPaymentMethods =
  | "paylov"
  | "click"
  | "payme"
  | "uzum"
  | "xazna"
  | "plum"
  | "card";

export type TSource =
  | "internal"
  | "oneid"
  | "google"
  | "apple"
  | "commeta"
  | TPaymentMethods;

export type TOfferingStatus = "pending" | "approved" | "rejected" | "canceled";
export type TImage = {
  s500x500: string;
  original: string;
  s100x100: string;
  s1000x1000: string;
};
