import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo2, Typo3 } from "../../../typographie";
import { Margin } from "styled-components-spacing";
import axios from "axios";
import { media } from "../../../utils/style-utils";
import { ButtonSecondary } from "../../../button";
import { sortBy, groupBy } from "lodash";

export const GoHireStyled = styled.div`
  /* display: flex; */
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 60px;
`;

const GoHireBloc = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  margin: 10px 0;
  /* flex-grow: 1; */
  width: 100%;
  border: solid 1px #e0e6ed;
  border-radius: 6px;
  padding: 30px 20px;
  background: #fff;
  /* text-align: left; */
  ${media.tablet`
    flex-direction:row;
    align-items:center;
  `}
`;

const GoHireCategory = styled.div`
  font-size: 40px;
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 30px;
  margin-top: 50px;
`;

const GoHireJobTitle = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.color.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.color.secondary};
  }
`;

const GoHireSecondLine = styled.div`
  margin-top: 15px;
  color: ${(props) => props.theme.color.body};
`;

const GoHireApplyButton = styled.div`
  margin-top: 30px;
  ${media.tablet`
    margin:0;
    margin-left:auto;
  `}
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    background: ${(props) => props.theme.color.secondary};
    border: 1px solid ${(props) => props.theme.color.secondary};
    color: #fff;
    padding: 8px;
    margin-right: 10px;
    border-radius: 3px;
    margin-bottom: 10px;
  }
  div:hover {
    cursor: pointer;
    background: #fff;
    border: 1px solid ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.secondary};
  }
`;

const GoHire = () => {
  const [jobs, setJobs] = useState(null);
  const [jobsV2, setJobsV2] = useState(null);

  const [filter, setFilter] = useState(null);

  useEffect(() => {
    axios.get(`https://api.lever.co/v0/postings/swapcard?mode=json`).then((res) => {
      let jobsRes = sortBy(res.data, ["categories.commitment"]);

      if (filter && filter === "Fulltime") {
        jobsRes = jobsRes.filter(
          (e) => e.categories.commitment === "Fulltime" || e.categories.commitment === "Contract"
        );
      }

      if (filter && filter === "Internship") {
        jobsRes = jobsRes.filter((e) => e.categories.commitment === "Internship");
      }

      setJobsV2(groupBy(jobsRes, "categories.team"));

      setJobs(jobsRes);
    });
  }, [filter]);

  return (
    <div style={{ background: "#F9FAFC", paddingTop: "60px", marginBottom: "60px" }}>
      <Grid>
        <Row>
          <Col xs={12}>
            <Typo2 center>
              Want to join the team?
              <br />
              <div style={{ color: "#00CC88", marginTop: "10px" }}>
                We offer full remote opportunities on all positions
              </div>
            </Typo2>
            <br />
            <Typo3 center> Here are our current openings:</Typo3>
            <Margin top={5} />
            {/* <Filters>
              <div onClick={() => setFilter("All_position")}>All Positions</div>
              <div onClick={() => setFilter("Fulltime")}>Full Time</div>
              <div onClick={() => setFilter("Internship")}>Internship / Apprenticeship</div>
            </Filters> */}
            {jobs && (
              <GoHireStyled>
                {Object.keys(jobsV2).map((item, key) => (
                  <>
                    <GoHireCategory>{item}</GoHireCategory>
                    {jobsV2[item].map((item) => (
                      <GoHireBloc>
                        <div>
                          <GoHireJobTitle target="_blank" rel="noopener noreferrer" href={item.hostedUrl}>
                            {item.text}
                          </GoHireJobTitle>
                          <GoHireSecondLine>
                            {item.categories.commitment} - {item.categories.location}
                          </GoHireSecondLine>
                        </div>
                        <GoHireApplyButton>
                          <ButtonSecondary to={item.hostedUrl}>Apply Now</ButtonSecondary>
                        </GoHireApplyButton>
                      </GoHireBloc>
                    ))}
                  </>
                ))}
              </GoHireStyled>
            )}
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default GoHire;
