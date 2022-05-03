import axios from "axios";

export async function resolveRefreshToken() {
  try {
    return (
      await axios(process.env.API_LOGIN + "/refresh", {
        method: "POST",
        withCredentials: true,
      })
    ).data.accessToken;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getUser() {
  const accessToken = await resolveRefreshToken();

  if (accessToken) {
    const result = (
      await axios({
        url: process.env.API_USER,
        method: "post",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          query: `
            query auth {
              exibitiors: Core_myExhibitors(cursor: {first: 100}, sort: [{field:EVENT_BEGINS_AT, order: DESC}]) {
                nodes {
                  _id
                  name
                  event {
                    title
                    beginsAt
                  }
                }
              }
              me {
                events {
                  edges {
                    node {
                      userRole
                      title
                      _id
                      beginsAt
                      eventStatus
                    }
                  }
                }
                user {
                  ...on Core_SelfUser {
                    _id
                    primaryEmail
                    firstName
                    lastName
                    jobTitle
                    phoneNumbers {
                      number
                    }
                  }
                }
              }
            }
        `,
        },
      })
    ).data;
    return result.data;
  }
  return null;
}

export async function getExhibitorByEventId(eventId) {
  const accessToken = await resolveRefreshToken();

  if (accessToken) {
    const result = (
      await axios({
        url: process.env.API_USER,
        method: "post",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          variables: { eventId },
          query: `
            query me($eventId: [ID!]) {
              exibitiors: Core_myExhibitors(filters: [{eventIds: $eventId}], cursor: {first: 100}, sort: [{field: EVENT_BEGINS_AT, order: DESC}]) {
                nodes {
                  _id
                  name
                  event {
                    title
                    beginsAt
                    _id
                  }
                }
              }
            }          
        `,
        },
      })
    ).data;
    return result;
  }
  return null;
}

export async function getUserAndToken() {
  const accessToken = await resolveRefreshToken();

  if (accessToken) {
    const result = (
      await axios({
        url: process.env.API_USER,
        method: "post",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          query: `
            query auth {
              exibitiors: Core_myExhibitors(cursor: {first: 100}, sort: [{field:EVENT_BEGINS_AT, order: DESC}]) {
                nodes {
                  _id
                  name
                  event {
                    title
                    beginsAt
                    _id
                  }
                }
              }
              me {
                events {
                  edges {
                    node {
                      userRole
                      title
                      _id
                      beginsAt
                      eventStatus
                    }
                  }
                }
                user {
                  ...on Core_SelfUser {
                    _id
                    primaryEmail
                    firstName
                    lastName
                    jobTitle
                  }
                }
              }
            }
        `,
        },
      })
    ).data;
    return {
      accessToken: accessToken,
      userData: result.data,
    };
  }
  return null;
}
