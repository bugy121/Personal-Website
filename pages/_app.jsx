import '../styles/navBar.module.css'
import Head from 'next/head'
import NavBar from '../Components/NavBar.jsx'

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
          <title>Luke Millam</title>
        </Head>
        <div>
          <NavBar />
          <Component {...pageProps} />
        </div>
      </>
    )
  }