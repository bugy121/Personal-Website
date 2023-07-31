import Head from 'next/head'
import NavBar from '../components/NavBar.jsx'

export default function App({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
        <Head>
          <title>Luke Millam</title>
        </Head>
        <div>
          <NavBar />
        </div>
      </>
    )
  }