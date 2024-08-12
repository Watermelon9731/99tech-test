"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

interface Props {
  exchangeRate: ExchangeRate[];
  setCurrency: (currency: { base: string; convert: string }) => void;
  currency: {
    base: string;
    convert: string;
  };
  type: string;
}

export function CurrencySelect({
  exchangeRate,
  currency,
  setCurrency,
  type,
}: Props) {
  const handleSelect = (e: string) => {
    if (type === "BASE") {
      setCurrency({ ...currency, base: e });
    } else if (type === "CONVERT") {
      setCurrency({ ...currency, convert: e });
    }
  };

  const renderSelectItemList = () => {
    if (!exchangeRate) return null;
    return exchangeRate.map((item: any, idx: number) => {
      if (item.currency === "BUSD") {
        return (
          <SelectItem key={idx} value={`${item.currency}-${idx}`}>
            {item.currency}
          </SelectItem>
        );
      }
      return (
        <SelectItem key={idx} value={item.currency}>
          {item.currency}
        </SelectItem>
      );
    });
  };

  return (
    <>
      {type === "BASE" ? (
        <Select
          onValueChange={handleSelect}
          defaultValue="USD"
          value={currency.base}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="USD" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>{renderSelectItemList()}</SelectGroup>
          </SelectContent>
        </Select>
      ) : (
        <Select
          onValueChange={handleSelect}
          defaultValue="USD"
          value={currency.convert}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="USD" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>{renderSelectItemList()}</SelectGroup>
          </SelectContent>
        </Select>
      )}
    </>
  );
}
