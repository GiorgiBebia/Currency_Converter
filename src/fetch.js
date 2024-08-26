export async function fetchCurrency({
  setConverted,
  toCurrency,
  money,
  fromCurrency,
}) {
  const res = await fetch(
    `https://api.frankfurter.app/latest?amount=${money}&from=${fromCurrency}&to=${toCurrency}`
  );
  const data = await res.json();
  return setConverted(data.rates[toCurrency]);
}
