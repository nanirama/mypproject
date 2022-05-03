import React, { useEffect, useState, useMemo } from "react";
import Layout from "../../components/layout";
import { navigate } from "gatsby";
import { Grid, Col, Row } from "react-flexbox-grid";
import { Typo2, Typo3 } from "../../components/typographie";
import LogoSrc from "../../assets/images/Logo/LogoFINAL.svg";
import Link from "../../components/utils/link";
import { SpaceH } from "../../components/space";
import { resolveRefreshToken } from "../../HOC/auth";
import { getOrganization } from "../../HOC/graphql";
import axios from "axios";
// import SubscriptionModal from "../../components/credits/plan_subscription";
import HorizontalMenu from "../../components/billing/horizontal_menu";
import BillingSummary from "../../components/billing/credits_summary";
import Upgrade from "../../components/billing/upgrade_plan";
import EventList from "../../components/billing/events_list";
import CreditsPurchaseModal from "../../components/billing/credits_purchase_modal";
import { ToastContainer } from "react-toastify";
import * as queryString from "query-string";
import { graphql } from "gatsby";
import { ButtonSecondary } from "../../components/button";
import withLocation from "../../HOC/location";
import { isOrganizationValid } from "../../components/billing/organization_select/helper";
import { AuthProvider } from "../../context/auth";

import Placeholder from "../../components/placeholder";

const pageContext = {
  lang: "en-us",
  meta_description: "Studio - Billing",
  meta_title: "Studio - Billing",
  route: "billing/index",
  showNavigation: "contentOnly",
};

const Page = ({ ...props }) => {
  const [id] = useState(props.search.id);
  const [orgaName] = useState(props.search.name);

  useEffect(() => {
    if (props.search) {
      // if (!id) navigate("/billing/organization?error=organization-not-found&hide=true");
      const fetch = async () => {
        if (id) {
          const search = await isOrganizationValid(id);
          if (!search) {
            // navigate("/billing/organization?error=organization-not-valid&hide=true");
          }
        }
      };
      fetch();
    }
  }, [props.search, id]);

  return (
    <Layout dataNavigation={props.data.translation} pageContext={pageContext}>
      <script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=81570657-2eba-4ca6-a282-01bd4aeec839"
      ></script>
      <AuthProvider>
        <div style={{ backgroundColor: "#FAFAFA", minHeight: "100vh", padding: "50px 0" }}>
          <Grid>
            <Row>
              <Col xs={12}>
                <Link to={"/"}>{/* <styled.Logo src={LogoSrc} /> */}</Link>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>{orgaName ? <Typo2>{orgaName}</Typo2> : <Placeholder width={170} height={39} />}</Col>
            </Row>

            <SpaceH of={20} />

            <HorizontalMenu active={"summary"} orgaId={id} orgaName={orgaName} />

            <SpaceH of={20} />

            <Row middle="xs">
              <Col lg={8} xs={12}>
                <Typo3 bold>
                  Credits Usage
                  {/* <div style={{ float: "right" }}>
                  <CreditsPurchaseModal />
                </div> */}
                </Typo3>
              </Col>
            </Row>

            <SpaceH of={20} />

            <Row>
              <Col lg={8} xs={12}>
                <BillingSummary />
              </Col>
            </Row>

            <SpaceH of={20} />

            <Row>
              <Col xs={12}>
                <Typo3 bold>Looking to upgrade ?</Typo3>
              </Col>
            </Row>
            <SpaceH of={20} />
            <Row>
              <Col xs={12}>
                <ButtonSecondary to={"https://swapcard.com/contact-us"}>Contacy our sales team</ButtonSecondary>
              </Col>
            </Row>

            {/* <SpaceH of={30} />
            <Row>
              <Col xs={12}>
                <Typo3 bold>Upgrade Your Plan</Typo3>
              </Col>
            </Row>

            <SpaceH of={20} />

            <Row>
              <Upgrade organizationId={id} orgaName={orgaName} />
            </Row> */}

            <SpaceH of={30} />

            <Row>
              <Col xs={12}>
                <Typo3 bold>Your Events</Typo3>
              </Col>
            </Row>

            <SpaceH of={20} />

            <Row>
              <Col xs={12}>
                <EventList orgaId={id} />
              </Col>
            </Row>

            <SpaceH of={30} />

            <SpaceH of={20} />
          </Grid>
        </div>
        <ToastContainer />
      </AuthProvider>
    </Layout>
  );
};

export default withLocation(Page);

export const query = graphql`
  query Billing {
    translation: prismicTranslate {
      ...genericData
    }
  }
`;
