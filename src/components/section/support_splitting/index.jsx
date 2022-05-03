import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo1, Typo3, Body } from "../../typographie";
import { SpaceH } from "../../space";
import Link from "../../utils/link";
import { media } from "../../utils/style-utils";

const Bloc = styled.div`
  /* border: 1px solid #eee; */
  /* width: 100%; */
  margin-bottom: 16px;
  text-align: center;
  /* flex: 0 0 auto; */
  border-radius: 5px;
  flex-basis: auto; /* default value */
  flex-grow: 1;
  margin-left:10px;
  margin-right:10px;
  background: #fff;
  padding: 20px 10px 30px 10px;
  text-align: center;
  box-shadow: 0 0.625rem 1.4rem rgba(53,72,88,.07);
}
  /* margin-right: 40px; */
  a {
    color: ${(props) => props.theme.color.primary};
  }
  &:hover {
    box-shadow: ${(props) => props.theme.shadow.primary};
  }

  div,
  h3 {
    &:hover {
      color: ${(props) => props.theme.color.secondary};
    }
  }
`;

const Icon = styled.i`
  font-size: 40px;
`;

const CardOffices = styled.div`
  margin: 0 5px 40px 5px;
  box-shadow: 0 0.625rem 1.4rem rgba(53, 72, 88, 0.07);
`;

const CardOfficesBg = styled.div`
  background-image: url(${(props) => props.bg});
  width: 100%;
  height: 300px;
  background-size: cover;
`;
const CardOfficesText = styled.div`
  padding: 15px;
  ${media.tablet`
  padding: 30px 40px 30px 40px;
  `}
`;
const CardOfficesLine = styled.div`
  display: flex;
  /* align-items: center; */
`;
const CardOfficePicto = styled.div`
  /* margin-top: 10px; */
  margin-right: 10px;
  ${media.tablet`
  i {
    font-size: 25px;
    margin-top: 10px;
    margin-right: 20px;
  }
  `}
`;
const CardOfficesContent = styled.div`
  font-size: 1rem;
  ${media.tablet`
  font-size: 1.1rem;
  line-height: 1.6rem;
  `}
`;

const CardOfficesCity = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

// const BlocWrapper = styled.div`
//   display: flex;
//   margin-right: -40px;
//   flex-wrap: wrap;
//   flex-direction: row;
// `;

// const SupportGrid = styled(Grid)`
//   max-width: 1100px;
// `;

export default ({ ...props }) => {
  return (
    <Grid>
      <Row center="xs">
        <Col md={8} xs={12}>
          <Typo1>{props.data.primary.title}</Typo1>
          <SpaceH of={16} />
          <Typo3>{props.data.primary.sub_title}</Typo3>
        </Col>
      </Row>
      <SpaceH of={60} />
      <Row center="xs">
        {props.data.items.map((item) => (
          <Col md={4} xs={12}>
            <Bloc>
              <Link to={item.link}>
                <>
                  <Icon className={item.icon} />
                  <SpaceH of={8} />
                  <Typo3 bold={600}>{item.name}</Typo3>
                  <SpaceH of={15} />
                  <Body>{item.description}</Body>
                </>
              </Link>
            </Bloc>
          </Col>
        ))}
      </Row>
      <SpaceH of={100} />

      <Row center="xs">
        <Col md={8} xs={12}>
          <Typo1>{props.data.primary.where_to_find_us}</Typo1>
        </Col>
      </Row>
      <SpaceH of={60} />
      <Row>
        <Col xs={12} md={6} lg={4}>
          <CardOffices>
            <CardOfficesBg bg={props.data.primary.france.fluid && props.data.primary.france.fluid.src}></CardOfficesBg>
            <CardOfficesText>
              <CardOfficesCity>Paris</CardOfficesCity>
              <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-world-map"></i>
                </CardOfficePicto>
                <CardOfficesContent>{props.data.primary.fr_address}</CardOfficesContent>
              </CardOfficesLine>
              <SpaceH of={16} />

              {/* <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-mail-2"></i>
                </CardOfficePicto>
                <CardOfficesContent>{props.data.primary.fr_email}</CardOfficesContent>
              </CardOfficesLine> */}
            </CardOfficesText>
          </CardOffices>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <CardOffices>
            <CardOfficesBg bg={props.data.primary.usa.fluid && props.data.primary.usa.fluid.src}></CardOfficesBg>
            <CardOfficesText>
              <CardOfficesCity>Seattle</CardOfficesCity>
              <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-world-map"></i>
                </CardOfficePicto>
                <CardOfficesContent>{props.data.primary.usa_address}</CardOfficesContent>
              </CardOfficesLine>
              {/* <SpaceH of={16} /> */}
              {/* <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-phone"></i>
                </CardOfficePicto>
                <CardOfficesContent>{props.data.primary.usa_phone}</CardOfficesContent>
              </CardOfficesLine> */}
              <SpaceH of={16} />
              {/* <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-mail-2"></i>
                </CardOfficePicto>
                <CardOfficesContent>{props.data.primary.usa_email}</CardOfficesContent>
              </CardOfficesLine> */}
            </CardOfficesText>
          </CardOffices>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <CardOffices>
            <CardOfficesBg bg={props.data.primary.canada.fluid && props.data.primary.canada.fluid.src}></CardOfficesBg>
            <CardOfficesText>
              <CardOfficesCity>Montreal</CardOfficesCity>
              <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-world-map"></i>
                </CardOfficePicto>
                <CardOfficesContent>{props.data.primary.canada_address}</CardOfficesContent>
              </CardOfficesLine>
              {/* <SpaceH of={16} />
              <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-phone"></i>
                </CardOfficePicto>
                <CardOfficesContent>{props.data.primary.canada_phone}</CardOfficesContent>
              </CardOfficesLine> */}
              <SpaceH of={16} />
              {/* <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-mail-2"></i>
                </CardOfficePicto>
                <CardOfficesContent>{props.data.primary.canada_email}</CardOfficesContent>
              </CardOfficesLine> */}
            </CardOfficesText>
          </CardOffices>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <CardOffices>
            <CardOfficesBg bg={props.data.primary.dubai.fluid && props.data.primary.dubai.fluid.src}></CardOfficesBg>
            <CardOfficesText>
              <CardOfficesCity>Dubai</CardOfficesCity>
              <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-world-map"></i>
                </CardOfficePicto>
                <CardOfficesContent>{props.data.primary.dubai_address}</CardOfficesContent>
              </CardOfficesLine>
              {/* <SpaceH of={16} />
              <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-phone"></i>
                </CardOfficePicto>
                <CardOfficesContent>{props.data.primary.dubai_phone}</CardOfficesContent>
              </CardOfficesLine> */}
              <SpaceH of={16} />
              {/* <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-mail-2"></i>
                </CardOfficePicto>
                <CardOfficesContent>{props.data.primary.dubai_email}</CardOfficesContent>
              </CardOfficesLine> */}
            </CardOfficesText>
          </CardOffices>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <CardOffices>
            <CardOfficesBg
              bg={props.data.primary.londres.fluid && props.data.primary.londres.fluid.src}
            ></CardOfficesBg>
            <CardOfficesText>
              <CardOfficesCity>London</CardOfficesCity>
              <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-world-map"></i>
                </CardOfficePicto>
                <CardOfficesContent>
                  Bedford House, 69-79 Fulham High Street, Fulham, London, SW6 3JW
                </CardOfficesContent>
              </CardOfficesLine>
              {/* <SpaceH of={16} />
              <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-phone"></i>
                </CardOfficePicto>
                <CardOfficesContent>+44 730 779 1683</CardOfficesContent>
              </CardOfficesLine> */}
              <SpaceH of={16} />
              {/* <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-mail-2"></i>
                </CardOfficePicto>
                <CardOfficesContent>chris@swapcard.com</CardOfficesContent>
              </CardOfficesLine> */}
            </CardOfficesText>
          </CardOffices>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <CardOffices>
            <CardOfficesBg bg="https://images.prismic.io/showcase-dev/f7700d06-2d8a-411c-9b77-40b979cc845d_two-confident-business-man-shaking-hands-during-meeting-office-success-dealing-greeting-partner-concept.jpg?auto=compress,format"></CardOfficesBg>
            <CardOfficesText>
              <CardOfficesCity>Partnership</CardOfficesCity>
              <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-world-map"></i>
                </CardOfficePicto>
                <CardOfficesContent>6 rue de Paradis, 75010 Paris</CardOfficesContent>
              </CardOfficesLine>
              {/* <SpaceH of={16} />
              <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-phone"></i>
                </CardOfficePicto>
                <CardOfficesContent>+44 730 779 1683</CardOfficesContent>
              </CardOfficesLine> */}
              <SpaceH of={16} />
              <CardOfficesLine>
                <CardOfficePicto>
                  <i className="icons8-mail-2"></i>
                </CardOfficePicto>
                <CardOfficesContent>marc@swapcard.com</CardOfficesContent>
              </CardOfficesLine>
            </CardOfficesText>
          </CardOffices>
        </Col>
      </Row>
    </Grid>
  );
};

export const query = graphql`
  fragment supportSplittingFragment on PrismicTemplate2 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate2BodyMainSupportSegmentation {
          slice_type
          primary {
            title
            sub_title

            fr_address
            fr_email
            fr_phone

            france {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }

            canada_address
            canada_email
            canada_phone

            canada {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }

            where_to_find_us

            usa_address
            usa_email
            usa_phone

            usa {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }

            dubai_address
            dubai_email
            dubai_phone

            dubai {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }

            londres {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }
          }
          items {
            name
            icon
            description
            link
          }
        }
      }
    }
  }
`;
