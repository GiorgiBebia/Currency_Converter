import { useState, useEffect } from "react";
import { fetchCurrency } from "./fetch";
// import { fetchAxiosCurrency } from "./fetchAxios";

export default function App() {
  const [money, setMoney] = useState();
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [converted, setConverted] = useState(0);

  useEffect(
    function () {
      if (fromCurrency === toCurrency) return;
      fetchCurrency({ setConverted, toCurrency, money, fromCurrency });

      //Fetch Data With Axios
      // fetchAxiosCurrency({ setConverted, toCurrency, money, fromCurrency });
    },
    [money, fromCurrency, toCurrency]
  );

  useEffect(
    function () {
      document.title = `${fromCurrency} to ${toCurrency}`;
    },
    [fromCurrency, toCurrency]
  );

  return (
    <div className="w-[300px] m-auto mt-4">
      <div className="flex justify-between items-center	">
        <h3>Amount</h3>
        <input
          className="border-2 border-gray-300 rounded-md w-[100px] mr-[10px] "
          type="text"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
        />
      </div>

      <div className="flex justify-between  mt-2 items-center">
        <h3>From</h3>
        <select
          className="mr-[10px] border-2 border-gray-300 rounded-md "
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
        </select>
      </div>

      <div className="flex justify-between  mt-2 items-center">
        <h3>To</h3>
        <select
          className="mr-[10px] border-2 border-gray-300 rounded-md "
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
        </select>
      </div>

      {fromCurrency !== toCurrency && money > 0 && (
        <div className="flex justify-between  mt-2 items-center">
          <h3>Result</h3>
          <span className="bg-green-500 p-1 rounded-lg mr-2">
            {fromCurrency === toCurrency ? money : converted}
          </span>
        </div>
      )}
    </div>
  );
}
