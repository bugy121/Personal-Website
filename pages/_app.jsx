import '../styles/app.css'
import Head from 'next/head'
import NavBar from '../Components/NavBar.jsx'
import { ChakraProvider } from '@chakra-ui/react'


export default function MyApp({ Component, pageProps }) {
    return (
      <ChakraProvider>
          <NavBar/>
          <Component {...pageProps} />
          
        <Head>
          <title>Luke Millam</title>
        </Head>
        
      </ChakraProvider>
    )
  }