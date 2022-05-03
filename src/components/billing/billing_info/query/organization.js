import axios from "axios";

export const getOrganizationBillingInfo = async (accessToken, organizationId) => {
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
        query getBillingOrganization($organizationId: ID!) {
          Billing_organization(organizationId: $organizationId) {
            billing {
              state
              city
              country
              zipCode
              companyName
              street
              vat
              billingEmail
              currency
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

export const updateOrganizationBillingInfo = async (accessToken, payload) => {
  const query = `
    mutation createOrganizationBilling($input: Billing_UpdateOrganizationBillingInput!) {
      Billing_updateOrganizationBilling(input: $input) {
        organizationBilling {
          city
        }
      }
    }
  `;

  return axios({
    url: process.env.BILLING_API,
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "x-api-key": process.env.BILLING_X_API_KEY,
    },
    data: {
      query,
      variables: {
        input: payload,
      },
    },
  });
};

export default getOrganizationBillingInfo;
