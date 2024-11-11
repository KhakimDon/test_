export interface Story {
  content: string;
  cover_image: string;
  description: string;
  id: number;
  order: number;
  redirect_data: string;
  title: string;
}

export interface Portfolio {
  account_number: string;
  balance: string;
  changed_stats: {
    overall_change: string;
    overall_changed_percent: string;
  };
  evaluated_stock_amount: string;
  id: number;
  broker: string;
  status: "pending" | string;
  portfolio_balance: string;
  total_balance: string;
}

export interface Account {
  id: number;
  account_number: string;
  balance: string;
  broker: string;
  login: string;
  status: string | "pending";
}

export interface TopUpList {
  id: string;
  remote_id: string;
  status: string;
  amount: number;
  card_number: string;
  card_type: string;
  commission: number;
  created_at: string;
}

export interface WithdrawalList {
  id: string;
  remote_id: string;
  status: string;
  amount: number;
  card_number: string;
  card_type: string;
  commission: number;
  created_at: string;
}
