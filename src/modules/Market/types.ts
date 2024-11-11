import {
  TImage,
  TOfferingStatus,
  TPaymentMethods,
  TSource,
  TStatus,
} from "@/types/common.ts";

export interface IMarketFilter extends ISelectFilter {
  search: string;
  activity: string;
  action: "simple" | "privileged" | "";
  market: "sms" | "stk" | "";
  favorites: boolean;
  cost: {
    max: number | string;
    min: number | string;
  };
}

export interface ISelectFilter {
  time?: string;
  status?: string;
  volume?: string;
}

export interface IIncomeExpense {
  item: {
    title: string | number;
    subtitle: string;
    subtitle_tag: string;
    img: string;
    amount: {
      type: "price" | "pcs-sell" | "pcs-buy";
      text: string | number;
      subtitle: string | number;
      subtitle_type: "date" | "price" | "status" | "up" | "down";
    };
  };
  variant: "primary" | "secondary";
  link: string;
  isSaved: boolean;
}

export interface ISpoIpoSingle {
  title: string | number;
  subtitle: string;
  subtitle_tag: string;
  img: string;
  amount: {
    type: "price" | "pcs-sell" | "pcs-buy";
    text: string | number;
    subtitle: string | number;
    subtitle_type: "date" | "price" | "status" | "up" | "down";
  };
}

export interface IOfferingApp {
  id: string;
  ipo: IOffering;
  count: number;
  method: TPaymentMethods;
  source: TSource;
  amount: number;
  commission_percent: number;
  ipo_status: TOfferingStatus;
  full_amount: string;
  payed_at: string;
  created_at: string;
  order_status: TStatus;
}

export interface IOffering {
  id: number;
  title: string;
  type: "standard" | "ranged";
  price: number;
  status: "active" | "inactive" | "finished";
  min_price: number;
  max_price: number;
  count: number;
  start_date: string;
  end_date: string;
  commission_percent: string;
  organization: IOfferingOrganization;
  is_spo: boolean;
}

interface IOfferingOrganization {
  id: string;
  title: string;
  category: {
    id: string;
    title: string;
  };
  type: {
    id: string;
  };
  logo: TImage;
  description: string;
}

export interface News {
  id: string | number;
  name: string;
  imageUrl: string;
  date: string;
  info: string;
}
