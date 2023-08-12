import {Box,Flex} from '@chakra-ui/react'
import Image from 'next/Image'
import Styles from '../styles/portfolio.module.css'
import RMTC from '../public/images/logo_mini.png'
import wapply from '../public/images/WapplyLogo.png'
import useBreakpoint from 'use-breakpoint'

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }

export default function portfolio(){
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

                <Box pl={10} w="90%" fontSize={20} fontWeight={500} pb={10}> {/* The main content of the seciton*/}
                    <Box mb={3}> Cofounded and developed Rate My Therapy Company, a platform designed to allow therapists to review their employers. Currently 60+ users.</Box>
                    <Box fontWeight={700} fontSize={24} pt={8}>What I did</Box>
                    <Box mb={3} pt={7}>Handled complete user login / signup flow, including secure authentication via encryption and flows for verifying contact information and resetting accoutn information via automated email.</Box>
                    <Box mb={3} pt={7}>Managed and handled data from 200+ companies and accounts into a NoSQL MongoDB database. Made use of advanced search indices, pagination, and custom filtering to deliver this data via endpoints
                        to users.
                    </Box>
                    <Box mb={3} pt={7}>
                        Created and implemented client designs, following essential techniques for good UI/UX design to make the experience
                        user-centered
                    </Box>
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
                    <Box mb={3} pt={7}>I managed data from 100+ companies and users using firebase</Box>
                    <Box mb={3} pt={7}>I used React Native, and implemented Google Maps API to create a user-centered interface</Box>
                    <Box mb={3} pt={7}>I performed interviews and pitches even acheiving a YC interview</Box>
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
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}> Hemp Reinforced Ice Bridge Design&#40;Patented&#41;</Box>
                <Box p={8} pt={0} fontSize={20} fontWeight={400}> Inventer & Researcher</Box>
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
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}> Space Tech and Rocketry&#40;STAR&#41;</Box>
                <Box p={8} pt={0} fontSize={20} fontWeight={400}> Project Member/Airframe Design</Box>
            </Box>
        </Flex>
        </>
    )
}