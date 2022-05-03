const countriesList = require("../../../../localization/country.json");
const usaState = require("../../../../localization/stripe-usa-state.json");
const canadaProvince = require("../../../../localization/stripe-canada-province.json");

const countriesSelect = [];
for (const country of countriesList) {
  countriesSelect.push({
    label: country.name,
    value: country.code,
  });
}

export { countriesSelect, usaState, canadaProvince };
