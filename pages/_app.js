import '../styles/navBar.module.css'
import Head from 'next/head'
import NavBar from '../Components/NavBar.jsx'

export default function MyApp({ Component, pageProps }) {
    return (
      <>
     <Component {...pageProps} />
        <Head>
          <title>Luke Millam</title>
        </Head>
        <h1>Luke Millam</h1>
        <div>
          <NavBar />
        </div>
      </>
    )
  }