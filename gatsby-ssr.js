import React from "react";

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }, pluginOptions) => {
  // const crisp = `window.$crisp=[];window.CRISP_WEBSITE_ID="2cc66ebb-c784-40f8-a4db-c59493e334d3";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`;

  const albacross = `
      (function(a,l,b,c,r,s){
        _nQc=c,r=a.createElement(l),s=a.getElementsByTagName(l)[0];
        r.async=1;
        r.src=l.src=("https:"==a.location.protocol?"https://":"http://")+b;
        s.parentNode.insertBefore(r,s);})
        (document,"script","serve.albacross.com/track.js","89234812");
    `;

  const wisePops = `(function(W,i,s,e,P,o,p){W['WisePopsObject']=P;W[P]=W[P]||function(){(W[P].q=W[P].q||[]).push(arguments)},W[P].l=1*new Date();o=i.createElement(s),p=i.getElementsByTagName(s)[0];o.async=1;o.src=e;p.parentNode.insertBefore(o,p)})(window,document,'script','//d3cozrq1ru9wwt.cloudfront.net/get-loader.js?v=1&site=pnRyqCwyJg','wisepops');`;

  const segment = `
      !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://eclaire.swapcard.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
      }}();

  `;

  const salesloft = `
  (function(i,s,o,g,r,a,m){i['SLScoutObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://scout-cdn.salesloft.com/sl.js','slscout');
  slscout(["init", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0IjoxMDMzODR9.oizouElZRGT6KfptNRc2ZbP5MU-Xwo2gC_rXI9aRDwc"]);
  `;

  const happierlead = `
  !function(){var e="rest.happierleads.com/v3/script?clientId=atePQi92AwKPfQhCzo1GDu&version=3.0.0",
  t=document.createElement("script");window.location.protocol.split(":")[0];
  t.src="https://"+e;var c=document.getElementsByTagName("script")[0];
  t.onload = function(){ new Happierleads.default };
  t.async=true;
  c.parentNode.insertBefore(t,c)}();
  `;

  setHeadComponents([
    <React.Fragment>
      <link key="Fonts" rel="stylesheet" href="https://use.typekit.net/hvz1bbd.css" />
      <script key="ChiliPiper" src="https://js.chilipiper.com/marketing.js" type="text/javascript" async></script>
    </React.Fragment>,
  ]);

  setPostBodyComponents([
    <React.Fragment>
      <script
        key="leads"
        src="https://happierleads.com/static/js/2.0.0/happierleads-min.js"
        type="text/javascript"
      ></script>

      {/* <script
        type="text/javascript"
        key="hubspot"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/3004554.js"
      ></script> */}

      <script
        key={"custom"}
        dangerouslySetInnerHTML={{
          __html: `

                function read_cookie(key)
                {
                    var result;
                    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
                }

             
                  ${segment}


                  const segmentIntegrations = read_cookie("cookiePreference");
                  const cookieStatus = read_cookie("cookieStatus");
                  const cookieMarketing = read_cookie("cookieMarketing");
                  const cookieAds = read_cookie("cookieAds");
            
                  window.analytics.load("${process.env.SEGMENT_TOKEN}");

          
                  if((cookieStatus && cookieStatus === "acceptAll") || cookieMarketing){
                          ${albacross}
                          ${wisePops}
                  }

                  ${happierlead}
                      
                  `,
        }}
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "527bwjrzgb")
                  `,
        }}
      />
    </React.Fragment>,
  ]);
};
