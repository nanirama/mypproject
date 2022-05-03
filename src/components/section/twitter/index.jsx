import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
// import { TwitterTweetEmbed } from "react-twitter-embed";
import TweetEmbed from "react-tweet-embed";
import { graphql } from "gatsby";

export default ({ ...props }) => (
  <React.Fragment>
    <Grid>
      <Row>
        {props.data.items.map((item, index) => (
          <Col md={4} xs={12} key={index}>
            <div
              style={{
                marginTop: "20px",
                position: "relative"
              }}
            >
              <TweetEmbed
                id={item.tweet_id}
                options={{
                  theme: "white",
                  cards: "hidden",
                  conversation: "none"
                }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Grid>
  </React.Fragment>
);
export const query = graphql`
  fragment twitterFragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainTwitter {
          slice_type
          items {
            tweet_id
          }
        }
      }
    }
  }
`;
