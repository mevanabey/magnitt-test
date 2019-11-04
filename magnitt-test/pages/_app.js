import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@theme/GlobalStyles';


class MagnittTest extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=fallback" rel="stylesheet"></link>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MagnittTest;