import {Box,Flex,Link} from '@chakra-ui/react'
import Image from 'next/image'
import Styles from '../styles/portfolio.module.css'
import RMTC from '../public/images/logo_mini.png'
import wapply from '../public/images/WapplyLogo.png'
import Star from '../public/images/star_logo_wordmark-dark-transparent-01-300h.png'
import useBreakpoint from 'use-breakpoint'

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }

export default function Portfolio(){
    const { breakpoint, maxWidth, minWidth } = useBreakpoint(
        BREAKPOINTS,
        'desktop'
      )

    return(  
        <>
        <Box h='40px'></Box>
        <Box h='90px' align='center' fontSize='50px' fontWeight='800' className='ContactTitle' >Portfolio</Box>

        <Flex justify='center'>
            <Box
            className=""
            backgroundColor='black'
            color='white'
            m={30}
            w={900}
            borderRadius={15}
            style={{
                position: "relative"
            }}>
                 <img src={RMTC.src} alt='RMTC'
                 style={{
                    "max-width": "none",
                    width: breakpoint === "mobile" ? 60 : 120,
                    top: 20,
                    right: 25
                 }}
                 />
                
                {breakpoint == "desktop" && (
                    <>
                    </>
                )}
                { breakpoint === "mobile" && (
                    <Box h='12'/>
                )}
                 <Box p={8}  pb={0} fontSize={28} fontWeight={900}> Rate My Therapy Company</Box>
                <Box p={8} pt={0} fontSize={24} fontWeight={400}> CoFounder & Developer</Box>

                <Box pl={8} w="90%" fontSize={20} fontWeight={500} pb={10} > {/* The main content of the seciton*/}
                    <Box mb={3}> I developed a full stack application allowing therapists to rate their workplace, and make informed decisions about future employers. Currently 60+ users.</Box>
                    <Box fontWeight={700} fontSize={24} pt={8}>What I did</Box>
                    <Box mb={3}>I Integrated user authentication via encryption and flows for verifying contact info/resetting account info.</Box>
                    <Box mb={3}>I Managed and handled data from 200+ companies and accounts into a MongoDB database, creating advanced search indicies and custom filtering.
                    </Box>
                    <Box mb={3}>
                        I created and implemented client designs, following essential techniques for good UI/UX design to make the interface
                        user-centered
                    </Box>
                    <Box align='center' fontWeight={800}><Link href="https://ratemytherapycompany.com">Rate My Therapy Company Website</Link></Box>
                    
                </Box>
            </Box>
        </Flex>

        <Flex justify='center'>
            <Box
            className=""
            backgroundColor='black'
            color='white'
            m={30}
            w={900}
            borderRadius={15}
            style={{
                position: "relative"
            }}>
                 <img src={wapply.src} alt='RMTC'
                 style={{
                    "max-width": "none",
                    width: breakpoint === "mobile" ? 60 : 120,
                    top: 20,
                    right: 25
                 }}
                 />
                
                {breakpoint == "desktop" && (
                    <>
                    </>
                )}
                { breakpoint === "mobile" && (
                    <Box h='12'/>
                )}
                 <Box p={8}  pb={0} fontSize={28} fontWeight={900}> Wapply</Box>
                <Box p={8} pt={0} fontSize={24} fontWeight={400}> CoFounder & Developer</Box>
                <Box pl={10} w="90%" fontSize={20} fontWeight={500} pb={10}>
                    <Box mb={3}>Co-founded and developed Wapply, a platform connecting small business owners with entry level workers</Box>
                    <Box fontWeight={700} fontSize={24} pt={8}>What I did</Box>
                    <Box mb={3}>I managed data from 100+ companies and users using firebase</Box>
                    <Box mb={3}>I used React Native, and implemented Google Maps API to create a user-centered interface</Box>
                    <Box mb={3}>I performed interviews and pitches even acheiving a YC interview</Box>
                    <Box align='center' fontWeight={800}><Link href="https://docs.google.com/presentation/d/1405pTefAMVkOIZqXX-8bzoU1JaTg5P1ib0h_Cp_Y8us/edit?usp=sharing">Wapply Pitch Deck</Link></Box>
                </Box>
            </Box>
        </Flex>

        <Flex justify='center'>
            <Box
            className=""
            backgroundColor='black'
            color='white'
            m={30}
            w={900}
            borderRadius={15}
            style={{
                position: "relative"
            }}>
                 {/*<img src={wapply.src} alt='RMTC'
                 style={{
                    "max-width": "none",
                    width: breakpoint === "mobile" ? 60 : 120,
                    top: 20,
                    right: 25
                 }}
                 />
                */}
                {breakpoint == "desktop" && (
                    <>
                    </>
                )}
                { breakpoint === "mobile" && (
                    <Box h='12'/>
                )}
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}> Hemp Reinforced Ice Bridge Design&#40;Patented&#41;</Box>
                <Box p={8} pt={0} fontSize={20} fontWeight={400}> Inventer & Researcher</Box>
                <Box pl={10} w="90%" fontSize={20} fontWeight={500} pb={10}>
                    <Box mb={3}>I invented a method of constructing ice bridges with the aim of increasing safety and reducing construction times</Box>
                    <Box fontWeight={700} fontSize={24} pt={8}>What I did</Box>
                    <Box mb={3}>Completed Finite Element Analysis on a full scale model</Box>
                    <Box mb={3}>Currently hold a non-provisional patent for the invention</Box>
                    <Box mb={3}>This project took 2nd overall and the Arctic Kicker Prize at the UAF Arctic Innovations Competition for a total of $7,000 in prize money &#40;2021&#41;</Box>
                    <Box align='center' fontWeight={800}><Link href="https://www.youtube.com/watch?v=7zLqPS_-Fjk">Ice Bridge Design Demonstration</Link></Box>
                    <Box align='center' fontWeight={800}><Link href="https://docs.google.com/presentation/d/1r9NOiXkgEge15qZNd8lRcvrdL5WravUE/edit?usp=sharing&ouid=118032405795730658512&rtpof=true&sd=true">Ice Bridge Design Presentation</Link></Box>

                    </Box>
            </Box>
        </Flex>

        <Flex justify='center'>
            <Box
            className=""
            backgroundColor='black'
            color='white'
            m={30}
            w={900}
            borderRadius={15}
            style={{
                position: "relative"
            }}>
                 <img src={Star.src} alt='RMTC'
                 style={{
                    "max-width": "none",
                    width: breakpoint === "mobile" ? 60 : 180,
                    top: 20,
                    right: 25
                 }}
                 />
                
                {breakpoint == "desktop" && (
                    <>
                    </>
                )}
                { breakpoint === "mobile" && (
                    <Box h='12'/>
                )}
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}> Space Tech and Rocketry&#40;STAR&#41;</Box>
                <Box p={8} pt={0} fontSize={20} fontWeight={400}> Project Member/Airframe Design</Box>
                <Box pl={10} w="90%" fontSize={20} fontWeight={500} pb={10}>
                    <Box mb={3}>I was a project team member of Alula our liquid engine Rocketry</Box>
                    <Box fontWeight={700} fontSize={24} pt={8}>What I did</Box>
                    <Box mb={3}>Designed a holding mechanism for the ethanol and liquid oxygen take on the Alula team at star.</Box>
                    <Box mb={3}>Constructed a holding mechanism for testing the liquid engine</Box>
                    <Box align='center' fontWeight={800}><Link href="https://stars.berkeley.edu/alula.html">Alula Project Team Website</Link></Box>
                    </Box>
            </Box>
        </Flex>
        </>
    )
}