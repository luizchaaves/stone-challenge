export interface Currency {
  USDBRL: InfoCurrency;
}

export interface InfoCurrency {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  createDate: string;
}
