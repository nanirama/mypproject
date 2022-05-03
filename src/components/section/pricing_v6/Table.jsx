import React, { useEffect, useState } from "react";

import {
  TableWrapper,
  Tr,
  Table,
  Td,
  Tt,
  P,
  Image,
  H1,
  CurrencyWrapper,
  H2,
  A,
  Icon,
  LinkWrapper,
  Question,
  TooltipContent,
} from "./styled";
import Arrow from "./Arrow";
import Ticket from "../../../assets/icons/ticket.svg";
import PriceCard from "./priceCard";
import PriceCardFreemium from "./priceCardFreemium";
import Link from "../../utils/link";
import { getPrices, getPriceString } from "./common";
import { getPrices as getPricesFreemium, getPriceString as getPriceStringFreemium } from "./commonFreemium";
import { ButtonSecondary } from "../../button";
import ReactTooltip from "react-tooltip";

const TableSection = ({ items, t, lang, currency, annuallyChecked, setAnnuallyChecked, route }) => {
  const [pricingAnnually, setPricingAnnually] = useState({ event: false, meetup: false });

  // useEffect(() => {
  //   console.log("pricingAnnually", pricingAnnually); // deb
  // });

  const scrollToFeatures = () => {
    const pos = document.getElementById("featuresListSaaS").getBoundingClientRect();
    window.scroll({
      top: window.scrollY + pos.top - 150,
      left: 0,
      behavior: "smooth",
    });
  };

  const setAnnually = (e) => {
    setPricingAnnually({
      ...pricingAnnually,
      [e.target.id.toLowerCase()]: !pricingAnnually[e.target.id.toLowerCase()],
    });
  };

  const renderCardsFreemium = () => {
    return (
      <>
        <Td key={t.plan_free_title}>
          <PriceCardFreemium
            key={t.plan_free_title}
            common={false}
            title={t.plan_free_title}
            description={t.plan_free_desc}
            icon={t.plan_free_icon_img.url}
            starting_at={t.starting_at}
            save_15={t.save_15}
            button_label={t.button_signup_free}
            button_type={"signup"}
            price={getPricesFreemium(currency, false)[0]}
            priceString={getPriceStringFreemium(currency, false, getPricesFreemium(currency, false))[0]}
            lets_talk={t.lets_talk}
            lang={lang}
            currency={currency}
            t={t}
          />
        </Td>
        <Td key={t.plan_meetup_title}>
          <PriceCardFreemium
            id={1}
            key={t.plan_meetup_title}
            common={false}
            title={t.plan_meetup_title}
            description={t.plan_meetup_desc}
            icon={t.plan_meetup_icon_img.url}
            starting_at={t.starting_at}
            save_15={t.save_15}
            button_label={t.contact_us}
            button_type={"contact_us"}
            price={getPricesFreemium(currency, false)[1]}
            priceString={
              getPriceStringFreemium(
                currency,
                pricingAnnually["1"],
                getPricesFreemium(currency, pricingAnnually["1"])
              )[1]
            }
            lang={lang}
            currency={currency}
            t={t}
          />
        </Td>

        <Td key={t.plan_event_title}>
          <PriceCardFreemium
            id={2}
            key={t.plan_event_title}
            checkboxKey="event"
            common={false}
            title={t.plan_event_title}
            description={t.plan_event_desc}
            icon={
              "https://showcase-dev.cdn.prismic.io/showcase-dev/4abfb061-2579-4aa4-8dd0-3ce813e3d6b8_icon_pricing_green.svg"
            }
            starting_at={t.starting_at}
            button_type={"contact_us"}
            button_label={t.contact_us}
            price={getPricesFreemium(currency, false)[2]}
            priceString={
              getPriceStringFreemium(
                currency,
                pricingAnnually["2"],
                getPricesFreemium(currency, pricingAnnually["2"])
              )[2]
            }
            event_plan={true}
            lets_talk={t.lets_talk}
            border={true}
            lang={lang}
            currency={currency}
            t={t}
          />
        </Td>
        <Td key={t.plan_community_title}>
          <PriceCardFreemium
            key={t.plan_community_title}
            common={false}
            title={t.plan_community_title}
            description={t.plan_community_desc}
            icon={t.plan_community_icon_img.url}
            starting_at={t.starting_at}
            button_type={"talk_us"}
            button_label={t.contact_us}
            price={getPricesFreemium(currency, false)[3]}
            priceString={
              getPriceStringFreemium(
                currency,
                pricingAnnually["3"],
                getPricesFreemium(currency, pricingAnnually["3"])
              )[3]
            }
            annualy={false}
            lets_talk={t.lets_talk}
            lang={lang}
            currency={currency}
            t={t}
          />
        </Td>
      </>
    );
  };

  const renderCards = () => {
    return (
      <>
        <Td key={t.plan_free_title}>
          <PriceCard
            key={t.plan_free_title}
            common={false}
            title={t.plan_free_title}
            description={t.plan_free_desc}
            icon={t.plan_free_icon_img.url}
            starting_at={t.starting_at}
            save_15={t.save_15}
            button_label={t.button_signup_free}
            button_type={"signup"}
            price={getPrices(currency, false)[0]}
            priceString={getPriceString(currency, false, getPrices(currency, false))[0]}
            annualy={false}
            bill_annualy={t.bill_annualy}
            lets_talk={t.lets_talk}
            beta={t.beta}
            customize_your_plan={null}
            lang={lang}
            currency={currency}
            t={t}
          />
        </Td>

        <Td key={t.plan_meetup_title}>
          <PriceCard
            id={1}
            key={t.plan_meetup_title}
            common={false}
            title={t.plan_meetup_title}
            description={t.plan_meetup_desc}
            icon={t.plan_meetup_icon_img.url}
            starting_at={t.starting_at}
            save_15={t.save_15}
            button_label={t.button_signup_free}
            button_type={"signup"}
            price={getPrices(currency, false)[2]}
            priceString={getPriceString(currency, pricingAnnually["1"], getPrices(currency, pricingAnnually["1"]))[2]}
            annualy={true}
            bill_annualy={t.bill_annualy}
            lets_talk={t.lets_talk}
            beta={t.beta}
            customize_your_plan={null}
            lang={lang}
            currency={currency}
            pricingAnnually={pricingAnnually}
            setAnnually={setAnnually}
            t={t}
          />
        </Td>

        <Td key={t.plan_event_title}>
          <PriceCard
            id={2}
            key={t.plan_event_title}
            checkboxKey="event"
            common={false}
            title={t.plan_event_title}
            description={t.plan_event_desc}
            icon={
              "https://showcase-dev.cdn.prismic.io/showcase-dev/4abfb061-2579-4aa4-8dd0-3ce813e3d6b8_icon_pricing_green.svg"
            }
            starting_at={t.starting_at}
            save_15={t.save_15}
            button_type={"contact_us"}
            button_label={t.contact_us}
            price={getPrices(currency, false)[1]}
            priceString={getPriceString(currency, pricingAnnually["2"], getPrices(currency, pricingAnnually["2"]))[1]}
            annualy={false}
            event_plan={true}
            bill_annualy={t.bill_annualy}
            lets_talk={t.lets_talk}
            beta={t.beta}
            border={true}
            customize_your_plan={t.customize_your_plan}
            lang={lang}
            currency={currency}
            pricingAnnually={pricingAnnually}
            setAnnually={setAnnually}
            t={t}
          />
        </Td>

        <Td key={t.plan_community_title}>
          <PriceCard
            key={t.plan_community_title}
            common={false}
            title={t.plan_community_title}
            description={t.plan_community_desc}
            icon={t.plan_community_icon_img.url}
            starting_at={t.starting_at}
            save_15={t.save_15}
            button_type={"talk_us"}
            button_label={t.contact_us}
            price={getPrices(currency, false)[3]}
            priceString={getPriceString(currency, false, getPrices(currency, false))[3]}
            annualy={false}
            bill_annualy={t.bill_annualy}
            lets_talk={t.lets_talk}
            beta={t.beta}
            customize_your_plan={null}
            lang={lang}
            currency={currency}
            t={t}
          />
        </Td>
      </>
    );
  };

  const renderValues = (cells, i) => {
    const {
      table_column_five,
      help_box_5,
      help_box_4,
      help_box_3,
      help_box_2,
      help_box_1,
      table_column_four,
      table_column_one,
      table_column_three,
      table_column_two,
    } = cells;

    return (
      <Tr key={table_column_one}>
        <Td>
          <P padding={"16px 20px"} align="center">
            <>{table_column_one}</>
            {help_box_1 && (
              <>
                <ReactTooltip id={"help_box_1_" + i} effect="solid" multiline="true">
                  <TooltipContent
                    dangerouslySetInnerHTML={{
                      __html: `${help_box_1}`,
                    }}
                  />
                </ReactTooltip>
                <Question data-for={"help_box_1_" + i} data-tip="hello world">
                  <span className="icons8-aide" />
                </Question>
              </>
            )}
          </P>
        </Td>
        <Td>
          <P ph={16} align="center">
            {table_column_two}
            {help_box_2 && (
              <>
                <ReactTooltip id={"help_box_2_" + i} effect="solid" multiline="true">
                  <TooltipContent
                    dangerouslySetInnerHTML={{
                      __html: `${help_box_2}`,
                    }}
                  />
                </ReactTooltip>
                <Question data-for={"help_box_2_" + i} data-tip="hello world">
                  <span className="icons8-aide" />
                </Question>
              </>
            )}
          </P>
        </Td>
        <Td>
          <P ph={16} align="center">
            {table_column_three}
            {help_box_3 && (
              <>
                <ReactTooltip id={"help_box_3_" + i} effect="solid" multiline="true">
                  <TooltipContent
                    dangerouslySetInnerHTML={{
                      __html: `${help_box_3}`,
                    }}
                  />
                </ReactTooltip>
                <Question data-for={"help_box_3_" + i} data-tip="hello world">
                  <span className="icons8-aide" />
                </Question>
              </>
            )}
          </P>
        </Td>
        <Td>
          <P ph={16} align="center">
            {table_column_four}
            {help_box_4 && (
              <>
                <ReactTooltip id={"help_box_4_" + i} effect="solid" multiline="true">
                  <TooltipContent
                    dangerouslySetInnerHTML={{
                      __html: `${help_box_4}`,
                    }}
                  />
                </ReactTooltip>
                <Question data-for={"help_box_4_" + i} data-tip="hello world">
                  <span className="icons8-aide" />
                </Question>
              </>
            )}
          </P>
        </Td>
        <Td>
          <P ph={16} align="center">
            {table_column_five}
            {help_box_5 && (
              <>
                <ReactTooltip id={"help_box_5_" + i} effect="solid" multiline="true">
                  <TooltipContent
                    dangerouslySetInnerHTML={{
                      __html: `${help_box_5}`,
                    }}
                  />
                </ReactTooltip>
                <Question data-for={"help_box_5_" + i} data-tip="hello world">
                  <span className="icons8-aide" />
                </Question>
              </>
            )}
          </P>
        </Td>
      </Tr>
    );
  };

  const renderCells = () => {
    return items.map((item, i) => {
      return (
        <>
          {item.table_title ? (
            <Tt key={i}>
              <Td width={100} justify="flex-start" align="center">
                <Icon src={item.table_title_icon_img?.url || "icons8-star-filled"} />

                <H2>{item.table_title}</H2>
                {i == 6 && (
                  <span style={{ fontSize: "14px", margin: "0 5px 0 40px" }}>&nbsp;{t.offer_all_features}</span>
                )}
                {item.table_title_link && (
                  <LinkWrapper color={"green"} onClick={scrollToFeatures}>
                    <Link>{item.table_title_link}</Link>
                    <Arrow fill="#00cc88" />
                  </LinkWrapper>
                )}
              </Td>
            </Tt>
          ) : null}
          {!item.table_title && renderValues(item, i)}
        </>
      );
    });
  };

  return (
    <TableWrapper>
      <Table>
        <Tr>
          <Td></Td>
          {renderCardsFreemium()}
          {/* {route === "pricing_4" && renderCards()} */}
          {/* {route === "pricing_freemium" && renderCardsFreemium()} */}
        </Tr>
        <Tr height={68}>
          <Td width={100}>
            <LinkWrapper color={"green"}>
              <Link onClick={scrollToFeatures}>{t.view_all_swapcard_features}</Link>
              <Arrow fill="#00cc88" />
            </LinkWrapper>
          </Td>
        </Tr>
        {renderCells()}
      </Table>
    </TableWrapper>
  );
};

export default TableSection;
