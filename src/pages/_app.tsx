import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyle from 'styles/global.styles'
import Header from 'components/Header'
import Footer from 'components/Footer'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#06092B" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>
      <NextSeo
        title="Portfolio"
        description="I'm baby keffiyeh pop-up la croix taiyaki vape. La croix irony farm-to-table waistcoat same disrupt four dollar toast before they sold out fit affogato biodiesel slow-carb vegan banjo."
        canonical="https://sitename.com.br/"
        openGraph={{
          url: 'https://sitename.com.br/',
          title:
            'Portfólio',
          description:
            'I am baby keffiyeh pop-up la croix taiyaki vape. La croix irony farm-to-table waistcoat same disrupt four dollar toast before they sold out fit affogato biodiesel slow-carb vegan banjo.',
          images: [{ url: 'https://sitename.com.br/img/cover.png' }],
          site_name: 'Portfólio',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@annacretelli',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default App
