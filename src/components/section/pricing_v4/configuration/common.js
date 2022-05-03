import * as React from "react";
import priceList from "./prices.json";
import numeral from "numeral";
import moment from "moment";
import { CurrencyLabel, CurrencySign, CurrencySwitcherBlock } from "./styled";

export const CurrencySwitcher = ({ active, onClick }) => (
  <CurrencySwitcherBlock>
    <CurrencyLabel className={active === "eur" && "active"} id={"eur"} onClick={onClick}>
      EUR
    </CurrencyLabel>
    <CurrencyLabel className={active === "usd" && "active"} id={"usd"} onClick={onClick}>
      USD
    </CurrencyLabel>
    <CurrencyLabel className={active === "cad" && "active"} id={"cad"} onClick={onClick}>
      CAD
    </CurrencyLabel>
    <CurrencyLabel className={active === "aed" && "active"} id={"aed"} onClick={onClick}>
      AED
    </CurrencyLabel>
  </CurrencySwitcherBlock>
);

export const computeEventAppPrice = (attendeesValue, basicPrice) => {
  if (attendeesValue < 5000) basicPrice = attendeesValue * 1.9;
  if (attendeesValue >= 5000 && attendeesValue < 10000) basicPrice = attendeesValue * 1.7;
  if (attendeesValue >= 10000 && attendeesValue < 15000) basicPrice = attendeesValue * 1.5;
  if (attendeesValue >= 15000 && attendeesValue < 25000) basicPrice = attendeesValue * 1.3;
  if (attendeesValue >= 25000) basicPrice = Math.round(attendeesValue * 1.1);
  return basicPrice;
};

export const currencySign = (currency) => {
  let sign = "";
  if (currency === "eur") sign = "€";
  if (currency === "usd") sign = "$";
  if (currency === "cad") sign = "$";
  if (currency === "aed") sign = "AED";
  return <CurrencySign>{sign}</CurrencySign>;
};

export const currencySignStr = (currency) => {
  let sign = "";
  if (currency === "eur") sign = "€";
  if (currency === "usd") sign = "$";
  if (currency === "cad") sign = "$";
  if (currency === "aed") sign = "AED";
  return sign;
};

export const showPriceStrRaw = (currency, price) => {
  if (currency === "eur") {
    return " " + price + currencySignStr(currency);
  }
  if (currency === "usd") {
    return " " + currencySignStr(currency) + price;
  }
  if (currency === "cad") {
    return " " + currencySignStr(currency) + price;
  }
  if (currency === "aed") {
    return " " + price + currencySignStr(currency);
  }
};

export const showPriceStrByItem = (currency, item) => {
  const price = priceList[item][currency];

  if (currency === "eur") {
    return " " + numeral(price).format("0,0") + currencySignStr(currency);
  }
  if (currency === "usd") {
    return " " + currencySignStr(currency) + numeral(price).format("0,0");
  }
  if (currency === "cad") {
    return " " + currencySignStr(currency) + numeral(price).format("0,0");
  }
  if (currency === "aed") {
    return " " + numeral(price).format("0,0") + currencySignStr(currency);
  }
};

export const showPriceStrRawNumeral = (currency, price) => {
  if (currency === "eur") {
    return " " + numeral(price).format("0,0") + currencySignStr(currency);
  }
  if (currency === "usd") {
    return " " + currencySignStr(currency) + numeral(price).format("0,0");
  }
  if (currency === "cad") {
    return " " + currencySignStr(currency) + numeral(price).format("0,0");
  }
  if (currency === "aed") {
    return " " + numeral(price).format("0,0") + currencySignStr(currency);
  }
};

// Step 2 st
// export const webTrainingBasicPrice = 490;
// export const brandedAppBasicPrice = 1490;
// export const floorPlanBasicPricePerMap = 990;
// export const floorPlanBasicPricePerExhibitor = 2;
// export const dedicatedSupportBasicPrice = 790;
// export const onsiteSupportBasicPrice = 790;
// Step 2 end

// Step 3 st
// export const globalExhibitorPackageBasicPrice = 134;
// export const contentManagementBasicPrice = 19;
// export const meetingsBasicPrice = 49;
// export const leadCaptureBasicPrice = 99;
// Step 3 end

// export const eventPricePerAttendee = getPriceArr(eventBasicPricePerAttendee);
// export const meetingsPrice = getPriceArr(meetingsBasicPrice);
// export const leadCapturePrice = getPriceArr(leadCaptureBasicPrice);
// export const contentManagementPrice = getPriceArr(contentManagementBasicPrice);

export const applyGradualDiscount = (exhibitorsValue, basicPrice) => {
  if (exhibitorsValue <= 50) return basicPrice;
  if (exhibitorsValue > 50 && exhibitorsValue <= 100) return basicPrice * (1 - 0.15);
  if (exhibitorsValue > 100 && exhibitorsValue <= 300) return basicPrice * (1 - 0.2);
  if (exhibitorsValue > 300 && exhibitorsValue <= 500) return basicPrice * (1 - 0.25);
  if (exhibitorsValue > 500 && exhibitorsValue <= 1000) return basicPrice * (1 - 0.3);
  if (exhibitorsValue > 1000 && exhibitorsValue <= 2000) return basicPrice * (1 - 0.35);
  if (exhibitorsValue > 2000 && exhibitorsValue <= 3000) return basicPrice * (1 - 0.4);
  if (exhibitorsValue > 3000) return basicPrice * (1 - 0.45);
};

// export const showPricePerUnit = (currency, price, unitLabel) => {
//   if (currency === "eur") {
//     return " " + numeral(price[0]).format("0,0") + currencySignStr(currency) + "/" + unitLabel;
//   }
//   if (currency === "usd") {
//     return " " + currencySignStr(currency) + numeral(price[1]).format("0,0") + "/" + unitLabel;
//   }
//   if (currency === "cad") {
//     return " " + currencySignStr(currency) + numeral(price[2]).format("0,0") + "/" + unitLabel;
//   }
//   if (currency === "aed") {
//     return " " + currencySignStr(currency) + " " + numeral(price[3]).format("0,0") + "/" + unitLabel;
//   }
// };

export const showPricePerUnit = (currency, item, unitLabel) => {
  const price = priceList[item][currency];

  if (currency === "eur") {
    return " " + numeral(price).format("0,0") + currencySignStr(currency) + "/" + unitLabel;
  }
  if (currency === "usd") {
    return " " + currencySignStr(currency) + numeral(price).format("0,0") + "/" + unitLabel;
  }
  if (currency === "cad") {
    return " " + currencySignStr(currency) + numeral(price).format("0,0") + "/" + unitLabel;
  }
  if (currency === "aed") {
    return " " + currencySignStr(currency) + " " + numeral(price).format("0,0") + "/" + unitLabel;
  }
};

export const calculateSum2 = (currency, country) => {
  const isClient = typeof window !== "undefined";
  if (isClient) {
    const features = getPackage();

    let total = 0;

    total += priceList["attendees"][currency] * features.attendeesVolume;

    if (features.brandedApp) total += priceList["branded_app"][currency];
    if (features.webTraining) total += priceList["web_training"][currency];

    if (features.dedicatedSupport)
      total += priceList["dedicated_manager_per_day"][currency] * features.dedicatedSupportDays;

    if (features.onSiteSupport) total += priceList["onsite_support_per_day"][currency] * features.onSiteSupportDays;

    if (features.exhibitorsVolume > 0) {
      if (features.virtualExhibitorPackage) {
        total += priceList["exhibitor_package_without_scan"][currency] * features.exhibitorsVolume;
      }

      if (features.globalExhibitorPackage) {
        total += priceList["exhibitor_package_without_scan"][currency] * features.exhibitorsVolume;
      }

      if (features.leadCaptureFeature) {
        total += priceList["lead_capture_per_exhibitor"][currency] * features.exhibitorsVolume;
      }
    }

    return total;
  }
};

export const getPackage = () => {
  const isClient = typeof window !== "undefined";
  if (isClient) {
    const packageInfo = JSON.parse(window.localStorage.getItem("package"));

    if (packageInfo) {
      const currency = packageInfo.currency || "eur";

      const attendeesVolume = (packageInfo && packageInfo.numberOfAttendees) || 0;
      const numberOfEvents = (packageInfo && packageInfo.numberOfEvents) || 0;
      const eventFormat = packageInfo && packageInfo.eventFormat;

      const firstEventDate = packageInfo?.firstEventDate;

      const isInesAccepted = moment(packageInfo.firstEventDate).isAfter(moment().add(2, "month"));

      const webTraining = packageInfo.options?.webTraining || false;
      const brandedApp = packageInfo.options?.brandedApp || false;
      const floorPlan = packageInfo.options?.floorPlan || false;
      // const dedicatedSupport = packageInfo.options?.dedicatedSupport || false;
      const dedicatedSupport = false;
      // const dedicatedSupportDays = packageInfo.options?.dedicatedSupportDays || 0;
      const dedicatedSupportDays = 0;

      // const onSiteSupport = packageInfo.options?.onSiteSupport || false;
      const onSiteSupport = false;
      // const onSiteSupportDays = packageInfo.options?.onSiteSupportDays || 0;
      const onSiteSupportDays = 0;

      const exhibitorsVolume = packageInfo.numberOfExhibitors || 0;

      const globalExhibitorPackage = packageInfo.exhibitorServices?.globalExhibitorPackage;

      const virtualExhibitorPackage = packageInfo.exhibitorServices?.virtualExhibitorPackage || false;
      const leadCaptureFeature = packageInfo.exhibitorServices?.leadCaptureFeature || false;

      // const meetingsFeature = packageInfo.exhibitorServices?.features?.meetingsFeature || false;

      // const contentManagementFeature = packageInfo.exhibitorServices?.features?.contentManagementFeature || false;

      const hasSupport = (dedicatedSupport && dedicatedSupportDays > 0) || (onSiteSupport && onSiteSupportDays > 0);

      const hasExhibitorsServices = globalExhibitorPackage || virtualExhibitorPackage || leadCaptureFeature;

      const hasOptions = brandedApp || webTraining;

      return {
        currency,
        attendeesVolume,
        numberOfEvents,
        eventFormat,
        firstEventDate,
        webTraining,
        brandedApp,
        floorPlan,
        dedicatedSupport,
        dedicatedSupportDays,
        onSiteSupport,
        onSiteSupportDays,
        exhibitorsVolume,
        virtualExhibitorPackage,
        globalExhibitorPackage,
        leadCaptureFeature,
        hasSupport,
        hasExhibitorsServices,
        hasOptions,
        isInesAccepted,
      };
    }
  }

  return {
    isInesAccepted: "",
    currency: "",
    attendeesVolume: "",
    numberOfEvents: "",
    eventFormat: "",
    webTraining: "",
    brandedApp: " ",
    floorPlan: "",
    dedicatedSupport: "",
    dedicatedSupportDays: "",
    onSiteSupport: "",
    onSiteSupportDays: "",
    exhibitorsVolume: "",
    virtualExhibitorPackage: "",
    globalExhibitorPackage: "",
    leadCaptureFeature: "",
    hasSupport: "",
    hasExhibitorsServices: "",
    hasOptions: "",
  };
};
