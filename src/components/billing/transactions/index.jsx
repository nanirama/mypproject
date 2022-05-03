import React, { useEffect, useState } from "react";
import { Table, Td, Thead, Tbody, TableWrapper, TrHead, Th, Tr, Inner } from "../../table";
import * as styled from "./styled";

const Transactions = ({ page }) => {
  useEffect(() => {
    // console.log(page);
  }, [page]);

  return (
    <>
      <TableWrapper>
        <Table>
          <Thead>
            <TrHead>
              <Th>Credits Amount</Th>
              <Th>Current Balance</Th>
              <Th>Info</Th>
              <Th>Date</Th>
            </TrHead>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Inner>120</Inner>
              </Td>
              <Td>
                <Inner>120</Inner>
              </Td>
              <Td>
                <Inner>120</Inner>
              </Td>
              <Td>
                <Inner>120</Inner>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableWrapper>
      <styled.Pagination>
        <styled.PaginationButton>
          <span className="icons8-left-arrow"></span>
        </styled.PaginationButton>
        <div style={{ height: "1px", width: "8px" }}></div>
        <styled.PaginationButton>
          <span style={{ transform: "rotate(181deg)" }} className="icons8-left-arrow"></span>
        </styled.PaginationButton>
      </styled.Pagination>
    </>
  );
};

export default Transactions;
