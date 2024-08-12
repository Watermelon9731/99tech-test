declare interface RawExchangeRate {
  currency: string;
  date: string;
  price: number;
}

declare interface ExchangeRate extends RawExchangeRate {
  id: number;
}
