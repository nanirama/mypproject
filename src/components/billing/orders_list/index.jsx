import React, { useEffect, useState } from "react";
import { Table, Td, Thead, Tbody, TableWrapper, TrHead, Th, Tr, Inner } from "../../table";

const Orders = () => {
  return (
    <TableWrapper>
      <Table>
        <Thead>
          <TrHead>
            <Th>Credits</Th>
            <Th>Type</Th>
            <Th>Purchased At</Th>
            <Th>Expire In</Th>
          </TrHead>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Inner>120</Inner>
            </Td>
            <Td>
              <Inner>People</Inner>
            </Td>
            <Td>
              <Inner>01/01/2021</Inner>
            </Td>
            <Td>
              <Inner>in 90 days</Inner>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableWrapper>
  );
};

export default Orders;
