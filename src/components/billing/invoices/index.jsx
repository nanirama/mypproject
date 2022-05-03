import React, { useEffect, useContext, useState } from "react";
import { Table, Td, Thead, Tbody, TableWrapper, TrHead, Th, Tr, Inner } from "../../table";
import { getInvoices } from "./query/invoice";
import { getSubscription } from "../query/subscription";
import { AuthContext } from "../../../context/auth";
import withLocation from "../../../HOC/location";

const Invoices = ({ ...props }) => {
  const { accessToken } = useContext(AuthContext);
  const [orgaId] = useState(props.search.id);
  const [invoices, setInvoices] = useState();
  const [subscription, setSubscription] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      setInvoices(await getInvoices(accessToken, orgaId));
      setSubscription(await getSubscription(accessToken, orgaId));
    };
    fetch();
  }, [accessToken]);

  return (
    <>
      {subscription && subscription.product.productName === "MEETUP_MONTHLY" ? (
        <TableWrapper>
          <Table>
            <Thead>
              <TrHead>
                <Th>Invoice Number</Th>
                <Th>Invoice Paid At</Th>
                <Th>Amount</Th>
                <Th>PDF</Th>
              </TrHead>
            </Thead>
            <Tbody>
              {invoices &&
                invoices.Billing_organizationPayments.nodes.map((e) => (
                  <Tr>
                    <Td>
                      <Inner>{e.invoice.invoiceNumber}</Inner>
                    </Td>
                    <Td>
                      <Inner>{e.invoice.createdAt}</Inner>
                    </Td>
                    <Td>
                      <Inner>
                        {e.invoice.total / 100} {e.invoice.currency}
                      </Inner>
                    </Td>
                    <Td>
                      <Inner>
                        <a target="_blank" href={e.invoice.invoiceUrl}>
                          <span className="icons8-vers-le-bas-3"></span>
                        </a>
                      </Inner>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableWrapper>
      ) : (
        <p>Please contact your sales representative to get your invoices.</p>
      )}
    </>
  );
};

export default withLocation(Invoices);
