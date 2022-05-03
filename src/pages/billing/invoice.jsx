import React, { useEffect, useState, useMemo } from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { Grid, Col, Row } from "react-flexbox-grid";
import { Typo2, Typo3 } from "../../components/typographie";
import { navigate } from "gatsby";
import LogoSrc from "../../assets/images/Logo/LogoFINAL.svg";
import Link from "../../components/utils/link";
import { SpaceH } from "../../components/space";
import axios from "axios";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import CancelSubscription from "../../components/billing/cancel_subscription_modal";
import { AuthProvider } from "../../context/auth";

import Placeholder from "../../components/placeholder";

import BillingInfoForm from "../../components/billing/billing_info";

import HorizontalMenu from "../../components/billing/horizontal_menu";
import BillingSummary from "../../components/billing/credits_summary";
import CreditsCard from "../../components/billing/credit_cards_management";
import Invoices from "../../components/billing/invoices";

import { isOrganizationValid } from "../../components/billing/organization_select/helper";

import * as queryString from "query-string";
import withLocation from "../../HOC/location";

const pageContext = {
  lang: "en-us",
  meta_description: "Studio - Invoice",
  meta_title: "Studio - Invoice",
  route: "billing/invoice",
  showNavigation: "contentOnly",
};

const Page = ({ ...props }) => {
  const [id] = useState(props.search.id);
  const [orgaName] = useState(props.search.name);

  useEffect(() => {
    if (props.search) {
      if (!id) navigate("/billing/organization?error=organization-not-found&hide=true");
      const fetch = async () => {
        if (id) {
          const search = await isOrganizationValid(id);
          if (!search) {
            navigate("/billing/organization?error=organization-not-valid&hide=true");
          }
        }
      };
      fetch();
    }
  }, [props.search, id]);
  return (
    <Layout dataNavigation={props.data.translation} pageContext={pageContext}>
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

            <HorizontalMenu active={"invoice"} orgaId={id} orgaName={orgaName} />

            <SpaceH of={20} />

            <Row>
              <Col xs={12}>
                <Typo3>Billing Information</Typo3>
              </Col>
            </Row>

            <SpaceH of={10} />
            <Row>
              <Col xs={8}>
                <BillingInfoForm orgaId={id} />
              </Col>
            </Row>

            <SpaceH of={20} />

            {/* <Row>
              <Col xs={12}>
                <Typo3 bold>Your Credits Card</Typo3>
              </Col>
            </Row>

            <SpaceH of={20} />

            <Row>
              <Col xs={8}>
                <CreditsCard organizationId={id} />
              </Col>
            </Row> */}

            <SpaceH of={20} />

            {/* <Row>
              <Col xs={12}>
                <Typo3 bold>Subscription</Typo3>
              </Col>
            </Row>

            <SpaceH of={20 /> */}

            {/* <Row>
              <Col xs={12}> */}
            <CancelSubscription organizationId={id} />
            {/* </Col>
            </Row> */}

            <SpaceH of={30} />

            <Row>
              <Col xs={12}>
                <Typo3 bold>Invoices</Typo3>
              </Col>
            </Row>

            <SpaceH of={20} />

            <Row>
              <Col xs={12}>
                <Invoices />
              </Col>
            </Row>
          </Grid>
        </div>
        <ToastContainer />
      </AuthProvider>
    </Layout>
  );
};

export default withLocation(Page);

export const query = graphql`
  query Invoices {
    translation: prismicTranslate {
      ...genericData
    }
  }
`;
