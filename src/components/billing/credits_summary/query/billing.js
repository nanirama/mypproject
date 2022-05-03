import axios from "axios";

export const getOrganizationBillingQuery = async (accessToken, organizationId) => {
  if (accessToken) {
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
              query BillingInfo($organizationId: ID!) {
                Billing_organization(organizationId: $organizationId) {
                  exhibitorsConsumedCredits
                  exhibitorsAvailableCredits
                  peopleConsumedCredits
                  peopleAvailableCredits
                  billing {
                    currency
                  }
                }
              }
              `,
      },
    });
    return result.data?.data;
  }
};
