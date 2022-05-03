import React from "react";
import path from "path";
import { Link } from "gatsby";
import Route from "../../localization";
// import { navigate } from "gatsby";
// import MixpanelHelper from "../utils/segment";

const LinkHelper = ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      // <MixpanelHelper {...other}>
      <Link to={`${path.normalize(to)}`} {...other}>
        {children}
      </Link>
      // </MixpanelHelper>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

export const LinkInternal = (documentRelated, oldLink, lang) => {
  if (documentRelated) {
    if (
      documentRelated.link_type === "Document" &&
      documentRelated.document &&
      documentRelated.document.data &&
      documentRelated.document.data.body &&
      documentRelated.document.data.body.length > 0
    ) {
      return Route[lang][documentRelated.document.data.body[0].primary.route];
    }

    if (documentRelated && documentRelated.link_type === "Web" && documentRelated.url) {
      return documentRelated.url;
    }
  }
  return oldLink;
};

export default LinkHelper;
