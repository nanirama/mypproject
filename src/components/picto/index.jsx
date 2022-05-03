// @ts-ignore
import { createGlobalStyle } from "styled-components";
import fontFiles from "./fonts";

export default createGlobalStyle`

@font-face {
    font-family: "Showcase-icons";
    src: url("${fontFiles.SwapcardPictoEOT}");
    src: url("${fontFiles.SwapcardPictoEOT}#iefix") format("embedded-opentype"),
        url("${fontFiles.SwapcardPictoWOFF2}") format("woff2"),
        url("${fontFiles.SwapcardPictoWOFF}") format("woff"),
        url("${fontFiles.SwapcardPictoTTF}") format("truetype"),
        url("${fontFiles.SwapcardPictoSVG}#Showcase-icons") format("svg");
    font-weight: normal;
    font-style: normal;
}


/* @media screen and (-webkit-min-device-pixel-ratio:0) {
    @font-face {
        font-family: "Showcase-icons";
        src: url(${fontFiles.SwapcardPictoSVG}"#Showcase-icons") format("svg");
    }
} */




[data-icons8]:before { content: attr(data-icons8); }

.icons8, [data-icons8]:before,
.icons8-access-granted:before,
.icons8-agreement:before,
.icons8-aide:before,
.icons8-air-play-button:before,
.icons8-alarme:before,
.icons8-apartment-building:before,
.icons8-approve:before,
.icons8-arrow-pointing-to-right:before,
.icons8-attirer:before,
.icons8-banni-re:before,
.icons8-building:before,
.icons8-bulle:before,
.icons8-business-card-scanner:before,
.icons8-calendrier-14:before,
.icons8-carte-contact:before,
.icons8-casque----couteurs:before,
.icons8-chat-room:before,
.icons8-checked:before,
.icons8-checked-2:before,
.icons8-checkout:before,
.icons8-circular-arrow-pointing-to-left:before,
.icons8-cl:before,
.icons8-classroom:before,
.icons8-client-base:before,
.icons8-close-button:before,
.icons8-close-button-2:before,
.icons8-close-button-3:before,
.icons8-cloud-sync:before,
.icons8-collaboration:before,
.icons8-collapse-arrow:before,
.icons8-comma:before,
.icons8-comma-2:before,
.icons8-commercial:before,
.icons8-conf-rence:before,
.icons8-conf-rence-premier-plan-s-lectionn:before,
.icons8-confiance:before,
.icons8-contacts:before,
.icons8-content:before,
.icons8-data-encryption:before,
.icons8-data-protection:before,
.icons8-database:before,
.icons8-database-administrator:before,
.icons8-database-symbol:before,
.icons8-database-view:before,
.icons8-design:before,
.icons8-diabetes:before,
.icons8-diffusion:before,
.icons8-document:before,
.icons8-donn-es-dans-les-deux-directions:before,
.icons8-download-from-cloud:before,
.icons8-drop-down-arrow:before,
.icons8-e-mail:before,
.icons8-edit:before,
.icons8-employ:before,
.icons8-entra-nement:before,
.icons8-ev-nement-accept:before,
.icons8-ev-nement-accept--provisoirement:before,
.icons8-exposant:before,
.icons8-fl-che-droite:before,
.icons8-get-quote:before,
.icons8-graphique-combin:before,
.icons8-green-check-mark:before,
.icons8-green-check-mark-2:before,
.icons8-green-check-mark-3:before,
.icons8-green-check-mark-4:before,
.icons8-grid:before,
.icons8-groupe-d-apos-utilisateurs-homme-homme:before,
.icons8-handshake-heart:before,
.icons8-hard-to-find:before,
.icons8-haussier:before,
.icons8-heures-suppl-mentaires:before,
.icons8-histogramme:before,
.icons8-home:before,
.icons8-id-e:before,
.icons8-imac:before,
.icons8-image-frame:before,
.icons8-infinite:before,
.icons8-intelligence-artificielle:before,
.icons8-interface-utilisateur-naturelle-2:before,
.icons8-invisible:before,
.icons8-invitation:before,
.icons8-iphone:before,
.icons8-iphone-x:before,
.icons8-job-seeker:before,
.icons8-key:before,
.icons8-left-arrow:before,
.icons8-licence:before,
.icons8-lien:before,
.icons8-light-on:before,
.icons8-line-chart:before,
.icons8-line-graphic:before,
.icons8-lock-outline:before,
.icons8-lock-smartphone:before,
.icons8-locked-smartphone:before,
.icons8-mail:before,
.icons8-mail-2:before,
.icons8-main-avec-stylo:before,
.icons8-marqueur:before,
.icons8-messages:before,
.icons8-micro:before,
.icons8-minuteur:before,
.icons8-money:before,
.icons8-moniteur:before,
.icons8-montre:before,
.icons8-note:before,
.icons8-notification:before,
.icons8-nuage:before,
.icons8-ok:before,
.icons8-organisation:before,
.icons8-people:before,
.icons8-phone:before,
.icons8-phone-receiver:before,
.icons8-pi-ces-de-monnaie:before,
.icons8-planificateur:before,
.icons8-play:before,
.icons8-play-2:before,
.icons8-play-button-circled:before,
.icons8-play-property:before,
.icons8-podium:before,
.icons8-podium-avec-audience:before,
.icons8-podium-sans-intervenant:before,
.icons8-podium-with-speaker:before,
.icons8-poign-e-de-main:before,
.icons8-poste-de-travail:before,
.icons8-pouce-en-l-apos-air:before,
.icons8-pr-sentation:before,
.icons8-product:before,
.icons8-punaise:before,
.icons8-push-notifications:before,
.icons8-qr-code:before,
.icons8-questionnaire:before,
.icons8-quick-mode-on:before,
.icons8-quitter-la-queue:before,
.icons8-quote-left:before,
.icons8-r--quilibrer-le-portefeuille:before,
.icons8-r-seau:before,
.icons8-r-servation:before,
.icons8-r-union:before,
.icons8-rafra-chir:before,
.icons8-relation-homme-homme:before,
.icons8-remarque-importante:before,
.icons8-rendez-vous-p-riodique:before,
.icons8-restaurant-building:before,
.icons8-right-pointing-arrow:before,
.icons8-right-pointing-arrow-2:before,
.icons8-right-pointing-arrow-3:before,
.icons8-right-pointing-arrow-4:before,
.icons8-right-pointing-arrow-5:before,
.icons8-rounded-arrow:before,
.icons8-safety-care:before,
.icons8-schedule:before,
.icons8-search:before,
.icons8-security:before,
.icons8-shield-outline:before,
.icons8-shop:before,
.icons8-signature:before,
.icons8-star-filled:before,
.icons8-statistics:before,
.icons8-stop-hand-in-a-circle:before,
.icons8-submit-document:before,
.icons8-support-en-ligne:before,
.icons8-sync:before,
.icons8-synchroniser:before,
.icons8-team:before,
.icons8-technologie-lifestyle:before,
.icons8-telescope:before,
.icons8-troph-e:before,
.icons8-twitter:before,
.icons8-uninstalling-updates:before,
.icons8-update:before,
.icons8-user-male:before,
.icons8-utilisateur:before,
.icons8-utilisateur-sexe-neutre:before,
.icons8-valuations:before,
.icons8-vers-l-apos-avant:before,
.icons8-vers-le-bas:before,
.icons8-vers-le-bas-2:before,
.icons8-vers-le-bas-3:before,
.icons8-visible:before,
.icons8-visible-2:before,
.icons8-visual-studio:before,
.icons8-volume-moyen:before,
.icons8-warranty:before,
.icons8-web:before,
.icons8-webcam-man:before,
.icons8-wifi--teint:before,
.icons8-world-map:before {
  display: inline-block;
  font-family: "Showcase-icons";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  text-decoration: inherit;
  text-rendering: optimizeLegibility;
  text-transform: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.icons8-access-granted:before { content: "\f1b7"; }
.icons8-agreement:before { content: "\f1ae"; }
.icons8-aide:before { content: "\f128"; }
.icons8-air-play-button:before { content: "\f19b"; }
.icons8-alarme:before { content: "\f138"; }
.icons8-apartment-building:before { content: "\f127"; }
.icons8-approve:before { content: "\f1a6"; }
.icons8-arrow-pointing-to-right:before { content: "\f165"; }
.icons8-attirer:before { content: "\f176"; }
.icons8-banni-re:before { content: "\f103"; }
.icons8-building:before { content: "\f126"; }
.icons8-bulle:before { content: "\f15c"; }
.icons8-business-card-scanner:before { content: "\f1ba"; }
.icons8-calendrier-14:before { content: "\f139"; }
.icons8-carte-contact:before { content: "\f160"; }
.icons8-casque----couteurs:before { content: "\f168"; }
.icons8-chat-room:before { content: "\f113"; }
.icons8-checked:before { content: "\f183"; }
.icons8-checked-2:before { content: "\f184"; }
.icons8-checkout:before { content: "\f1a3"; }
.icons8-circular-arrow-pointing-to-left:before { content: "\f155"; }
.icons8-cl:before { content: "\f105"; }
.icons8-classroom:before { content: "\f110"; }
.icons8-client-base:before { content: "\f1ab"; }
.icons8-close-button:before { content: "\f119"; }
.icons8-close-button-2:before { content: "\f185"; }
.icons8-close-button-3:before { content: "\f186"; }
.icons8-cloud-sync:before { content: "\f16d"; }
.icons8-collaboration:before { content: "\f17a"; }
.icons8-collapse-arrow:before { content: "\f154"; }
.icons8-comma:before { content: "\f19f"; }
.icons8-comma-2:before { content: "\f1a0"; }
.icons8-commercial:before { content: "\f1a2"; }
.icons8-conf-rence:before { content: "\f13e"; }
.icons8-conf-rence-premier-plan-s-lectionn:before { content: "\f17c"; }
.icons8-confiance:before { content: "\f180"; }
.icons8-contacts:before { content: "\f149"; }
.icons8-content:before { content: "\f192"; }
.icons8-data-encryption:before { content: "\f1b4"; }
.icons8-data-protection:before { content: "\f1b3"; }
.icons8-database:before { content: "\f112"; }
.icons8-database-administrator:before { content: "\f190"; }
.icons8-database-symbol:before { content: "\f193"; }
.icons8-database-view:before { content: "\f197"; }
.icons8-design:before { content: "\f114"; }
.icons8-diabetes:before { content: "\f129"; }
.icons8-diffusion:before { content: "\f17e"; }
.icons8-document:before { content: "\f11b"; }
.icons8-donn-es-dans-les-deux-directions:before { content: "\f16e"; }
.icons8-download-from-cloud:before { content: "\f111"; }
.icons8-drop-down-arrow:before { content: "\f152"; }
.icons8-e-mail:before { content: "\f151"; }
.icons8-edit:before { content: "\f122"; }
.icons8-employ:before { content: "\f181"; }
.icons8-entra-nement:before { content: "\f16a"; }
.icons8-ev-nement-accept:before { content: "\f143"; }
.icons8-ev-nement-accept--provisoirement:before { content: "\f144"; }
.icons8-exposant:before { content: "\f142"; }
.icons8-fl-che-droite:before { content: "\f12c"; }
.icons8-get-quote:before { content: "\f19d"; }
.icons8-graphique-combin:before { content: "\f13d"; }
.icons8-green-check-mark:before { content: "\f12d"; }
.icons8-green-check-mark-2:before { content: "\f187"; }
.icons8-green-check-mark-3:before { content: "\f188"; }
.icons8-green-check-mark-4:before { content: "\f1a5"; }
.icons8-grid:before { content: "\f124"; }
.icons8-groupe-d-apos-utilisateurs-homme-homme:before { content: "\f159"; }
.icons8-handshake-heart:before { content: "\f1ad"; }
.icons8-hard-to-find:before { content: "\f18a"; }
.icons8-haussier:before { content: "\f137"; }
.icons8-heures-suppl-mentaires:before { content: "\f140"; }
.icons8-histogramme:before { content: "\f14b"; }
.icons8-home:before { content: "\f11c"; }
.icons8-id-e:before { content: "\f15b"; }
.icons8-imac:before { content: "\f171"; }
.icons8-image-frame:before { content: "\f11a"; }
.icons8-infinite:before { content: "\f1a1"; }
.icons8-intelligence-artificielle:before { content: "\f14c"; }
.icons8-interface-utilisateur-naturelle-2:before { content: "\f102"; }
.icons8-invisible:before { content: "\f189"; }
.icons8-invitation:before { content: "\f145"; }
.icons8-iphone:before { content: "\f172"; }
.icons8-iphone-x:before { content: "\f12a"; }
.icons8-job-seeker:before { content: "\f18b"; }
.icons8-key:before { content: "\f1b5"; }
.icons8-left-arrow:before { content: "\f153"; }
.icons8-licence:before { content: "\f1a7"; }
.icons8-lien:before { content: "\f135"; }
.icons8-light-on:before { content: "\f10e"; }
.icons8-line-chart:before { content: "\f108"; }
.icons8-line-graphic:before { content: "\f109"; }
.icons8-lock-outline:before { content: "\f1b0"; }
.icons8-lock-smartphone:before { content: "\f1b8"; }
.icons8-locked-smartphone:before { content: "\f1b6"; }
.icons8-mail:before { content: "\f118"; }
.icons8-mail-2:before { content: "\f150"; }
.icons8-main-avec-stylo:before { content: "\f12e"; }
.icons8-marqueur:before { content: "\f167"; }
.icons8-messages:before { content: "\f11d"; }
.icons8-micro:before { content: "\f10d"; }
.icons8-minuteur:before { content: "\f13c"; }
.icons8-money:before { content: "\f10c"; }
.icons8-moniteur:before { content: "\f170"; }
.icons8-montre:before { content: "\f13b"; }
.icons8-note:before { content: "\f134"; }
.icons8-notification:before { content: "\f11e"; }
.icons8-nuage:before { content: "\f16c"; }
.icons8-ok:before { content: "\f13f"; }
.icons8-organisation:before { content: "\f156"; }
.icons8-people:before { content: "\f10f"; }
.icons8-phone:before { content: "\f14f"; }
.icons8-phone-receiver:before { content: "\f14e"; }
.icons8-pi-ces-de-monnaie:before { content: "\f132"; }
.icons8-planificateur:before { content: "\f141"; }
.icons8-play:before { content: "\f199"; }
.icons8-play-2:before { content: "\f19a"; }
.icons8-play-button-circled:before { content: "\f198"; }
.icons8-play-property:before { content: "\f19c"; }
.icons8-podium:before { content: "\f104"; }
.icons8-podium-avec-audience:before { content: "\f157"; }
.icons8-podium-sans-intervenant:before { content: "\f15a"; }
.icons8-podium-with-speaker:before { content: "\f120"; }
.icons8-poign-e-de-main:before { content: "\f101"; }
.icons8-poste-de-travail:before { content: "\f16f"; }
.icons8-pouce-en-l-apos-air:before { content: "\f178"; }
.icons8-pr-sentation:before { content: "\f158"; }
.icons8-product:before { content: "\f1a4"; }
.icons8-punaise:before { content: "\f15f"; }
.icons8-push-notifications:before { content: "\f10b"; }
.icons8-qr-code:before { content: "\f133"; }
.icons8-questionnaire:before { content: "\f1ac"; }
.icons8-quick-mode-on:before { content: "\f191"; }
.icons8-quitter-la-queue:before { content: "\f148"; }
.icons8-quote-left:before { content: "\f19e"; }
.icons8-r--quilibrer-le-portefeuille:before { content: "\f17d"; }
.icons8-r-seau:before { content: "\f16b"; }
.icons8-r-servation:before { content: "\f146"; }
.icons8-r-union:before { content: "\f100"; }
.icons8-rafra-chir:before { content: "\f130"; }
.icons8-relation-homme-homme:before { content: "\f136"; }
.icons8-remarque-importante:before { content: "\f13a"; }
.icons8-rendez-vous-p-riodique:before { content: "\f169"; }
.icons8-restaurant-building:before { content: "\f125"; }
.icons8-right-pointing-arrow:before { content: "\f161"; }
.icons8-right-pointing-arrow-2:before { content: "\f162"; }
.icons8-right-pointing-arrow-3:before { content: "\f163"; }
.icons8-right-pointing-arrow-4:before { content: "\f164"; }
.icons8-right-pointing-arrow-5:before { content: "\f166"; }
.icons8-rounded-arrow:before { content: "\f194"; }
.icons8-safety-care:before { content: "\f1b1"; }
.icons8-schedule:before { content: "\f121"; }
.icons8-search:before { content: "\f18c"; }
.icons8-security:before { content: "\f1af"; }
.icons8-shield-outline:before { content: "\f1b2"; }
.icons8-shop:before { content: "\f117"; }
.icons8-signature:before { content: "\f1aa"; }
.icons8-star-filled:before { content: "\f116"; }
.icons8-statistics:before { content: "\f107"; }
.icons8-stop-hand-in-a-circle:before { content: "\f1b9"; }
.icons8-submit-document:before { content: "\f1a9"; }
.icons8-support-en-ligne:before { content: "\f15d"; }
.icons8-sync:before { content: "\f10a"; }
.icons8-synchroniser:before { content: "\f131"; }
.icons8-team:before { content: "\f11f"; }
.icons8-technologie-lifestyle:before { content: "\f14a"; }
.icons8-telescope:before { content: "\f18f"; }
.icons8-troph-e:before { content: "\f147"; }
.icons8-twitter:before { content: "\f15e"; }
.icons8-uninstalling-updates:before { content: "\f195"; }
.icons8-update:before { content: "\f196"; }
.icons8-user-male:before { content: "\f115"; }
.icons8-utilisateur:before { content: "\f17f"; }
.icons8-utilisateur-sexe-neutre:before { content: "\f17b"; }
.icons8-valuations:before { content: "\f179"; }
.icons8-vers-l-apos-avant:before { content: "\f12b"; }
.icons8-vers-le-bas:before { content: "\f173"; }
.icons8-vers-le-bas-2:before { content: "\f174"; }
.icons8-vers-le-bas-3:before { content: "\f175"; }
.icons8-visible:before { content: "\f18d"; }
.icons8-visible-2:before { content: "\f18e"; }
.icons8-visual-studio:before { content: "\f182"; }
.icons8-volume-moyen:before { content: "\f106"; }
.icons8-warranty:before { content: "\f1a8"; }
.icons8-web:before { content: "\f123"; }
.icons8-webcam-man:before { content: "\f177"; }
.icons8-wifi--teint:before { content: "\f12f"; }
.icons8-world-map:before { content: "\f14d"; }
`;
