import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
        <Head>
          <title>Luke Millam</title>
        </Head>
      </>
    )
  }