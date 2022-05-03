import React, { useState, useEffect } from "react";
import { graphql, navigate } from "gatsby";
import { Typo1, Typo2, Typo3, Typo4, Typo5, Body } from "../components/typographie";
import { Grid, Row, Col } from "react-flexbox-grid";
import Layout from "../components/layout";
import Route from "../localization";
import { Input } from "../components/form/input";
import Submit from "../components/form/submit";
import Modal from "react-modal";
import { SpaceH } from "../components/space";
import { LogoDefault } from "../components/logo";
import Link from "../components/utils/link";
import styled from "styled-components";
import { ButtonSecondary } from "../components/button";
import SwapImage from "../components/image";
import { media } from "../components/utils/style-utils";
import HubspotForm from "react-hubspot-form";
import { HubspotStyle } from "../components/form/hubspot/styled";
import { isValidEmail } from "../components/utils/helper";
import MixpanelHelper, { analyticsIdentify } from "../components/utils/segment";

const Wrapper = styled.div`
  margin: 30px 0;
`;

const ColOrderArticle = styled(Col)`
  ${media.tablet`
  order: ${(props) => props.order};
`};
`;

const DemoPathBloc = styled.div`
  /* margin-bottom: 16px; */
  text-align: center;
  z-index: 3;
  position: relative;
  /* flex: 0 0 auto; */
  border-radius: 5px;
  flex-basis: auto; /* default value */
  flex-grow: 1;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  background: #fff;
  padding: 30px 10px;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(53, 72, 88, 0.1);
`;

const CustomersLogo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: center;
  /* height: ${(props) => (props.crop === "Yes" ? "170px" : "100%")}; */
  overflow: hidden;
  ${media.tablet`
      height:100%;
  `}
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  ${media.tablet`
  margin: 10px 30px 10px 30px;
  `}
  text-align: center;
  img {
    max-width: 120px;
    ${media.tablet`
      max-width:${(props) => (props.logoWidth !== null ? `${props.logoWidth}px` : "120px")};
    `}
    max-height: 90px;
    width: auto;
    height: auto;
  }
`;

const DemoWrapperModal = styled.div`
  width: 330px;
  padding: 20px;
  z-index: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapperModal = styled.div`
  ${media.tablet`
  width: 610px;
  `}
  padding: 20px;
  height: calc(100vh - 100px);

  .submitted-message {
    text-align: center !important;
    font-size: 1.3rem;

    line-height: 1.5rem;
    color: ${(props) => props.theme.color.body};
  }
`;

const LoadingHubspot = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: calc(100% - 20px);
  display: ${(props) => (props.loadingForm ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Art = styled.div`
  width: 500px;
  height: 500px;
  background: ${(props) => props.theme.color.secondary};
  position: absolute;
  z-index: 1;
  top: -100px;
  left: -400px;
  border-radius: 50%;
`;

const DemoPathDesc = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.body};
`;

export const CloseModal = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const ArticleImage = styled.div`
  margin-top: 20px;
  ${media.tablet`
  margin-top:0;
  `};
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 3px 12px 0 rgba(0,0,0,.24)",
    border: "none",
  },
  overlay: { zIndex: 1000 },
};

export default ({ ...props }) => {
  const [modalWebinarIsOpen, setWebinarIsOpen] = useState(false);
  const [modalRecordedIsOpen, setRecordedIsOpen] = useState(false);
  const [modalOneOneIsOpen, setOneOneIsOpen] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [modalAttendeeIsOpen, setModalAttendeeIsOpen] = useState(false);

  const [modalMarvelIsOpen, setMarvelModalOpen] = useState(false);

  const [demoEmail, setDemoEmail] = useState(null);
  const [demoEmailDirty, setDemoEmailDirty] = useState(false);
  const [demoEmailLoading, setDemoEmailLoading] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
    if (!modalIsOpen) {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [modalIsOpen]);

  const [marvelEmail, setMarvelEmail] = useState(null);
  const [marvelEmailDirty, setMarvelEmailDirty] = useState(false);

  const [loadingForm, setLoadingForm] = useState(true);

  function submitFormDemo() {
    if (isValidEmail(demoEmail)) {
      setDemoEmailLoading(true);
      setDemoEmailDirty(false);

      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";

      // analyticsIdentify(demoEmail, { email: demoEmail });

      setLoadingForm(true);

      navigate(Route[props.pageContext.lang]["about/contact/sales/v2"] + "?email=" + demoEmail);
    } else {
      setDemoEmailDirty(true);
    }
  }

  function submitMarvelForm() {
    if (isValidEmail(marvelEmail)) {
      setMarvelEmailDirty(false);

      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";

      // analyticsIdentify(marvelEmail, { email: marvelEmail });

      navigate(Route[props.pageContext.lang]["demo-marvelapp-event-app"]);

      setLoadingForm(true);
    } else {
      setMarvelEmailDirty(true);
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("message", (event) => {
      if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormReady") {
        setLoadingForm(false);
      }

      if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmit") {
        const formType = event.data.data[7].value;
        if (formType === "Recorded Demo") {
          setLoadingForm(true);
          document.body.style.overflow = "auto";
          document.documentElement.style.overflow = "auto";
          navigate(Route[props.pageContext.lang]["recorded-demo"]);
        }
      }
    });
  }

  const t = props.data.prismicDemo2.data;

  return (
    <Layout dataNavigation={props.data.translation} pageContext={props.pageContext}>
      <Wrapper>
        <Grid>
          <Row>
            <Col md={12}>
              <Link to={Route[props.pageContext.lang]["homepage"]}>
                <LogoDefault />
              </Link>
            </Col>
          </Row>

          <SpaceH of={40} />

          <Row center="xs">
            <Col md={7}>
              <Typo1>{t.title}</Typo1>
              <SpaceH of={10} />
              <Typo3>{t.sub_title}</Typo3>
            </Col>
          </Row>

          <SpaceH of={60} />

          {/* Demo Pth */}
          <div style={{ position: "relative" }}>
            <Row center="xs">
              {t.demo_path.map((e) => (
                <Col md={4}>
                  <DemoPathBloc>
                    <Typo3 bold={600} color={"#00CC88"}>
                      {e.demo_path_title}
                    </Typo3>
                    <SpaceH of={20} />
                    <Typo5>{e.demo_path_sub_title}</Typo5>
                    <SpaceH of={20} />
                    <DemoPathDesc>{e.demo_path_description}</DemoPathDesc>
                    <SpaceH of={20} />
                    {e.demo_path_key === "webinar" && (
                      <MixpanelHelper
                        analytics-location="Demo V2"
                        analytics-category="Open weekly modal"
                        analytics-label={t.demo_path_button_label}
                      >
                        <ButtonSecondary onClick={() => setWebinarIsOpen(true)}>
                          {e.demo_path_button_label}
                        </ButtonSecondary>
                      </MixpanelHelper>
                    )}
                    {e.demo_path_key === "one_one" && (
                      <MixpanelHelper
                        analytics-location="Demo V2"
                        analytics-category="Open demo modal"
                        analytics-label={t.demo_path_button_label}
                      >
                        <ButtonSecondary onClick={() => setOneOneIsOpen(true)}>
                          {e.demo_path_button_label}
                        </ButtonSecondary>
                      </MixpanelHelper>
                    )}
                    {e.demo_path_key === "recorded" && (
                      <MixpanelHelper
                        analytics-location="Demo V2"
                        analytics-category="Open recorded modal"
                        analytics-label={t.demo_path_button_label}
                      >
                        <ButtonSecondary onClick={() => setRecordedIsOpen(true)}>
                          {e.demo_path_button_label}
                        </ButtonSecondary>
                      </MixpanelHelper>
                    )}
                  </DemoPathBloc>
                </Col>
              ))}
            </Row>
            <Art />
          </div>

          <Modal
            isOpen={modalWebinarIsOpen}
            onRequestClose={() => {
              setWebinarIsOpen(false);
              setLoadingForm(true);
              setModalIsOpen(false);
            }}
            onAfterOpen={() => setModalIsOpen(true)}
            style={customStyles}
            contentLabel="Recorded Demo"
          >
            <WrapperModal>
              <CloseModal
                onClick={() => {
                  setWebinarIsOpen(false);
                  setLoadingForm(true);
                  setModalIsOpen(false);
                }}
              >
                {t.close}
              </CloseModal>
              <Typo3 bold={600} center>
                {t.modal_weekly_demo_title}
              </Typo3>
              <SpaceH of={20} />
              <LoadingHubspot loadingForm={loadingForm}>{t.loading}</LoadingHubspot>
              <div style={{ display: loadingForm ? "none" : "block" }}>
                <HubspotStyle centerSubmit>
                  <HubspotForm portalId="3004554" formId={t.modal_weekly_demo_hubspot_id} css={false} />
                </HubspotStyle>
              </div>
              <br />
            </WrapperModal>
          </Modal>

          <Modal
            isOpen={modalOneOneIsOpen}
            onRequestClose={() => {
              setOneOneIsOpen(false);
              setLoadingForm(true);
              setModalIsOpen(false);
            }}
            onAfterOpen={() => setModalIsOpen(true)}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <DemoWrapperModal>
              <Typo4 bold={600} center>
                {t.modal_one_one_title}
              </Typo4>
              <SpaceH of={20} />

              <Input
                style={{ borderColor: demoEmailDirty ? "red" : "" }}
                name="email"
                placeholder="Email"
                onChange={(e) => setDemoEmail(e.target.value)}
              />
              <SpaceH of={20} />

              <Submit value={t.next_step} onClick={submitFormDemo} isLoading={demoEmailLoading} />
            </DemoWrapperModal>
            <br />
          </Modal>

          {/* Recorded */}
          <Modal
            isOpen={modalRecordedIsOpen}
            onRequestClose={() => {
              setRecordedIsOpen(false);
              setLoadingForm(true);
              setModalIsOpen(false);
            }}
            onAfterOpen={() => setModalIsOpen(true)}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <WrapperModal>
              <CloseModal
                onClick={() => {
                  setRecordedIsOpen(false);
                  setLoadingForm(true);
                  setModalIsOpen(false);
                }}
              >
                {t.close}
              </CloseModal>
              <Typo3 bold={600} center>
                {t.modal_recorded_demo_title}
              </Typo3>
              <SpaceH of={20} />
              <LoadingHubspot loadingForm={loadingForm}>{t.loading}</LoadingHubspot>
              <div style={{ display: loadingForm ? "none" : "block" }}>
                <HubspotStyle centerSubmit>
                  <HubspotForm portalId="3004554" formId={t.modal_recorded_demo_hubspot_id} css={false} />
                </HubspotStyle>
              </div>
            </WrapperModal>
            <br />
          </Modal>

          <SpaceH of={80} />

          <Row center="xs">
            <Col>
              <Typo1>{t.title_explore_your_own}</Typo1>
            </Col>
          </Row>
        </Grid>

        <SpaceH of={40} />

        {t.explore_your_own.map((e, i) => (
          <div style={{ backgroundColor: i % 2 ? "#F9FAFC" : "", padding: "20px 0" }}>
            <Grid>
              <Row middle="xs" start="md" center="xs">
                <ColOrderArticle md={5} xs={12} order={i % 2 ? 1 : 0} smOffset={i % 2 ? 1 : 0}>
                  <div>
                    <Typo2>{e.title_explore_your_own1}</Typo2>
                    <SpaceH of={20} />
                    <Body>{e.description_explore_your_own}</Body>
                  </div>

                  <SpaceH of={20} />
                  {e.explore_your_own_key === "play_ground" && (
                    <MixpanelHelper
                      analytics-location="Demo V2"
                      analytics-category="Open marvel modal"
                      analytics-label={t.button_explore_your_own}
                    >
                      <ButtonSecondary onClick={() => setMarvelModalOpen(true)}>
                        {e.button_explore_your_own}
                      </ButtonSecondary>
                    </MixpanelHelper>
                  )}
                  {e.explore_your_own_key === "attendee" && (
                    <MixpanelHelper
                      analytics-location="Demo V2"
                      analytics-category="Open attendee trial modal"
                      analytics-label={t.button_explore_your_own}
                    >
                      <ButtonSecondary onClick={() => setModalAttendeeIsOpen(true)}>
                        {e.button_explore_your_own}
                      </ButtonSecondary>
                    </MixpanelHelper>
                  )}
                </ColOrderArticle>

                <ColOrderArticle md={6} xs={12} smOffset={i % 2 ? 0 : 1}>
                  <ArticleImage>
                    <SwapImage
                      style={{ margin: "0 auto", maxWidth: "500px" }}
                      className="img-responsive"
                      fluidImage={e.picture}
                    />
                  </ArticleImage>
                </ColOrderArticle>
              </Row>
              {i % 2 === 0 && <SpaceH of={60} />}
            </Grid>
          </div>
        ))}

        <Modal
          isOpen={modalAttendeeIsOpen}
          onRequestClose={() => {
            setModalAttendeeIsOpen(false);
            setLoadingForm(true);
            setModalIsOpen(false);
          }}
          onAfterOpen={() => setModalIsOpen(true)}
          style={customStyles}
          contentLabel="Attendee"
        >
          <WrapperModal>
            <CloseModal
              onClick={() => {
                setModalAttendeeIsOpen(false);
                setLoadingForm(true);
                setModalIsOpen(false);
              }}
            >
              {t.close}
            </CloseModal>
            <Typo3 bold={600} center>
              {t.modal_attendee_title}
            </Typo3>
            <SpaceH of={20} />
            <LoadingHubspot loadingForm={loadingForm}>{t.loading}</LoadingHubspot>
            <div style={{ display: loadingForm ? "none" : "block" }}>
              <HubspotStyle centerSubmit>
                <HubspotForm portalId="3004554" formId={t.modal_attendee_hubspot_id} css={false} />
              </HubspotStyle>
            </div>
          </WrapperModal>
        </Modal>

        <Modal
          isOpen={modalMarvelIsOpen}
          onRequestClose={() => {
            setMarvelModalOpen(false);
            setModalIsOpen(false);
          }}
          style={customStyles}
          onAfterOpen={() => setModalIsOpen(true)}
          contentLabel="Marvel"
        >
          <DemoWrapperModal>
            <Typo4 bold={600} center>
              {t.marvel_modal_title}
            </Typo4>
            <SpaceH of={20} />

            <Input
              style={{ borderColor: marvelEmailDirty ? "red" : "" }}
              name="email"
              placeholder="Email"
              onChange={(e) => setMarvelEmail(e.target.value)}
            />
            <SpaceH of={20} />
            <Submit value={t.marvel_modal_submit} onClick={submitMarvelForm} />
          </DemoWrapperModal>
        </Modal>

        <SpaceH of={80} />
        <Grid>
          <Row center="xs">
            <Col>
              <Typo3>{t.title_customers}</Typo3>
            </Col>
          </Row>

          <SpaceH of={50} />

          <Row>
            <CustomersLogo>
              {t.customers_logo.map((e) => (
                <Logo>
                  <img src={e.customers.fluid.src} className="img-responsive" alt="logo" />
                </Logo>
              ))}
            </CustomersLogo>
          </Row>
        </Grid>

        <SpaceH of={50} />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query getDocumentDemo2($id: String!, $lang: String!) {
    prismicDemo2(id: { eq: $id }) {
      data {
        title
        sub_title

        next_step

        demo_path {
          demo_path_key

          demo_path_title
          demo_path_sub_title
          demo_path_description
          demo_path_button_label
        }

        title_explore_your_own

        modal_weekly_demo_title
        modal_recorded_demo_title

        modal_attendee_title

        modal_weekly_demo_hubspot_id
        modal_attendee_hubspot_id
        modal_recorded_demo_hubspot_id

        loading

        modal_one_one_title

        explore_your_own {
          explore_your_own_key
          title_explore_your_own1
          description_explore_your_own
          button_explore_your_own

          picture {
            fluid(maxWidth: 600) {
              ...GatsbyPrismicImageFluid_noBase64
            }
          }
        }

        close

        title_customers

        marvel_modal_title
        marvel_modal_submit

        customers_logo {
          customers {
            fluid(maxWidth: 600) {
              ...GatsbyPrismicImageFluid_noBase64
            }
          }
        }
      }
    }
    translation: prismicTranslate(lang: { eq: $lang }) {
      ...genericData
    }
  }
`;
