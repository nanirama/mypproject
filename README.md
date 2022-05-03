# Showcase-React

- Build with GatsbyJS
- CMS : Prismic
- Hosted on AWS S3 + Cloudfront
- Deployed with Jenkins for each new commit on master.

## Start

`npm install`
`npm run dev`

## Architecture

- src
  - assets => logo, some image that are not in Prismic, lottie json and icons
  - components
    - section => React components used for prismic slice
    - templates => React components used by ./src/templates
    - Other => React components
  - localization
    - en-us.json & fr-fr.json & tracking.json used in some components to avoid hard-coded texts
    - routes.json => build by gatsby-node.js each build
  - templates
  - - => file name === {slice name} in Prismic

## Prismic

Prismic is the content manager. All pages are managed there. Templates are divided by slices.

## Components

- react-flexbox-grid for the grids
- \${props => props.theme.color.XXX} for color variables<br />
  Theme's file location: `src/components/layout/_config.js`
