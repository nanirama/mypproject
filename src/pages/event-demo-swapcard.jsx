import React, { useState, useEffect } from "react";
import axios from "axios";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo1, Typo4, Body } from "../components/typographie";
import { SpaceH } from "../components/space/index";
import { getUser, resolveRefreshToken } from "../HOC/auth";
import Label from "../components/form/label";
import { Input } from "../components/form/input";
import { ButtonSecondary } from "../components/button";

const pageContext = {
  lang: "en-us",
  meta_title: "Event Demo Generator",
  meta_description: "Your own event demo generated on your account in 5 minutes.",
  route: "captain-event-demo",
  showNavigation: "contentOnly",
};

const Page = ({ ...props }) => {
  const [user, setUser] = useState(null);

  const [password, setPassword] = useState(null);
  const [eventTitle, setEventTitle] = useState(null);

  const [started, setStarted] = useState(false);

  const [accessToken, setAccessToken] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuth = async () => {
      const userData = await getUser();
      if (userData && userData.me.user) setUser(userData.me.user);

      setAccessToken(await resolveRefreshToken());
      setLoading(false);
    };
    fetchAuth();
  }, []);

  function submit() {
    setStarted(true);
    axios("https://uaksqodade.execute-api.eu-west-3.amazonaws.com/default/studioDemoEventSwapcard", {
      method: "post",
      data: { password, eventTitle, accessToken },
      headers: {
        InvocationType: "Event",
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <Layout dataNavigation={props.data.translation} pageContext={pageContext}>
      <Grid>
        <Row>
          <Col md={8}>
            <SpaceH of={30} />
            <Typo1>Event Demo Generator</Typo1>
            <SpaceH of={10} />
            <Body>
              Connected as <b>{user && user.primaryEmail}</b>
            </Body>
            <SpaceH of={5} />
            <Body>
              The demo event will be generated on your connected account by filling the form bellow. The event
              generation task takes up to 5 minutes.
            </Body>

            {!loading ? (
              <>
                {user ? (
                  <>
                    {!started && (
                      <div style={{ maxWidth: "400px" }}>
                        <SpaceH of={10} />
                        <Label>Password</Label>
                        <Input placeholder="Not Your Swapcard Password" onChange={(e) => setPassword(e.target.value)} />
                        <SpaceH of={10} />
                        <Label>Event Title</Label>
                        <Input placeholder="Event Title" onChange={(e) => setEventTitle(e.target.value)} />
                      </div>
                    )}
                    {!started ? (
                      <>
                        <SpaceH of={10} />
                        <ButtonSecondary onClick={submit}>Create</ButtonSecondary>
                      </>
                    ) : (
                      <>
                        <SpaceH of={20} />
                        <Typo4>
                          Started ! Find your event on <a href="https://studio.swapcard.com">studio.swapcard.com</a>
                        </Typo4>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <SpaceH of={10} />
                    <Body>
                      <b>Please connect to access this area</b>
                    </Body>
                  </>
                )}
              </>
            ) : (
              <>
                <SpaceH of={10} />
                <Body>
                  Loading. Make sure you see your events on app.swapcard.com. You may need to reload this page if
                  loading doesn't end.
                </Body>
              </>
            )}
            <SpaceH of={10} />
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query EventDemo {
    translation: prismicTranslate {
      ...genericData
    }
  }
`;
