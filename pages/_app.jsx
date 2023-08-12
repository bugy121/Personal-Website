import '../styles/navBar.module.css'
import Head from 'next/head'
import NavBar from '../Components/NavBar.jsx'


export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <div>
          <NavBar />
          <Component {...pageProps} />
          
        </div>
        <Head>
          <title>Luke Millam</title>
        </Head>
        
        
      </>
    )
  }