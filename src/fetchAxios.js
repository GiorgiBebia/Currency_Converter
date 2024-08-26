import axios from "axios";

export const fetchAxiosCurrency = async ({
  setConverted,
  toCurrency,
  money,
  fromCurrency,
}) => {
  const response = await axios.get("https://api.frankfurter.app/latest", {
    params: {
      amount: money,
      from: fromCurrency,
      to: toCurrency,
    },
  });
  console.log(response);
  const data = response.data;
  setConverted(data.rates[toCurrency]);
};
