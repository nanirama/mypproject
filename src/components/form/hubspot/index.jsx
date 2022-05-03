import React from "react";
import HubspotForm from "react-hubspot-form";
import { HubspotStyle, HubspotStyleEbook } from "./styled";

export default ({ ...props }) => {
  const hubspot = process.env.NODE_ENV === "development" ? props.hubspot_dev_id : props.hubspot_id;

  return (
    <>
      {!props.themeHubspot && (
        <HubspotStyle {...props}>
          <HubspotForm portalId="3004554" formId={hubspot} css={false} />
        </HubspotStyle>
      )}
      {props.themeHubspot === "ebook" && (
        <HubspotStyleEbook {...props}>
          <HubspotForm portalId="3004554" formId={hubspot} css={false} />
        </HubspotStyleEbook>
      )}
    </>
  );
};
