const path = require("path");
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";
console.log(`Using environment config: '${activeEnv}'`);
require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
  },
  siteMetadata: {
    title: "Swapcard",
    showcaseUrl: "https://www.swapcard.com",
    siteUrl: `https://www.swapcard.com`,
    loginAttendees: "https://login.swapcard.com",
    loginOrganizer: "https://studio.swapcard.com",
    loginExhibitors: "https://team.swapcard.com",
    blog: "https://blog.swapcard.com",
    help: "https://help.swapcard.com",
    app_store: "https://itunes.apple.com/fr/app/swapcard/id879488719?mt=8",
    play_store: "https://play.google.com/store/apps/details?id=com.swapcard.apps.android&hl=fr",
    lang: {
      "fr-fr": "fr",
      "it-it": "it",
      "es-es": "es",
      "en-us": "",
      "fr-ca": "fr-ca",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 100,
          backgroundColor: `transparent`,
          webpOptions: { quality: 100 },
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "babel-plugin-styled-components",
    "gatsby-plugin-stripe",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "swapcard-showcase",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://4b71007f8dc84173a33721ade08b8758@o405648.ingest.sentry.io/5271681",
        environment: process.env.NODE_ENV,
        enabled: (() => ["production"].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `showcase-dev`,
        linkResolver:
          ({ node, key, value }) =>
          (doc) => {
            return doc;
          },
        //accessToken: `MC5XcjVMelNRQUFDTUFhRlh6.77-977-9W--_ve-_ve-_ve-_ve-_ve-_vRJbd--_ve-_ve-_ve-_ve-_ve-_vT0oN--_vX_vv73vv70R77-977-9U--_vXpd`,
        accessToken: `MC5XcjVMelNRQUFDTUFhRlh6.77-977-9W--_ve-_ve-_ve-_ve-_ve-_vRJbd--_ve-_ve-_ve-_ve-_ve-_vT0oN--_vX_vv73vv70R77-977-9U--_vXpd`,
        lang: "*",
        schemas: {
          home_template_1: require("./src/schemas/home_template_1.json"),
          contact_template_1: require("./src/schemas/contact_template_1.json"),
          price_template_1: require("./src/schemas/price_template_1.json"),
          event_webinar_template_1: require("./src/schemas/event_webinar_template_1.json"),
          features_category_template_1: require("./src/schemas/features_category_template_1.json"),
          features_template_1: require("./src/schemas/features_template_1.json"),
          template_1: require("./src/schemas/template_1.json"),
          template_2: require("./src/schemas/template_2.json"),
          translate: require("./src/schemas/translate.json"),
          careers: require("./src/schemas/careers.json"),
          success_story: require("./src/schemas/success_story.json"),
          customers_events: require("./src/schemas/customers_events.json"),
          demo: require("./src/schemas/demo.json"),
          demo_2: require("./src/schemas/demo_2.json"),
          signup: require("./src/schemas/signup.json"),
          contact: require("./src/schemas/contact.json"),
          client_reviews: require("./src/schemas/client_reviews.json"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`fetch`],
      },
    },
  ],
};
