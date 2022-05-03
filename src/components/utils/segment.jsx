import React, { Component } from "react";
import axios from "axios";
import tp from "../../localization/tracking.json";
import { isValidEmail } from "../utils/helper";

export default class MixpanelHelper extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    if (this.props["analytics-name"]) {
      analyticsTrack(this.props["analytics-name"]);
    }

    if (this.props["analytics-category"]) {
      analyticsTrackMixpanel("Website Button Clicked", {
        button_location: this.props["analytics-location"],
        button_category: this.props["analytics-category"],
        button_label: this.props["analytics-label"],
      });
    }
  };

  render() {
    const { className, id, ...newProps } = this.props;
    return (
      <span role="link" {...newProps} onClick={this.handleClick} onKeyDown={this.handleClick} tabIndex={0}>
        {this.props.children}
      </span>
    );
  }
}

export const MixpanelHelperV2 = ({ ...props }) => {
  const trackLink = (e) => {};

  return (
    <span role="link" {...props} onClick={trackLink} onKeyDown={trackLink} tabIndex={0}>
      {props.children}
    </span>
  );
};

export function analyticsTrackMixpanel(event, options) {
  if (typeof winodw !== undefined) {
    window.analytics.ready(function () {
      window.mixpanel.track(event, options);
    });
  }
}

export function analyticsTrack(event, options = {}, integrations) {
  if (typeof winodw !== undefined) {
    window.analytics.ready(function () {
      window.analytics.track(event, options, {
        Salesmachine: false,
        UserPilot: false,
        ...integrations,
      });
    });
  }
}

export function analyticsPage(event, options = {}, integrations) {
  if (typeof winodw !== undefined && window.analytics !== undefined) {
    window.analytics.ready(function () {
      window.analytics.page(event, options, integrations);
    });
  }
}

export function analyticsAlias(alias, integrations) {
  if (typeof window !== undefined && window.analytics !== undefined) {
    window.analytics.ready(function () {
      window.analytics.alias(alias, integrations);
    });
  }
}

export function analyticsIdentify(identify, integrations) {
  if (typeof window !== undefined && window.analytics !== undefined) {
    window.analytics.ready(function () {
      const email = identify.toLowerCase();
      window.analytics.identify(identify.toLowerCase(), {
        Salesmachine: false,
        UserPilot: false,
        ...integrations,
      });
      console.log("isEmail", isValidEmail(email));
      if (isValidEmail(email)) {
        console.log("Set domain");
        const domain = email.split("@", 2)[1];
        window.mixpanel.register_once({ domain });
      }
    });
  }
}

export function analyticsIdentifyAnonymous(traits) {
  if (typeof window !== undefined && window.analytics !== undefined) {
    window.analytics.ready(function () {
      window.analytics.identify(traits);
    });
  }
}

export function analyticsPeopleSetMixpanel(options) {
  if (typeof window !== undefined && window.analytics !== undefined && window.mixpanel) {
    window.analytics.ready(function () {
      window.mixpanel.people.set(options);
    });
  }
}

export function analyticsPeopleSet(options, integrations) {
  if (typeof window !== undefined && window.analytics !== undefined) {
    window.analytics.ready(function () {
      window.analytics.identify(options, integrations);
    });
  }
}

export function analyticsRegister(options) {
  if (typeof window !== undefined && window.analytics !== undefined && window.mixpanel) {
    window.analytics.ready(function () {
      window.mixpanel.register(options);
    });
  }
}

export function analyticsRegisterOnce(options) {
  if (typeof window !== undefined && window.analytics !== undefined && window.mixpanel) {
    window.analytics.ready(function () {
      window.mixpanel.register_once(options);
    });
  }
}
export function analyticsUnRegister(property) {
  if (typeof window !== undefined && window.analytics !== undefined && window.mixpanel) {
    window.analytics.ready(function () {
      window.mixpanel.unregister(property);
    });
  }
}

export function analyticsSetOnce(options) {
  if (typeof window !== undefined && window.analytics !== undefined && window.mixpanel) {
    window.analytics.ready(function () {
      window.mixpanel.people.set_once(options);
    });
  }
}

export function startExperiment(experimentName, variantName) {
  if (typeof window !== "undefined") {
    window.analytics.ready(function () {
      window.mixpanel.track("$experiment_started", {
        "Experiment name": experimentName,
        "Variant name": variantName,
      });
    });
  }
}
