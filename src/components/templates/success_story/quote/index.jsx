import React from "react";
import Section from "../../../utils/section";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Bulle, Picture, Persona } from "./styled";

export default ({ data }) => (
  <React.Fragment>
    <Section top="0">
      <Grid>
        <Row around="xs">
          {data.items.map((item, index) => (
            <Col md={4} key={index} xs={12}>
              <Bulle>{item.quote_content.text}</Bulle>
              <Picture src={item.picture.url} />
              <Persona>
                <h4>{item.name}</h4>
                <span>{item.position}</span>
              </Persona>
            </Col>
          ))}
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
);
