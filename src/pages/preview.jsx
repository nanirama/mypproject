import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { usePrismicPreview } from "gatsby-source-prismic";
import Route from "../localization";

const PreviewPage = ({ location }) => {
  const { previewData, path } = usePrismicPreview({
    repositoryName: "showcase-dev"
  });

  useEffect(() => {
    if (previewData) {
      window.__PRISMIC_PREVIEW_DATA__ = previewData;
      let routeLang, routePath;
      if (previewData.prismicTemplate1) {
        routePath = previewData.prismicTemplate1.dataRaw.body[0].primary.route;
        routeLang = previewData.prismicTemplate1.lang;
      }
      if (previewData.prismicCustomersEvents) {
        routePath = previewData.prismicCustomersEvents.dataRaw.body[0].primary.route;
        routeLang = previewData.prismicCustomersEvents.lang;
      }
      if (previewData.prismicSuccessStory) {
        routePath = previewData.prismicSuccessStory.dataRaw.body[0].primary.route;
        routeLang = previewData.prismicSuccessStory.lang;
      }
      if (previewData.prismicTemplate2) {
        routePath = previewData.prismicTemplate2.dataRaw.body[0].primary.route;
        routeLang = previewData.prismicTemplate2.lang;
      }
      navigate(Route[routeLang][routePath]);
    }
  }, [previewData, path]);

  return <div>Loading preview... Please Wait..., Did you make your sandwich?</div>;
};

export default PreviewPage;
