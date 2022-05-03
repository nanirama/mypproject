import axios from "axios";

export const cancelSubscription = async (accessToken, subscriptionId) => {
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
          mutation createOrgaSubscription($subscriptionId: ID!) {
            Billing_cancelOrganizationSubscription(subscriptionId: $subscriptionId) {
              organizationSubscription {
                id
              }
              errors {
                code
                message
              }
            }
          }
             
        `,
          variables: {
            subscriptionId,
          },
        },
      })
    ).data.data;
    return result;
  }
};
