export interface ITabItem {
  label?: string;
  value: string;
  routeName?: string;
}

export type TOption = string | number | { [key: string]: string | number };

export interface ITransactionCardProps {
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
