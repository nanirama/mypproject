import React from "react";
import Entreprise from "./entreprise";
import SelfService from "./self-service";
import { getPackage } from "../common";

export default ({ setStep, translation, lang }) => {
  const features = getPackage();

  const showCheckout = features.attendeesVolume <= 1000 && !features.floorPlan && features.exhibitorsVolume <= 25;
  return (
    <>
      {showCheckout ? (
        <SelfService setStep={setStep} translation={translation} lang={lang} />
      ) : (
        <Entreprise setStep={setStep} translation={translation} lang={lang} />
      )}
    </>
  );
};
