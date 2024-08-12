"use client";

import { CurrencySelect } from "../currency-select/currency-select";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

interface Props {
  title: string;
  setInputValue: (value: number) => void;
  inputValue: number;
  setCurrency: (currency: { base: string; convert: string }) => void;
  currency: {
    base: string;
    convert: string;
  };
  exchangeRate: ExchangeRate[];
}

export default function BaseAmountCard({
  title,
  inputValue,
  currency,
  setInputValue,
  setCurrency,
  exchangeRate,
}: Props) {
  const handleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl xs:text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <Input
            value={inputValue}
            placeholder="Input your currency amount"
            className="border-none focus-visible:border-none focus-visible:ring-transparent pl-0 w-2/3"
            onChange={handleInput}
          />
          <CurrencySelect
            exchangeRate={exchangeRate}
            currency={currency}
            setCurrency={setCurrency}
            type="BASE"
          />
        </div>
      </CardContent>
    </Card>
  );
}
