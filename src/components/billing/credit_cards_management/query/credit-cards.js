import axios from "axios";

export const updateDefaultCreditCardsQuery = async (accessToken, paymentMethodId) => {
  return axios({
    url: process.env.BILLING_API,
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "x-api-key": process.env.BILLING_X_API_KEY,
    },
    data: {
      variables: {
        input: {
          paymentMethodId,
          isDefault: true,
        },
      },
      query: `
      mutation updateDefaultPaymentMethod($input: Billing_UpdateDefaultPaymentMethodInput!) {
        Billing_updateDefaultPaymentMethod(input: $input) {
          paymentMethod {
            ... on Billing_CreditCardPaymentMethod {
              id
              isDefault
            }
          }
        }
      }          
    `,
    },
  });
};

export const deleteCreditCardsQuery = async (accessToken, paymentMethodId) => {
  return axios({
    url: process.env.BILLING_API,
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "x-api-key": process.env.BILLING_X_API_KEY,
    },
    data: {
      variables: {
        input: {
          paymentMethodId,
        },
      },
      query: `
          mutation createCard($input: Billing_DeletePaymentMethodInput!) {
            Billing_deletePaymentMethod(input: $input) {
              paymentMethod {
                ... on Billing_CreditCardPaymentMethod {
                  id
                }
              }
              errors {
                message
              }
            }
          }     
          `,
    },
  });
};

export const fetchCreditsCardsQuery = async (accessToken, organizationId) => {
  if (accessToken) {
    return axios({
      url: process.env.BILLING_API,
      method: "post",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "x-api-key": process.env.BILLING_X_API_KEY,
      },
      data: {
        variables: {
          organizationId,
        },
        query: `
            query getCards($organizationId: ID!) {
              Billing_organizationPaymentMethods(organizationId: $organizationId) {
                nodes {
                  ... on Billing_CreditCardPaymentMethod {
                    id
                    brand
                    cardLast4
                    isDefault
                  }
                }
              }
            }          
          `,
      },
    });
  }
};
