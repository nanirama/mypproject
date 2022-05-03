import React, { Component } from "react";
import styled from "styled-components";
import Link from "../../utils/link";
import MixpanelHelper from "../../utils/segment";

export const Bar = styled.div`
  background: ${props => props.theme.color.secondary};
  width: 100%;
  text-align: center;
  line-height: 50px;
  height: 50px;
  color: #fff;

  a {
    text-decoration: underline;
    color: #fff;
  }
`;

export default class AttendeesBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Bar>
          {this.props.t.is_attendee_}
          &nbsp;
          <MixpanelHelper
            analytics-location="Attendees bar"
            analytics-category="Attendees bar"
            analytics-label={this.props.t.link_anchor}
            analytics-register="Click attendees bar?"
          >
            <Link to={this.props.t.link_slug}>{this.props.t.link_anchor}</Link>
          </MixpanelHelper>
        </Bar>
      </React.Fragment>
    );
  }
}
