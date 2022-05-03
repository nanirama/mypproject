import React, { useEffect, useState, useContext } from "react";
import { Grid, Col, Row } from "react-flexbox-grid";
import { Logo } from "../styled";
import styled from "styled-components";
import { navigate } from "gatsby";
import Link from "../../utils/link";
import { Typo2, Typo3 } from "../../typographie";
import { SpaceH } from "../../space";
import axios from "axios";
import { AuthContext } from "../../../context/auth";
import withLocation from "../../../HOC/location";

const StyledOrga = styled(Link)`
  margin-bottom: 15px;
  display: block;
  font-size: 1.4rem;
  &:hover {
    color: ${(props) => props.theme.color.secondary};
    cursor: pointer;
  }
`;

const Organization = ({ ...props }) => {
  const [orga, setOrga] = useState();
  const { accessToken } = useContext(AuthContext);
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (props.search.error && !props.search.hide) {
      setError(props.search.error);
    }
  });

  useEffect(() => {
    const fetch = async () => {
      if (accessToken) {
        setLogged(true);
        const data = await axios({
          url: process.env.API_EVENTS,
          method: "post",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          data: {
            query: `
                query EventsList {
                  organizations(cursor: {first: 40}) {
                    nodes {
                      id
                      name
                    }
                  }
                }
                `,
          },
        });

        setLoading(false);

        const nodes = data.data?.data?.organizations?.nodes;

        if (nodes && nodes.length === 1 && !props.search.error) {
          navigate("/billing/?id=" + nodes[0].id + "&name=" + nodes[0].name);
        }

        if (data.data?.data?.organizations?.nodes) {
          console.log(data.data.data.organizations.nodes);
          setOrga(data.data.data.organizations.nodes);
        }
      } else {
        setLoading(false);
        setLogged(false);
      }
    };
    fetch();
  }, [accessToken]);

  return (
    <>
      <Row>
        <Col xs={6}>
          <Typo2>Select your organization</Typo2>
        </Col>
      </Row>
      <SpaceH of={20} />
      <Row>
        <Col xs={12}>
          {error && (
            <>
              <Typo3 color="red">{error}</Typo3> <SpaceH of={20} />
            </>
          )}
          {loading && <p>Loading</p>}
          {!loading && (
            <>
              {logged && (
                <>
                  {orga &&
                    orga.length > 0 &&
                    orga.map((e) => <StyledOrga to={"/billing/?id=" + e.id + "&name=" + e.name}>{e.name}</StyledOrga>)}
                  {orga && orga.length === 0 && <p>Please create an organization to access your billing</p>}
                </>
              )}
              {!logged && (
                <>
                  <p>Please login to access this page</p>
                </>
              )}
            </>
          )}
        </Col>
      </Row>
    </>
  );
};

export default withLocation(Organization);
