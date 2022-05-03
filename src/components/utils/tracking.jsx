function getReferrerSource(referrer) {
  var source = null;
  if (referrer && referrer.indexOf("swapcard.com") === -1) {
    if (referrer.indexOf("google") !== -1) {
      source = "Google Organic Search";
    } else if (referrer.indexOf("bing") !== -1) {
      source = "Microsoft Organic Search";
    } else if (referrer.indexOf("yahoo") !== -1) {
      source = "Yahoo Organic";
    } else if (referrer.indexOf("twitter") !== -1) {
      source = "Twitter Organic";
    } else if (referrer.indexOf("facebook") !== -1) {
      source = "Facebook Organic";
    } else if (referrer.indexOf("linkedin") !== -1) {
      source = "Linkedin Organic";
    } else {
      source = "Referrals";
    }
  }
  return source;
}

function getEmailSource(utm_medium, utm_source) {
  if (utm_medium === "email" || utm_source === "email" || utm_source === "hs_email") {
    return "Email Marketing";
  }
  return null;
}

function getPaidSource(utm_medium, utm_source) {
  var source;
  if (utm_source === "google" && utm_medium === "display") {
    return "Google Display";
  }

  if (utm_medium === "ppc" || utm_medium === "ad" || utm_medium === "cpc" || utm_medium === "paid") {
    switch (utm_source) {
      case "adwords":
      case "google":
        source = "Google Paid Search";
        break;
      case "microsoft":
      case "bing":
        source = "Microsoft Paid Search";
        break;
      case "facebook":
        source = "Facebook Ad";
        break;
      case "linkedin":
      case "linkedin-ad":
        source = "Linkedin Ad";
        break;
      case "twitter":
        source = "Twitter Ad";
        break;
      default:
        source = "Unknow";
    }
    return source;
  }
  return null;
}

function getUTMCampaign(utm_source, utm_medium, utm_campaign) {
  if (utm_source && utm_medium && utm_campaign) {
    return `${utm_source} / ${utm_medium} / ${utm_campaign}`;
  }
  return null;
}

function directTraffic(httpReferrer) {
  if ((httpReferrer && httpReferrer.indexOf("swapcard.com") === -1) || !httpReferrer) return "Direct traffic";
  return null;
}

export function getVisitorSource() {
  const url = window.location.search;
  const httpReferrer = document.referrer || null;

  console.log("URL", url, "Referrer", httpReferrer);

  const queryParams = new URLSearchParams(url);
  const utm_source = queryParams.get("utm_source");
  const utm_medium = queryParams.get("utm_medium");
  const utm_campaign = queryParams.get("utm_campaign");
  const paid = getPaidSource(utm_medium, utm_source);
  const campaign = getUTMCampaign(utm_source, utm_medium, utm_campaign);
  const email = getEmailSource(utm_medium, utm_source);
  const referrer = getReferrerSource(httpReferrer);
  const direct = directTraffic(httpReferrer);

  return paid || email || campaign || referrer || direct || null;
}
