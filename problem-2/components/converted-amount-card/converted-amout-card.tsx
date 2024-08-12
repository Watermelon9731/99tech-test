"use client";

import { CurrencySelect } from "../currency-select/currency-select";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

interface Props {
  title: string;
  setConvertValue: (value: number) => void;
  inputValue: number;
  setCurrency: (currency: { base: string; convert: string }) => void;
  currency: {
    base: string;
    convert: string;
  };
  exchangeRate: ExchangeRate[];
}

export default function ConvertedAmountCard({
  title,
  inputValue,
  currency,
  setCurrency,
  setConvertValue,
  exchangeRate,
}: Props) {
  const handleValue = () => {
    const base = currency.base.split("-")[0];
    const convert = currency.convert.split("-")[0];

    const baseRate = exchangeRate.find((item: any) => item.currency === base);

    const convertRate = exchangeRate.find(
      (item: any) => item.currency === convert
    );

    if (!baseRate || !convertRate) return "Can not convert at the moment";
    const result =
      (Number(convertRate.price) / Number(baseRate.price)) * Number(inputValue);
    setConvertValue(result);
    return result;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl xs:text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <Input
            disabled
            value={handleValue()}
            className="border-none focus-visible:border-none focus-visible:ring-transparent pl-0 w-2/3"
          />
          <CurrencySelect
            exchangeRate={exchangeRate}
            currency={currency}
            setCurrency={setCurrency}
            type="CONVERT"
          />
        </div>
      </CardContent>
    </Card>
  );
}
