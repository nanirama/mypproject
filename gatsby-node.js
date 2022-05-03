const path = require("path");
const slash = require(`slash`);
const config = require("./gatsby-config");
const jsonfile = require("jsonfile");

exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  if (stage === `build-javascript`) {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
  // if (stage === "build-html" || stage === "develop-html") {
  //   actions.setWebpackConfig({
  //     module: {
  //       rules: [
  //         {
  //           test: /react-modal-video/,
  //           use: loaders.null(),
  //         },
  //       ],
  //     },
  //   });
  // }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: `/hybrid`,
    toPath: `/virtual-events/`,
    redirectInBrowser: true,
    isPermanent: true,
  });

  createRedirect({
    fromPath: `/fr/hybrid`,
    toPath: `/fr/evenement-virtuel/`,
    redirectInBrowser: true,
    isPermanent: true,
  });

  createRedirect({
    fromPath: `/hybrid/`,
    toPath: `/virtual-events/`,
    redirectInBrowser: true,
    isPermanent: true,
  });

  createRedirect({
    fromPath: `/fr/hybrid/`,
    toPath: `/fr/evenement-virtuel/`,
    redirectInBrowser: true,
    isPermanent: true,
  });

  return new Promise((resolve, reject) => {
    const documentFragment = `
    edges {
      node {
        id
        lang
        type
        data {
          body {
            primary {
              meta_title {
                text
              }
              meta_description {
                text
              }
              slug
              route
               
            }
          }
        }
      }
    }
  `;
    const documentFragmentTemplate1 = `
 
  `;

    const documentFragmentLayout = `
  edges {
    node {
      id
      lang
      type
      data {
        body {
          primary {
            slug
            route
            layout  
            published
            meta_title {
              text
            }
            meta_description {
              text
            }
          }
        }
      }
    }
  }
`;

    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          query route {
            allPrismicHomeTemplate1 {
              edges {
                node {
                  id
                  lang
                  type
                  data {
                    body {
                      ... on PrismicHomeTemplate1BodyMeta {
                        primary {
                          slug
                          route
                          layout
                          menu_color
                          published
                          background_color
                          meta_title {
                            text
                          }
                          meta_description {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            allPrismicFeaturesTemplate1 {
              edges {
                node {
                  id
                  lang
                  type
                  data {
                    body {
                      ... on PrismicFeaturesTemplate1BodyMeta {
                        id
                        primary {
                          slug
                          route
                          layout
                          menu_color
                          published
                          background_color
                          meta_title {
                            text
                          }
                          meta_description {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            allPrismicEventWebinarTemplate1 {
              edges {
                node {
                  id
                  lang
                  type
                  data {
                    body {
                      ... on PrismicEventWebinarTemplate1BodyMeta {
                        primary {
                          slug
                          route
                          layout
                          published
                          background_color
                          meta_title {
                            text
                          }
                          meta_description {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            allPrismicContactTemplate1 {
              edges {
                node {
                  id
                  lang
                  type
                  data {
                    body {
                      ... on PrismicContactTemplate1BodyMeta {
                        primary {
                          slug
                          route
                          layout
                          published
                          background_color
                          meta_title {
                            text
                          }
                          meta_description {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            allPrismicPriceTemplate1 {
              edges {
                node {
                  id
                  lang
                  type
                  data {
                    body {
                      ... on PrismicPriceTemplate1BodyMeta {
                        id
                        primary {
                          slug
                          route
                          layout
                          published
                          background_color
                          meta_title {
                            text
                          }
                          meta_description {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            allPrismicTemplate1 {
              edges {
                node {
                  id
                  lang
                  type
                  data {
                    body {
                      ... on PrismicTemplate1BodyMeta {
                        primary {
                          slug
                          route
                          layout
                          menu_color
                          published
                          background_color
                          meta_title {
                            text
                          }
                          meta_description {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            allPrismicTemplate2 {
              edges {
                node {
                  id
                  lang
                  type
                  data {
                    body {
                      ... on PrismicTemplate2BodyMeta {
                        primary {
                          slug
                          route
                          layout
                          published
                          background_color
                          meta_title {
                            text
                          }
                          meta_description {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            allPrismicCareers {
              edges {
                node {
                  id
                  lang
                  type
                  data {
                    body {
                      ... on PrismicCareersBodyMeta {
                        primary {
                          slug
                          route
                          background_color
                          meta_title {
                            text
                          }
                          meta_description {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            allPrismicSuccessStory {
              edges {
                node {
                  id
                  lang
                  type
                  data {
                    body {
                      ... on PrismicSuccessStoryBodyMeta {
                        primary {
                          slug
                          route
                          meta_title {
                            text
                          }
                          meta_description {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            allPrismicContact {
              edges {
                node {
                  id
                  lang
                  type
                  data {
                    body {
                      ... on PrismicContactBodyMeta {
                        primary {
                          slug
                          route
                          layout
                          meta_title {
                            text
                          }
                          meta_description {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }

            allPrismicDemo2 {
              edges {
                node {
                  id
                  lang
                  type
                  data {
                    body {
                      ... on PrismicDemo2BodyMeta {
                        primary {
                          slug
                          route
                          layout
                          meta_title {
                            text
                          }
                          meta_description {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }

            allPrismicDemo {
              edges {
                node {
                  id
                  lang
                  type
                  data {
                    body {
                      ... on PrismicDemoBodyMeta {
                        primary {
                          slug
                          route
                          layout
                          meta_title {
                            text
                          }
                          meta_description {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            allPrismicCustomersEvents {
              edges {
                node {
                  id
                  lang
                  type
                  data {
                    body {
                      ... on PrismicCustomersEventsBodyMeta {
                        primary {
                          slug
                          route
                          layout
                          meta_title {
                            text
                          }
                          meta_description {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            allPrismicSignup {
              edges {
                node {
                  id
                  lang
                  type
                  data {
                    body {
                      ... on PrismicSignupBodyMeta {
                        primary {
                          slug
                          route
                          layout
                          meta_title {
                            text
                          }
                          meta_description {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
        }

        const data = [
          ...result.data.allPrismicHomeTemplate1.edges,
          ...result.data.allPrismicEventWebinarTemplate1.edges,
          ...result.data.allPrismicContactTemplate1.edges,
          ...result.data.allPrismicPriceTemplate1.edges,
          ...result.data.allPrismicFeaturesTemplate1.edges,
          ...result.data.allPrismicTemplate1.edges,
          ...result.data.allPrismicTemplate2.edges,
          ...result.data.allPrismicCareers.edges,
          ...result.data.allPrismicSuccessStory.edges,
          ...result.data.allPrismicCustomersEvents.edges,
          ...result.data.allPrismicDemo.edges,
          ...result.data.allPrismicDemo2.edges,
          ...result.data.allPrismicContact.edges,
          ...result.data.allPrismicSignup.edges,
        ];

        // const data = [...result.data.allPrismicTemplate1.edges];

        const routes = data.reduce(
          (acc, { node }) => ({
            ...acc,
            [node.lang]: {
              ...acc[node.lang],
              [node.data.body[0].primary.route]: (() => {
                if (node.data.body[0].primary.route === "homepage") {
                  if (config.siteMetadata.lang[node.lang] || node.lang === "en-us")
                    return path.normalize(`/${config.siteMetadata.lang[node.lang]}/`);
                } else {
                  if (config.siteMetadata.lang[node.lang] || node.lang === "en-us")
                    return path.normalize(`/${config.siteMetadata.lang[node.lang]}/${node.data.body[0].primary.slug}/`);
                }
              })(),
            },
          }),
          {}
        );

        jsonfile.writeFile("./src/localization/routes.json", routes);

        for (const edge of data) {
          const pageTemplate = path.resolve(`./src/templates/${edge.node.type}.jsx`);

          let slug = path.normalize(
            `${config.siteMetadata.lang[edge.node.lang]}/${edge.node.data.body[0].primary.slug}`
          );
          if (process.env.NODE_ENV === "development") {
            if (edge.node.data.body[0].primary.route === "pricing_41") {
              slug = `${edge.node.data.body[0].primary.slug}/`;
            }
            if (edge.node.data.body[0].primary.route === "about/contact/sales/v2") {
              slug = `${edge.node.data.body[0].primary.slug}/`;
            }
            if (edge.node.data.body[0].primary.route === "homepage_NEW") {
              slug = `${edge.node.data.body[0].primary.slug}/`;
            }
            if (edge.node.data.body[0].primary.route === "event/webinar/v1") {
              slug = `${edge.node.data.body[0].primary.slug}/`;
            }
            if (edge.node.data.body[0].primary.route === "features/v1") {
              slug = `${edge.node.data.body[0].primary.slug}/`;
            }
          }

          if (edge.node.data.body[0].primary.route === "homepage") {
            slug = `${config.siteMetadata.lang[edge.node.lang]}/`;
          }

          const { type, lang, id } = edge.node;

          // console.log('Slug', slug)
          // console.log('lang', lang)
          // console.log('id', id)

          let background_color = edge.node.data.body[0].primary.background_color;
          let menu_color = edge.node.data.body[0].primary.menu_color;

          let layout = edge.node.data.body[0].primary.layout;

          let meta_title = edge.node.data.body[0].primary.meta_title.text || null;
          let meta_description = edge.node.data.body[0].primary.meta_description.text || null;

          if (background_color == null) {
            background_color = "#FFFFFF";
          }

          const published = edge.node.data.body[0].primary.published;

          if (
            process.env.NODE_ENV === "development" ||
            typeof published === "undefined" ||
            published === null ||
            published === "Yes"
          ) {
            if (["en-us", "fr-fr", "it-it"].indexOf(edge.node.lang) !== -1) {
              createPage({
                path: slug, // required
                component: slash(pageTemplate),
                context: {
                  id,
                  type,
                  lang,
                  showNavigation: layout,
                  meta_title,
                  meta_description,
                  background_color,
                  menu_color,
                  route: edge.node.data.body[0].primary.route,
                },
              });
            }
          }
        }

        return;
      })
    );
  });
};
