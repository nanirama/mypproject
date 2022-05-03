import React, { useEffect, useState } from "react";

import { TableWrapper, Tr, Table, Td, PlanHeaderName, PlanRow, Tt, H2, Icon, PlanDesc } from "./styled";
import Route from "../../../localization";
import {
  ButtonBorderGrey,
  ButtonBorderPrimary,
  ButtonBorderSecondary,
  ButtonSecondary,
  ButtonWhite,
} from "../../button";
import { SpaceH } from "../../space";

const TableSection = ({ items, t, lang }) => {
  const renderCells = () => {
    return items.map((item, i) => {
      return (
        <>
          {item.is_category ? (
            <Tt width={100} justify="flex-start">
              <Icon src={item.category_icon?.url} />
              <H2>{item.name}</H2>
            </Tt>
          ) : (
            <Tr>
              <Td align="left">
                <p>{item.name}</p>
              </Td>
              <Td>{item.simple_registration_chosen && <p>X</p>}</Td>
              <Td>{item.complex_registration_chosen && <p>X</p>}</Td>
            </Tr>
          )}
        </>
      );
    });
  };

  const PlanHeader = ({ color, title, icon, description, buttonLabel, style }) => {
    return (
      <Td color={color}>
        <PlanRow>
          <img src={icon} height="28px" />
          <PlanHeaderName>{title}</PlanHeaderName>
        </PlanRow>
        <PlanRow height={80}>
          <PlanDesc>{description}</PlanDesc>
        </PlanRow>
        <SpaceH of={20} />
        <PlanRow center={true}>
          {color === "white" && (
            <ButtonBorderGrey to={Route[lang]["about/contact/sales/v2"]}>{buttonLabel}</ButtonBorderGrey>
          )}
          {color === "green" && <ButtonWhite to={Route[lang]["about/contact/sales/v2"]}>{buttonLabel}</ButtonWhite>}
        </PlanRow>
      </Td>
    );
  };

  return (
    <TableWrapper>
      <Table>
        <Tr>
          <Td mobileHide={true}></Td>
          <PlanHeader
            color={"white"}
            title={t.simple_registration_title}
            icon={t.simple_registration_icon.url}
            description={t.simple_registration_description.text}
            buttonLabel={t.button_label}
          />
          <PlanHeader
            color={"green"}
            title={t.complex_registration_title}
            icon={t.complex_registration_icon.url}
            description={t.complex_registration_description.text}
            buttonLabel={t.button_label}
          />
        </Tr>
        {renderCells()}
        <Tr>
          <Td></Td>
          <Td>
            <ButtonSecondary to={Route[lang]["about/contact/sales/v2"]}>{t.button_label}</ButtonSecondary>
          </Td>
          <Td>
            <ButtonSecondary to={Route[lang]["about/contact/sales/v2"]}>{t.button_label}</ButtonSecondary>
          </Td>
        </Tr>
      </Table>
    </TableWrapper>
  );
};

export default TableSection;
