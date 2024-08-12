"use client";

import React, { useState } from "react";
import BaseAmountCard from "../base-amount-card/base-amount-card";
import { Button } from "../ui/button";
import { ArrowDownUpIcon } from "lucide-react";
import ConvertedAmountCard from "../converted-amount-card/converted-amout-card";

interface Props {
  exchangeRate: ExchangeRate[];
}

export default function ExchangeSection({ exchangeRate }: Props) {
  const [inputValue, setInputValue] = useState<number>(1);
  const [convertValue, setConvertValue] = useState<number>(1);
  const [currency, setCurrency] = useState({
    base: "USD",
    convert: "USD",
  });

  const handleReverseConvert = () => {
    setInputValue(convertValue);
    const reverseCurrency = { base: currency.convert, convert: currency.base };
    setCurrency(reverseCurrency);
  };

  return (
    <>
      <BaseAmountCard
        setInputValue={setInputValue}
        inputValue={inputValue}
        title={"Exchange from"}
        setCurrency={setCurrency}
        currency={currency}
        exchangeRate={exchangeRate}
      />
      <div className="flex justify-center my-5">
        <Button onClick={handleReverseConvert}>
          <ArrowDownUpIcon />
        </Button>
      </div>
      <ConvertedAmountCard
        title={"To"}
        inputValue={inputValue}
        setConvertValue={setConvertValue}
        currency={currency}
        setCurrency={setCurrency}
        exchangeRate={exchangeRate}
      />
    </>
  );
}
