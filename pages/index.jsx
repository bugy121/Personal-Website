import Head from 'next/head'
import {Component} from 'react'
import {Box,Flex} from '@chakra-ui/react'
import FadeIn from "react-fade-in/lib/FadeIn"
import useBreakpoint from 'use-breakpoint'
import headShot from '../public/images/IMG_1019.JPG'
import { useAnimate } from "framer-motion"
import BounceInSide from "../components/animation/bouncein"
//import headShot from 'IMG_1019.JPG'
//import ParticleAnimation from 'react-particle-animation'
const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }

export default function Home() {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    BREAKPOINTS,
    'desktop'
  )

    return (
      <>
        <Box h={breakpoint == "desktop" || breakpoint == "tablet" ? 70 : 10}/>
        
        <Flex justify="center" pr={breakpoint=="desktop"? 150 : null}>
            <Box w={50}></Box>

            <Flex justify="center" position="relative"> {/* Center section on the top page */}

            <Box w={90}></Box>
              

              <Box w={8}/>

              <Box>
                <FadeIn>
                <Box
                  color='white' 
                  fontSize={22}
                  fontWeight={400}
                >
                  Hello, I{"'"}m
                </Box>
                <Box
                  color='white'
                  fontSize={50}
                  fontWeight={600}
                  lineHeight={"55px"}
                >
                  Luke Millam
                </Box>

                <Box 
                  color='white'
                  fontSize={25}
                  fontWeight={400}
                >
                  Berkeley {"'"}25 • Software Engineer
                </Box>
                
                <a
                  href="https://drive.google.com/file/d/1EeO48wejmXt3zZfhUQwFFtNyozV-pqE-/view"
                  target="_blank"
                >
                  <Box
                    display="inline-block"
                    backgroundColor="black"
                    color="white"
                    padding="10px 20px 10px 20px"
                    fontWeight={500}
                    borderRadius={10}
                    margin="10px 0px 10px 0px"
                  >
                     View My Resume
                  </Box>
                </a>
                <Box
                  color='white'
                  w="70%"
                  fontWeight={500}
                  fontSize={20}
                >
                  Full Stack Development • React.js • React Native • Python • NoSQL • Startup Experience • Engineering
                </Box> 
                </FadeIn>
              </Box>
            </Flex>

            { breakpoint === "desktop" && (
            <BounceInSide viewThreshold={0.4} startX={-400} duration={2}>
            <Box
              
              backgroundColor="gray.300"
              borderRadius={10}
              ml="25px"
              h={350}
              w={350}
              style={{
                position: "relative !important",
                bottom: 40,
                "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                "max-width": "none",
              }}
            >
              <img src={headShot.src}
                style={{
                  width:"350px",
                  borderRadius:"10px",
                  zIndex: "2",
                  "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  "max-width": "none",
                }}
              />
            </Box>
            </BounceInSide>
            )}

        </Flex>

      </> 
      
    )
  }