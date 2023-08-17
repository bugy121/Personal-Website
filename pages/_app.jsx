import '../styles/app.css'
import "../styles/boxShadow.css"
import Head from 'next/head'
import NavBar from '../components/NavBar.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import Particle from '../components/particles.jsx'
import {Analytics} from '@vercel/analytics/react'


export default function MyApp({ Component, pageProps }) {
    return (
      <ChakraProvider>
          <Particle/>
          <NavBar/>
          <Component {...pageProps} />
          
        <Head>
          <title>Luke Millam</title>
        </Head>
        <Analytics/>
      </ChakraProvider>
    )
  }