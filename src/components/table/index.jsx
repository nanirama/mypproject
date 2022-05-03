import React from "react";
import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  overflow: hidden;
`;

export const Thead = styled.thead``;
export const TrHead = styled.tr`
  border-bottom: 1px solid rgb(229, 229, 229);
  border-collapse: collapse;
  position: relative;

  transition: 50ms;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid rgb(229, 229, 229);
  border-collapse: collapse;
  position: relative;

  transition: 50ms;
  &:nth-child(even) {
    background-color: #fbfbfb;
  }
`;
export const Tbody = styled.tbody``;
export const Td = styled.td`
  /* border: 1px solid rgb(229, 229, 229); */
  /* font-size: 12px !important; */
  vertical-align: middle;
`;
export const Th = styled.th`
  color: rgb(158, 158, 158);
  text-align: justify;
  font-weight: 600;
  /* font-size: 14px; */
  padding: 16px;
  white-space: nowrap;
`;

export const TableWrapper = styled.div`
  border-top: 1px solid rgb(229, 229, 229);
  border-right: 1px solid rgb(229, 229, 229);
  border-left: 1px solid rgb(229, 229, 229);
  border-image: initial;
  border-radius: 3px;
  overflow-x: auto;
  border-bottom: none;
  position: relative;
  transition: all 150ms ease 0s;
`;

export const Inner = styled.div`
  padding: 10px 16px;
`;

export default styled.div``;
