import axios from "axios";

export const getSubscription = async (accessToken, organizationId) => {
  if (accessToken != "") {
    const result = await axios({
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
          query subscription($organizationId: ID!) {
            Billing_organizationSubscription(organizationId: $organizationId) {
              id
              currentStartBillingDate
              nextBillingDate
              canceledAt
              status
              product {
                productName
              }
            }
          }
      `,
      },
    });
    return result.data?.data?.Billing_organizationSubscription;
  }
};

export const cancelSubscription = async (accessToken, organizationId) => {
  const result = await axios({
    url: process.env.BILLING_API,
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    data: {
      variables: {
        organizationId,
      },
      query: `
      mutation cancelSubscription($organizationId: ID!) {
        Billing_cancelOrganizationSubscription(subscriptionId: $organizationId) {
          organizationSubscription {
            status
          }
        }
      }      
      `,
    },
  });
  return result.data.data.Billing_cancelOrganizationSubscription;
};
