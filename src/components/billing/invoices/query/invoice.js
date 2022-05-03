import axios from "axios";

export const getInvoices = async (accessToken, organizationId) => {
  if (accessToken) {
    const result = (
      await axios({
        url: process.env.BILLING_API,
        method: "post",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "x-api-key": process.env.BILLING_X_API_KEY,
        },
        data: {
          query: `
          query Payment($organizationId: ID!) {
            Billing_organizationPayments(organizationId: $organizationId, cursor: { first:30 }) {
              nodes {
                invoice {
                  total
                  invoiceUrl
                  currency
                  createdAt
                  invoiceNumber
                }
              }
            }
          }      
        `,
          variables: {
            organizationId,
          },
        },
      })
    ).data.data;
    return result;
  }
};
