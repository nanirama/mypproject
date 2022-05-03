import React from "react";
import AppStore from "../../../../assets/images/Download/AppStore.png";
import PlayStore from "../../../../assets/images/Download/GooglePlay.png";
import WebappFR from "../../../../assets/images/Download/webapp-primary-FR.svg";
import WebappEN from "../../../../assets/images/Download/webapp-primary-EN.svg";
import {
  StyledStore,
  StyledCustomer,
  StyledCodeIntro,
  StyledCode,
  Icon,
  IconCustom,
  Desktop,
  MobileDownload,
} from "./styled";

export default ({
  icon,
  customerName,
  link,
  linkLabel,
  appStore,
  googleStore,
  bg,
  code,
  favicon,
  sentence_code,
  lang,
}) => (
  <React.Fragment>
    {icon === null ? <Icon src={favicon.childImageSharp.fluid.src} /> : <IconCustom src={icon} />}
    <StyledCustomer dangerouslySetInnerHTML={{ __html: `${customerName}` }} />
    {code && (
      <React.Fragment>
        <StyledCodeIntro>{sentence_code.text}</StyledCodeIntro>
        <StyledCode color={bg}>{code}</StyledCode>
      </React.Fragment>
    )}
    <StyledStore>
      {link !== null && (
        <Desktop>
          <a href={link}>{lang === "fr-fr" ? <img alt="" src={WebappFR} /> : <img alt="" src={WebappEN} />}</a>

          {/* <Mobile> */}
          {lang === "fr-fr" ? <p style={{ margin: "10px 0" }}>ou</p> : <p style={{ margin: "10px 0" }}>or</p>}
        </Desktop>
      )}
      <div>
        <a href={appStore}>
          <MobileDownload alt="" src={AppStore} />
        </a>
        <a href={googleStore}>
          <MobileDownload alt="" src={PlayStore} />
        </a>
      </div>
      {/* </Mobile> */}
    </StyledStore>
    {/* <StyledLinkWebApp href={link}>{linkLabel}</StyledLinkWebApp> */}
  </React.Fragment>
);
