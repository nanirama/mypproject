import React, { useEffect, useState, useMemo } from "react";
import Layout from "../../components/layout";
import { Grid, Col, Row } from "react-flexbox-grid";
import { Typo2, Typo3 } from "../../components/typographie";
import LogoSrc from "../../assets/images/Logo/LogoFINAL.svg";
import Link from "../../components/utils/link";
import { SpaceH } from "../../components/space";
import { resolveRefreshToken } from "../../HOC/auth";
import { getOrganization } from "../../HOC/graphql";
import axios from "axios";
// import SubscriptionModal from "../../components/credits/plan_subscription";
import Organization from "../../components/billing/organization_select";
import CreditsPurchaseModal from "../../components/billing/credits_purchase_modal";
import { ToastContainer } from "react-toastify";
import * as queryString from "query-string";
import { graphql } from "gatsby";
import { ButtonSecondary } from "../../components/button";
import { Logo } from "../../components/billing/styled";
import { AuthProvider } from "../../context/auth";

const pageContext = {
  lang: "en-us",
  meta_description: "Events",
  meta_title: "Events",
  route: "billing/organization",
  showNavigation: "contentOnly",
};

const Page = ({ ...props }) => {
  const [organization, setOrganization] = useState("");

  useEffect(() => {
    // const getInfo = async () => {
    //   const accessToken = await resolveRefreshToken();
    //   if (accessToken) {
    //     const orga = await getOrganization(accessToken, id);
    //     console.log(orga);
    //     if (orga && orga.organizations && orga.organizations.nodes && orga.organizations.nodes.length > 0) {
    //       setOrganization(orga.organizations.nodes[0]);
    //     }
    //   }
    // };
    // getInfo();
  });

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
                <Link to={"/"}>
                  <Logo src={LogoSrc} />
                </Link>
              </Col>
            </Row>

            <Organization />
          </Grid>
        </div>
        <ToastContainer />
      </AuthProvider>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query Organization {
    translation: prismicTranslate {
      ...genericData
    }
  }
`;
