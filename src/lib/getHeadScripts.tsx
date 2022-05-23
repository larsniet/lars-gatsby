import React from 'react';
import { Helmet } from 'react-helmet';

const analyticsSiteTag = `
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-3TK3C2FLSK"></script>
  <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-3TK3C2FLSK');
  </script>
`;

const HeadScripts: React.FC<Record<string, never>> = () => {
  return (
    <Helmet>
      {`
        <meta name="robots" content="index, follow" />
        <link type="text/plain" rel="author" href="/humans.txt" />
        <script type="text/javascript">
          ${analyticsSiteTag}
        </script>
      `}
    </Helmet >
  )
};

export default HeadScripts;