import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import HubspotForm from "react-hubspot-form";
import logo from "../../../assets/images/Logo/LogoFINAL.svg";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo2, Typo5 } from "../../typographie";
import * as styled from "./styled";
import { SpaceH } from "../../space";
import Image from "../../image";
import Route from "../../../localization";
import withLocation from "../../../HOC/location";

const Demo = ({ ...props }) => {
  const [isBuildPlan, setIsBuildPlan] = useState(false);
  useEffect(() => {
    var event = new Event("change");
    setInterval(() => {
      var buildPlanPaypload = document.getElementsByName("build_plan_payload");
      if (buildPlanPaypload && buildPlanPaypload.length > 0) {
        buildPlanPaypload[0].value = window.localStorage.getItem("package_saas");
        buildPlanPaypload[0].dispatchEvent(event);
      }
    }, 500);

    const search = props.search;

    if (typeof search.build !== "undefined") {
      setIsBuildPlan(true);
    }
  }, []);

  const hubspotId =
    process.env.NODE_ENV === "development"
      ? "70c84184-e932-4a43-be38-80ede3d90f25"
      : props.data.primary.hubspot_form_id;

  return (
    <Grid>
      <Row>
        <div style={{ padding: "36px 0" }}>
          <Link to={Route[props.lang]["homepage"]}>
            <styled.LogoDesktop src={logo} />
          </Link>
        </div>
      </Row>
      <Row>
        <Col md={6}>
          <styled.FormContainer>
            {isBuildPlan && <Typo2>{props.lang === "fr-fr" ? "Terminez votre plan" : "Submit your plan"}</Typo2>}
            {!isBuildPlan && <Typo2>{props.data.primary.title}</Typo2>}
            <SpaceH of={20} />
            <Typo5>{props.data.primary.sub_title}</Typo5>
            <SpaceH of={20} />
            <styled.FormLine />
            <styled.HubspotStyle>
              <HubspotForm portalId="3004554" formId={hubspotId} css="yes" onReady={(form) => console.log(form)} />
            </styled.HubspotStyle>
          </styled.FormContainer>
        </Col>
        <Col md={6} xs={12}>
          <styled.Sidebar>
            <Typo5 bold>{props.data.primary.trusted_by}</Typo5>
            <SpaceH of={32} />
            <styled.Customers>
              {props.data.items.map((item, key) => (
                <styled.CustomersLogo>
                  <Image src={item.logo.url} className="img-responsive" />
                </styled.CustomersLogo>
              ))}
            </styled.Customers>
            {/* <SpaceH of={16} />
            <Link style={{ textDecoration: "underline" }} to={Route[props.lang]["homepage"]}>
              {props.data.primary.back_homepage}
            </Link> */}
          </styled.Sidebar>
        </Col>
      </Row>
    </Grid>
  );
};

export default withLocation(Demo);

export const query = graphql`
  fragment PricingContactForm on PrismicTemplate2 {
    data {
      bodyMain {
        ... on PrismicTemplate2BodyMainContactV2Form {
          __typename
          slice_type
          primary {
            title
            sub_title
            back_homepage
            hubspot_form_id
            trusted_by
          }
          items {
            logo {
              url
            }
          }
        }
      }
    }
  }
`;
