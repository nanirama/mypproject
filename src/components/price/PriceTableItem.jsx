import React from "react";
import { graphql, Link } from "gatsby";
import { Item, Price } from "./styled";
const PriceTableItem = ({ data, currency }) => {
  const HEXtoRGB = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };
  const GetPrices = (currency) => {
    if (currency === "usd") {
      return "$" + data.primary.price_in_usd;
    }
    if (currency === "eur") {
      return "€" + data.primary.price_in_eur;
    }
    if (currency === "gbp") {
      return "£" + data.primary.price_in_gbp;
    }
    if (currency === "sgd") {
      return data.primary.price_in_sgd + "SGD";
    }
    if (currency === "cad") {
      return "$" + data.primary.price_in_cad;
    }
    if (currency === "aud") {
      return data.primary.price_in_aud + "AUD";
    }
    if (currency === "aed") {
      return data.primary.price_in_aed + "AED";
    }
    return "0";
  };
  return (
    <Item
      priceColorR={HEXtoRGB(data.primary.color).r}
      priceColorG={HEXtoRGB(data.primary.color).g}
      priceColorB={HEXtoRGB(data.primary.color).b}
    >
      <span>&nbsp;</span>
      <div>
        <h3 className="text-violet">{data.primary.plan_title.text}</h3>
        <p>{data.primary.plan_description}</p>
      </div>
      {data.primary.plan_type === "Custom" && <Price>Custom</Price>}
      {data.primary.plan_type !== "Custom" && (
        <Price>
          {data.primary.plan_type === "Free" && (
            <div>
              <b>$0</b>/month*
            </div>
          )}
          {data.primary.plan_type === "Regular" && (
            <>
              <p>{data.primary.price_starting_at_text}</p>
              <div>
                {" "}
                <b>{GetPrices(currency)}</b>/month*
              </div>
            </>
          )}

          <p>
            <i>{data.primary.price_note}</i>
          </p>
        </Price>
      )}

      <div>
        <h6>Ideal For</h6>
        <div className="ideal-text">{data.primary.plan_details}</div>
        {data.primary.plan_type === "Free" ? (
          <a className="externallink bg-violet" href={data.primary.button_link1} target="_blank">
            {data.primary.button_text}
          </a>
        ) : (
          <Link className="buttonlink bg-violet" to={`/${data.primary.button_link1}/`}>
            {data.primary.button_text}
          </Link>
        )}
      </div>
    </Item>
  );
};

export default PriceTableItem;
