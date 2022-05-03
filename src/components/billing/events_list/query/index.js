import axios from "axios";

export const getEventsCredits = async (accessToken, organizationId) => {
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
        query events($organizationId: ID!) {
          Billing_organizationEventCredits(organizationId: $organizationId) {
            nodes {
              eventId
              people
              exhibitor
            }
          }
        }
      `,
      },
    });
    return result.data;
  }
};

export const getEvents = async (accessToken) => {
  if (accessToken) {
    const result = (
      await axios({
        url: process.env.API_EVENTS,
        method: "post",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          query: `
                  query EventsList {
                    organizations {
                      nodes {
                        id
                        name
                      }
                    }
                    viewer {
                      id
                      events: ownedEvents {
                        organization {
                          id
                        }
                        id
                        title
                        beginsAt
                        endsAt
                        totalExhibitors
                        listEventPeople {
                          pageInfo {
                            totalItems
                          }
                        }
                      }
                    }
                  }
          `,
        },
      })
    ).data.data;
    return result;
  }
};
