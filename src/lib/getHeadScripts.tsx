import React from 'react';
import { Helmet } from 'react-helmet';

const enableTagManager = true;
const tagManagerCode = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5BMZBGJ');
`;

const NoscriptTag = () => {
  if (enableTagManager) {
    return (
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5BMZBGJ"
          height="0"
          width="0"
          title="tagmanager"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    );
  }
  return null;
};

const HeadScripts: React.FC<Record<string, never>> = () => {
  return (
    <Helmet>
      {`
        <meta name="robots" content="index, follow" />
        <link type="text/plain" rel="author" href="/humans.txt" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito|Lato:300,400,700&display=swap"
          rel="stylesheet"
        />
        <script type="text/javascript">
          ${enableTagManager && tagManagerCode}
        </script>
        ${<NoscriptTag />}
      `}
    </Helmet >
  )
};

export default HeadScripts;