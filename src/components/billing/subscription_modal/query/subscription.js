import axios from "axios";

export const savePaymentMethod = async (accessToken, input) => {
  if (accessToken) {
    const result = await axios({
      url: process.env.BILLING_API,
      method: "post",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "x-api-key": process.env.BILLING_X_API_KEY,
      },
      data: {
        query: `
          mutation createCard($input: Billing_CreateCreditCardPaymentMethodInput!) {
            Billing_createCreditCardPaymentMethod(input: $input) {
              creditCardPaymentMethod {
                id
                isDefault
              }
              errors {
                message
              }
            }
          }                
        `,
        variables: {
          input,
        },
      },
    });
    return result;
  }
};

export const createSubscription = async (accessToken, input) => {
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
            mutation createOrgaSubscription($input: Billing_CreateOrganizationSubscriptionInput!) {
              Billing_createOrganizationSubscription(input: $input) {
                organizationSubscription {
                    id
                }
                errors {
                    code
                    message
                    input
                  }
                }
            }            
        `,
          variables: {
            input,
          },
        },
      })
    ).data.data;
    return result;
  }
};
