import axios from "axios";

export const getOrganization = async (accessToken, id) => {
  const result = (
    await axios({
      url: process.env.API_EVENTS,
      method: "post",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        variables: {
          id,
        },
        query: `
        query OrganizationLayout_Organization($id: [ID!]) {
          organizations(filter: {organizationIds: $id}) {
            nodes {
              name
            }
          }
        }        
        `,
      },
    })
  ).data.data;
  return result;
};
