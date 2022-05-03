import React from "react";
import styled from "styled-components";
import Link from "../../utils/link";

const Navigation = styled.nav`
  border-bottom: 1px solid rgb(229, 229, 229);
`;
const Items = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const Item = styled.li`
  color: ${(props) => (props.active ? props.theme.color.primary : "rgb(38, 47, 61)")};
  margin: ${({ noMargin }) => (noMargin ? "0" : "0 8px")};
  line-height: 1.36;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  transition: all 150ms ease 0s;
  cursor: pointer;
  position: relative;

  &:before {
    content: "";
    transition: 150ms;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${(props) => (props.active ? props.theme.color.primary : "")};
    border-radius: 2px 2px 0 0;
  }

  &:hover {
    &:before {
      background: ${(props) => props.theme.color.primary};
    }
  }
`;

const ItemText = styled.span`
  padding: 16px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
`;

const Icon = styled.span`
  margin-right: 8px;
  font-size: 16px;
  display: inline-block;
  height: 18px;
`;

const ItemLink = styled(Link)`
  color: inherit;
`;

const Tabs = ({ active, orgaId, orgaName }) => (
  <Navigation>
    {orgaId && orgaName && (
      <>
        <Items>
          <Item active={active === "summary"} noMargin={true}>
            <ItemLink to={orgaId && "/billing/?id=" + orgaId + "&name=" + orgaName}>
              <ItemText>
                <Icon className="icons8-building" />
                Summary
              </ItemText>
            </ItemLink>
          </Item>

          {/* <Item active={active === "credits"}>
            <ItemLink to={orgaId && "/billing/credits?id=" + orgaId + "&name=" + orgaName}>
              <ItemText>
                <Icon className="icons8-data-encryption" />
                Credits Details
              </ItemText>
            </ItemLink>
          </Item> */}
          <Item active={active === "invoice"}>
            <ItemLink to={orgaId && "/billing/invoice/?id=" + orgaId + "&name=" + orgaName}>
              <ItemText>
                <Icon className="icons8-access-granted" />
                Invoices
              </ItemText>
            </ItemLink>
          </Item>
        </Items>
      </>
    )}
    {!orgaId && (
      <>
        <Items>
          <Item active={active === "summary"} noMargin={true}>
            <ItemLink>
              <ItemText>
                <Icon className="icons8-building" />
                Summary
              </ItemText>
            </ItemLink>
          </Item>

          {/* <Item active={active === "credits"}>
            <ItemLink>
              <ItemText>
                <Icon className="icons8-data-encryption" />
                Credits Details
              </ItemText>
            </ItemLink>
          </Item> */}
          <Item active={active === "invoice"}>
            <ItemLink>
              <ItemText>
                <Icon className="icons8-access-granted" />
                Invoices
              </ItemText>
            </ItemLink>
          </Item>
        </Items>
      </>
    )}
  </Navigation>
);

export default Tabs;
