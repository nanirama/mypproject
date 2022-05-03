import React, { Component } from "react";
import { graphql } from "gatsby";
import Wrapper from "../components/templates/customers_events/wrapper";
import Layout from "../components/layout";

export default class CustomersEvents extends Component {
  componentDidMount() {
    if (typeof document !== "undefined") {
      const script = document.createElement("script");

      const scriptText = document.createTextNode(
        `if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        location.replace("${this.props.data.prismicCustomersEvents.data.app_store_link.url}");
        } else if (/Android/i.test(navigator.userAgent)) {
            location.replace("${this.props.data.prismicCustomersEvents.data.google_store_link.url}");
        }
      `
      );

      script.appendChild(scriptText);
      document.head.appendChild(script);
    }
  }

  render() {
    const previewData = typeof window !== "undefined" && window.__PRISMIC_PREVIEW_DATA__;
    const dataInitial = previewData ? previewData.prismicCustomersEvents : this.props.data.prismicCustomersEvents;
    return (
      <Layout dataNavigation={this.props.data.translation} pageContext={this.props.pageContext} hideOGImage={true}>
        <Wrapper data={dataInitial.data} favicon={this.props.data.favicon} lang={this.props.pageContext.lang} />

        <div ref={(el) => (this.instance = el)} />
      </Layout>
    );
  }
}

export const query = graphql`
  query getDocumentCustomersEvents($id: String!, $lang: String!) {
    prismicCustomersEvents(id: { eq: $id }) {
      data {
        app_store_link {
          url
        }
        google_store_link {
          url
        }
        code
        sentence_code {
          text
        }
        background_color
        app_icon {
          url
        }

        web_app_link
        web_app_link_label {
          text
        }
        customer_name {
          text
        }

        screenshot_iphone {
          fluid(maxWidth: 500) {
            ...GatsbyPrismicImageFluid_noBase64
          }
        }

        screenshot_iphone {
          url
        }
      }
    }

    translation: prismicTranslate(lang: { eq: $lang }) {
      ...genericData
    }

    favicon: file(relativePath: { regex: "/favicon.png/" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 80) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
