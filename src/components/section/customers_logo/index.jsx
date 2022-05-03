import React, { useState, useEffect } from "react";
import { Grid, Row } from "react-flexbox-grid";
import { Logo, CustomersLogo } from "./styled";
// import Image from "../../image";
import { graphql } from "gatsby";
import { getUser } from "../../../HOC/auth";

export default (props) => {
  const [state, setState] = useState({
    transformState: "",
    transitionState: "",
  });
  const [logoDataItems, setLogoDataItems] = useState([]);
  const minAspectRatio = Math.min(...props.data.items.map((e) => e.logo.fluid.aspectRatio));
  const rowHeight = 120 / minAspectRatio + 20;

  useEffect(() => {
    setTimeout(() => {
      setState({
        transformState: `translate(-100%, 0px)`,
        transitionState: `transform 53000ms linear  0s`,
      });
    }, 1000);
    async function user() {
      const userInfo = await getUser();

      if (userInfo && userInfo.exibitiors && userInfo.exibitiors.nodes && userInfo.exibitiors.nodes.length > 0) {
        const isAdmin = userInfo.me.events.edges.find(
          (e) => e.node.userRole === "ADMIN" || e.node.userRole === "ORGANIZATION_MEMBER"
        );

        if (!isAdmin) {
          const filteredItems = props.data.items.filter((e) => e.target === "exhibitors");
          setLogoDataItems(filteredItems.length > 0 ? filteredItems : props.data.items);
        } else {
          setLogoDataItems(props.data.items.filter((e) => e.target !== "exhibitors"));
        }
      } else {
        setLogoDataItems(props.data.items.filter((e) => e.target !== "exhibitors"));
      }
    }
    user();
  }, []);

  // const styles = {
  //   containerStyle: {
  //     transition: state.transitionState,
  //     transform: state.transformState
  //   }
  // };
  // const { containerStyle } = styles;

  // const animated = typeof props.data !== "undefined" ? props.data.primary.animated : "No";

  return (
    <React.Fragment>
      <Grid style={props.isCentered === false ? { width: "auto", margin: 0 } : {}}>
        <Row>
          <CustomersLogo crop={props.data.primary.crop} isCentered={props.isCentered} rowHeight={rowHeight}>
            {logoDataItems.map((logoSrc, index) => (
              <Logo key={index} logoWidth={props.data.primary.logo_width}>
                {logoSrc.logo.thumbnails.auto ? (
                  <img src={logoSrc.logo.thumbnails.auto.url} className="img-responsive" />
                ) : (
                  <img src={logoSrc.logo.fluid.src} className="img-responsive" />
                )}
              </Logo>
            ))}
          </CustomersLogo>
        </Row>
      </Grid>
    </React.Fragment>
  );
};
export const query = graphql`
  fragment customersLogoFragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainCustomersLogo {
          slice_type
          primary {
            animated
            crop
            logo_width
          }
          items {
            target
            logo {
              fluid(maxWidth: 200) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
              thumbnails {
                big {
                  fluid(maxWidth: 200) {
                    ...GatsbyPrismicImageFluid_noBase64
                    src
                  }
                  url
                }
              }
              thumbnails {
                auto {
                  fluid(maxWidth: 300) {
                    ...GatsbyPrismicImageFluid_noBase64
                    src
                  }
                  url
                }
              }
              url
            }
          }
        }
      }
    }
  }
`;
