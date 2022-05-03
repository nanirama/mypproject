import routes from "./routes.json";
import french from "./fr-fr.json";
import english from "./en-us.json";
import italian from "./it-it.json";
import trackingCategories from "./tracking.json";

export function tracking(category) {
  return trackingCategories[category];
}

export function exportLocale(lang) {
  let values = "";
  switch (lang) {
    case "fr-fr":
      values = french;
      break;
    case "en-us":
      values = english;
      break;
    case "it-it":
      values = italian;
      break;
    default:
      values = english;
  }
  return values;
}

export default routes;
