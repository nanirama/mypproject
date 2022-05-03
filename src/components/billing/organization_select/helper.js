import { resolveRefreshToken } from "../../../HOC/auth";
import { getOrganization } from "../../../HOC/graphql";

export const isOrganizationValid = async (orgaId) => {
  const accessToken = await resolveRefreshToken();
  if (accessToken) {
    const orga = await getOrganization(accessToken, orgaId);
    if (orga && orga.organizations && orga.organizations.nodes && orga.organizations.nodes.length > 0) {
      return orga.organizations.nodes;
    }
  }
  return false;
};
