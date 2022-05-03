import * as React from "react";
import priceList from "./pricesFreemium.json";
import { CurrencyLabel, CurrencySign, CurrencySwitcherBlock } from "./styled";

export const CurrencySwitcher = ({ active, onClick }) => (
  <CurrencySwitcherBlock>
    <CurrencyLabel className={active === "eur" && "active"} id={"eur"} onClick={onClick}>
      EUR
    </CurrencyLabel>
    <CurrencyLabel className={active === "usd" && "active"} id={"usd"} onClick={onClick}>
      USD
    </CurrencyLabel>
    <CurrencyLabel className={active === "cad" && "active"} id={"cad"} onClick={onClick}>
      CAD
    </CurrencyLabel>
    <CurrencyLabel className={active === "gbp" && "active"} id={"gbp"} onClick={onClick}>
      GBP
    </CurrencyLabel>
    <CurrencyLabel className={active === "aed" && "active"} id={"aed"} onClick={onClick}>
      AED
    </CurrencyLabel>
    <CurrencyLabel className={active === "sgd" && "active"} id={"sgd"} onClick={onClick}>
      SGD
    </CurrencyLabel>
  </CurrencySwitcherBlock>
);

export const getPrices = (currency, isAnnual) => {
  const period = "monthly";
  return priceList.base_plans.map((e) => e.price[`${period}`][`${currency}`]);
};

export const getPriceString = (currency, isAnnual, prices) => {
  if (currency === "eur") {
    return [`${prices[0]} €`, `${prices[1]} €`, `${prices[2]} €`, `${prices[3]} €`];
  }
  if (currency === "usd") {
    return [`$${prices[0]}`, `$${prices[1]}`, `$${prices[2]}`, `$${prices[3]}`];
  }
  if (currency === "cad") {
    return [`$${prices[0]}`, `$${prices[1]}`, `$${prices[2]}`, `$${prices[3]}`];
  }
  if (currency === "gbp") {
    return [`£${prices[0]}`, `£${prices[1]}`, `£${prices[2]}`, `£${prices[3]}`];
  }
  if (currency === "aed") {
    return [`AED${prices[0]}`, `${prices[1]}AED`, `${prices[2]}AED`, `${prices[3]}AED`];
  }
  if (currency === "sgd") {
    return [`${prices[0]}SGD`, `${prices[1]}SGD`, `${prices[2]}SGD`, `${prices[3]}SGD`];
  }
};

export const getPriceStringByPlanName = (currency, billingPeriod, plan) => {
  const prices = priceList.base_plans.map((e) => e.price[`${billingPeriod}`][`${currency}`]);
  switch (plan.toLowerCase()) {
    case "free":
      if (currency === "eur") return `${prices[0]} €`;
      if (currency === "usd") return `$${prices[0]}`;
      if (currency === "cad") return `$${prices[0]}`;
      if (currency === "gbp") return `&pound;${prices[0]}`;
      if (currency === "aed") return `${prices[0]}AED`;
      if (currency === "sgd") return `${prices[0]}SGD`;
    case "event":
      if (currency === "eur") return `${prices[1]} €`;
      if (currency === "usd") return `$${prices[1]}`;
      if (currency === "cad") return `$${prices[1]}`;
      if (currency === "gbp") return `&pound;${prices[1]}`;
      if (currency === "aed") return `${prices[1]}AED`;
      if (currency === "sgd") return `${prices[1]}SGD`;
    case "meetup":
      if (currency === "eur") return `${prices[2]} €`;
      if (currency === "usd") return `$${prices[2]}`;
      if (currency === "cad") return `$${prices[2]}`;
      if (currency === "gbp") return `&pound;${prices[2]}`;
      if (currency === "aed") return `${prices[2]}AED`;
      if (currency === "sgd") return `${prices[2]}SGD`;
    case "community":
      if (currency === "eur") return `${prices[3]} €`;
      if (currency === "usd") return `$${prices[3]}`;
      if (currency === "cad") return `$${prices[3]}`;
      if (currency === "gbp") return `&pound;${prices[3]}`;
      if (currency === "aed") return `${prices[3]}AED`;
      if (currency === "sgd") return `${prices[3]}SGD`;
    default:
      if (currency === "eur") return `${prices[1]} €`;
      if (currency === "usd") return `$${prices[1]}`;
      if (currency === "cad") return `$${prices[1]}`;
      if (currency === "gbp") return `&pound;${prices[1]}`;
      if (currency === "aed") return `${prices[1]}AED`;
      if (currency === "sgd") return `${prices[1]}SGD`;
  }
};

export const capitalize = (str) => {
  try {
    return str[0].toUpperCase() + str.slice(1);
  } catch (err) {
    return str;
  }
};
