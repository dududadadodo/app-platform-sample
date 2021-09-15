/* eslint-disable react/no-unescaped-entities */
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document<unknown> {
  render(): JSX.Element {
    return (
      <Html lang="mn">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
          <meta title="Munkhjin Nyamdorj @nyamkamuhjin" />
          <meta name="theme-color" content="#ffffff" />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta charSet="UTF-8" />
          <meta name="geo.placename" content="Ulaanbaatar" />
          <meta name="geo.region" content="MN" />
          <meta name="author" content="Munkhjin" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <a
            id="cloudmn_ref"
            href="https://cloudmn-landingpage.vercel.app/"
            target="_blank"
          >
            <img
              src="https://cloudmn-tracker-test.herokuapp.com/cloudmn_darkblue.png"
              width="200px"
              height="60px"
              alt="Powered By Cloud.mn"
            />
          </a>
          <script src="https://cloudmn-tracker-test.herokuapp.com/referer.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
