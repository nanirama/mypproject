import React, { useState, useEffect } from "react";
import { Typo3, Typo4, Body } from "../typographie";
import { useCookies } from "react-cookie";
import * as styled from "./styled";
import { SpaceH } from "../space";
import Modal from "react-modal";
import { ButtonBorderSecondary, ButtonSecondary } from "../button";
import cookiesSpecs from "./cookies.json";
import dayjs from "dayjs";
import { Table, Td, Thead, Tbody, TableWrapper, TrHead, Th, Tr, Inner } from "../table";

const CookieBanner = ({ openCookieModal, setOpenCookieModal, t }) => {
  const [view, setView] = useState("default");

  const [activeTab, setActivTab] = useState("default");

  const cookieExpirationDate = dayjs().add("12", "month").toDate();

  const [cookies, setCookie, removeCookie] = useCookies([
    "cookieStatus",
    "cookieMarketing",
    "cookieAds",
    "cookieFunctional",
  ]);

  useEffect(() => {
    if (!cookies.cookieStatus) {
      setOpenCookieModal(true);
    }
  }, [cookies]);

  const acceptAllCookies = () => {
    if (typeof window !== "undefined") {
      setCookie("cookieMarketing", true, {
        secure: true,
        expires: cookieExpirationDate,
      });
      setCookie("cookieAds", true, {
        secure: true,
        expires: cookieExpirationDate,
      });
      setCookie("cookieFunctional", true, {
        secure: true,
        expires: cookieExpirationDate,
      });
      setCookie("cookieStatus", "acceptAll", {
        secure: true,
        expires: cookieExpirationDate,
      });
      window.location.reload();
    }
  };

  const refuseAllCookies = () => {
    document.cookie.split(";").forEach(function (c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    setCookie("cookieMarketing", false, {
      secure: true,
      expires: cookieExpirationDate,
    });
    setCookie("cookieAds", false, {
      secure: true,
      expires: cookieExpirationDate,
    });
    setCookie("cookieFunctional", false, {
      secure: true,
      expires: cookieExpirationDate,
    });
    setCookie("cookieStatus", "refuseAll", {
      secure: true,
      expires: cookieExpirationDate,
    });
    setTimeout(() => window.location.reload(), 300);
  };

  return (
    <styled.ModalWrapper>
      <Modal
        isOpen={openCookieModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            padding: "0",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "4px",
            border: "1px solid #FFF",
            boxShadow: "0 32px 68px rgb(0 0 0 / 30%)",
          },
          overlay: { zIndex: 10000, backgroundColor: "none" },
        }}
        contentLabel=""
      >
        <>
          <styled.Tab>
            <styled.TabList>
              <styled.TabListItem onClick={() => setActivTab("default")} active={activeTab === "default"}>
                {t.tab_consent}
              </styled.TabListItem>
              <styled.TabListItem onClick={() => setActivTab("details")} active={activeTab === "details"}>
                {t.tab_details}
              </styled.TabListItem>
              <styled.TabListItem onClick={() => setActivTab("about")} active={activeTab === "about"}>
                {t.tab_about}
              </styled.TabListItem>
            </styled.TabList>
          </styled.Tab>
          <styled.Wrapper width="900">
            <div style={{ padding: "40px" }}>
              {activeTab === "default" && (
                <>
                  <Typo3>{t.consent_title}</Typo3>
                  <SpaceH of={20} />
                  <Body>{t.consent_desc}</Body>
                  <SpaceH of={20} />
                  <styled.ButtonWrapper>
                    <ButtonBorderSecondary onClick={refuseAllCookies} size={"big"}>
                      {t.button_refuse_all}
                    </ButtonBorderSecondary>
                    <ButtonBorderSecondary onClick={() => setActivTab("details")} size={"big"}>
                      {t.button_personalize}
                    </ButtonBorderSecondary>
                    <ButtonSecondary onClick={acceptAllCookies} size={"big"}>
                      {t.button_accept_all}
                    </ButtonSecondary>
                  </styled.ButtonWrapper>
                </>
              )}
              {activeTab === "details" && (
                <Personalize
                  t={t}
                  refuseAllCookies={refuseAllCookies}
                  acceptAllCookies={acceptAllCookies}
                  setActivTab={setActivTab}
                />
              )}
              {activeTab === "about" && (
                <styled.About>
                  <>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t.about_desc.html,
                      }}
                    />
                  </>
                  <SpaceH of={20} />
                  <styled.ButtonWrapper>
                    <ButtonBorderSecondary onClick={refuseAllCookies} size={"big"}>
                      {t.button_refuse_all}
                    </ButtonBorderSecondary>
                    <ButtonBorderSecondary onClick={() => setActivTab("details")} size={"big"}>
                      {t.button_personalize}
                    </ButtonBorderSecondary>
                    <ButtonSecondary onClick={acceptAllCookies} size={"big"}>
                      {t.button_accept_all}
                    </ButtonSecondary>
                  </styled.ButtonWrapper>
                </styled.About>
              )}
            </div>
          </styled.Wrapper>
        </>
      </Modal>
    </styled.ModalWrapper>
  );
};

const SwitchButton = ({ onChange, checked, id }) => {
  return (
    <styled.SwitchWrapper>
      <styled.Switch id={id} onChange={onChange} checked={checked} type="checkbox" />
      <styled.SwitchLabel htmlFor={id} />
    </styled.SwitchWrapper>
  );
};

const CookiesCategory = ({ cookieCategory, status, setStatus }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <styled.CategoryTitle>
        <i className="icons8-drop-down-arrow" style={{ marginRight: "20px", marginTop: "3px" }} />
        <Typo4 bold={"600"} onClick={() => setOpen(!open)}>
          {cookieCategory.Name}
        </Typo4>
        <SwitchButton
          checked={status}
          onChange={() => setStatus(!status)}
          id={"eventOrganizerSwitch" + cookieCategory.Name}
        />
      </styled.CategoryTitle>
      {open && (
        <styled.CategoryContent>
          <p>{cookieCategory.Desc}</p>
          <SpaceH of={20} />
          <TableWrapper>
            <Table style={{ width: "900px" }}>
              <Thead>
                <TrHead>
                  <Th>Name</Th>
                  <Th>Expiration</Th>
                  <Th>Provider</Th>
                  <Th>Description</Th>
                </TrHead>
              </Thead>

              <Tbody>
                {cookieCategory.cookies.map((e) => (
                  <Tr>
                    <Td>
                      <Inner>{e.Name}</Inner>
                    </Td>
                    <Td>
                      <Inner>{e.ExpireDescription}</Inner>
                    </Td>
                    <Td>
                      <Inner>{e.Provider}</Inner>
                    </Td>
                    <Td>
                      <Inner>{e.PurposeDescription}</Inner>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableWrapper>
        </styled.CategoryContent>
      )}
    </>
  );
};

const Personalize = ({ refuseAllCookies, setActivTab, acceptAllCookies, t }) => {
  const [cookies, setCookie] = useCookies(["cookieMarketing", "cookiePreference", "cookieStatus", "cookieFunctional"]);

  const [essential, setEssential] = useState(true);
  const [functional, setFunctional] = useState(cookies.cookieFunctional === "true");
  const [marketing, setMarketing] = useState(cookies.cookieMarketing === "true");
  const [ads, setAds] = useState(cookies.cookieAds === "true");

  const cookieExpirationDate = dayjs().add("12", "month").toDate();

  const integrations = { All: false, "Segment.io": true };

  const setCookieSelected = () => {
    if (marketing) {
      integrations["Hotjar"] = true;
      integrations["Mixpanel"] = true;
      integrations["Customer.io"] = true;
      integrations["Google Analytics"] = true;
      setCookie("cookieMarketing", true, {
        secure: true,
        expires: cookieExpirationDate,
      });
    }

    if (ads) {
      integrations["Google Ads (Classic)"] = true;
      integrations["Twitter Ads"] = true;
      integrations["Bing Ads"] = true;
      integrations["LinkedIn Insight Tag"] = true;
      integrations["Facebook Pixel"] = true;
      setCookie("cookieAds", true, {
        secure: true,
        expires: cookieExpirationDate,
      });
    }

    if (functional) {
      integrations["Google Tag Manager"] = false;
      integrations["Webhooks"] = true;
      integrations["Refiner"] = true;
      setCookie("cookieFunctional", true, {
        secure: true,
        expires: cookieExpirationDate,
      });
    }

    setCookie("cookieStatus", "acceptSome", {
      secure: true,
      expires: cookieExpirationDate,
    });
    setCookie("cookiePreference", JSON.stringify(integrations), {
      secure: true,
      expires: cookieExpirationDate,
    });

    window.location.reload();
  };

  return (
    <>
      {/* <Typo3>{t.details_title}</Typo3> */}
      {/* <SpaceH of={20} /> */}
      {/* <Body>{t.details_desc}</Body> */}

      <styled.CookiesDetailsWrapper>
        <CookiesCategory cookieCategory={cookiesSpecs.Essential} status={true} setStatus={setEssential} />
        <CookiesCategory cookieCategory={cookiesSpecs.Functional} status={functional} setStatus={setFunctional} />
        <CookiesCategory
          cookieCategory={cookiesSpecs["Marketing_Analytics"]}
          status={marketing}
          setStatus={setMarketing}
        />
        <CookiesCategory cookieCategory={cookiesSpecs.Advertising} status={ads} setStatus={setAds} />
      </styled.CookiesDetailsWrapper>

      <styled.ButtonWrapper>
        <ButtonBorderSecondary onClick={refuseAllCookies} size={"big"}>
          {t.button_refuse_all}
        </ButtonBorderSecondary>
        <ButtonBorderSecondary onClick={setCookieSelected} size={"big"}>
          {t.button_authorize}
        </ButtonBorderSecondary>
        <ButtonSecondary onClick={acceptAllCookies} size={"big"}>
          {t.button_accept_all}
        </ButtonSecondary>
      </styled.ButtonWrapper>
    </>
  );
};

export default CookieBanner;
