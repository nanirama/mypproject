export const currencySignStr = (currency) => {
  let sign = "";
  if (currency === "EUR") sign = "€";
  if (currency === "USD") sign = "$";
  if (currency === "CAD") sign = "$";
  if (currency === "AED") sign = "AED";
  return sign;
};

export const showPriceStrRaw = (currency, price) => {
  if (currency === "EUR") {
    return " " + price + currencySignStr(currency);
  }
  if (currency === "USD") {
    return " " + currencySignStr(currency) + price;
  }
  if (currency === "CAD") {
    return " " + currencySignStr(currency) + price;
  }
  if (currency === "AED") {
    return " " + price + currencySignStr(currency);
  }
};
