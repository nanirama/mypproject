import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { StyledSidebar, Location, ContactInfo, Icon } from "./styled";

export default ({ t }) => (
  <React.Fragment>
    <StyledSidebar>
      <Grid>
        <Row>
          {t.bodyMain.map((office, index) => (
            <React.Fragment key={index}>
              {office.slice_type === "swapcard_offices" && (
                <Col xs={12} md={12}>
                  <Location>{office.primary.where.text}</Location>
                  {typeof office.primary.office_address !== "undefined" &&
                    office.primary.office_address.text !== "" && (
                      <ContactInfo>
                        <span>
                          <Icon className="icons8-world-map" />
                        </span>
                        {office.primary.office_address.text}
                      </ContactInfo>
                    )}
                  {typeof office.primary.office_phone !== "undefined" && (
                    <ContactInfo>
                      <span>
                        <Icon className="icons8-phone" />
                      </span>
                      {office.primary.office_phone.text}
                    </ContactInfo>
                  )}
                  {typeof office.primary.office_email !== "undefined" && (
                    <ContactInfo>
                      <span>
                        <Icon className="icons8-mail-2" />
                      </span>
                      {office.primary.office_email.text}
                    </ContactInfo>
                  )}
                </Col>
              )}
            </React.Fragment>
          ))}
        </Row>
      </Grid>
    </StyledSidebar>
  </React.Fragment>
);
