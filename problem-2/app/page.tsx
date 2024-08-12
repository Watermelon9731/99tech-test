import ExchangeSection from "@/components/exchange-section/exchange-section";

export default async function Home() {
  const exchangeRateJSON = await fetch(
    "http://localhost:3000/api/exchange-rate"
  );
  const exchangeRate: RawExchangeRate[] = await exchangeRateJSON.json();

  const updateExchangeRate: ExchangeRate[] = exchangeRate.map((item, idx) => ({
    ...item,
    id: idx,
  }));

  return (
    <main className="py-10">
      <ExchangeSection exchangeRate={updateExchangeRate} />
    </main>
  );
}
