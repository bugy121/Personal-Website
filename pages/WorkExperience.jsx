import {Box,Flex} from '@chakra-ui/react'
import Image from 'next/image'
import Styles from '../styles/contact.module.css'
import Intel from '../public/images/Intel-Logo.png'
import Truss from '../public/images/IMG_1431.PNG'
import useBreakpoint from 'use-breakpoint'

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }

export default function WorkExperience(){
    const { breakpoint, maxWidth, minWidth } = useBreakpoint(
        BREAKPOINTS,
        'desktop'
      )

    return(
        <>
        <Box h='40px'></Box>
        <Box h='90px' align='center' fontSize='50px' fontWeight='800' className='ContactTitle' >Work Experience</Box>

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
                 <img src={Intel.src} alt='RMTC'
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
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}>Intel &#40;Fall 2023&#41;</Box>
                <Box p={8} pt={0} fontSize={20} fontWeight={800}>Software Developer &#40;Strategic Planning&#41;</Box>
                <Box pl={8} w="90%" fontSize={20} fontWeight={500} pb={10}>
                <Box >Transfered Positions to the Strategic Planning department to work on software solutions</Box>
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
                 <img src={Intel.src} alt='RMTC'
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
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}>Intel &#40;Summer 2023&#41;</Box>
                <Box pl={8} w="90%" fontSize={20} fontWeight={500} pb={10}>
                <Box mb = {8} fontWeight={900}>Process Engineer &#40;Dry Etch Department&#41;</Box>
                    <Box mb={8}>I qualified tools through various testing, and relating data to reference tools. These qualifications brought production to Intels current goal.</Box>
                    <Box mb={8}>I flagged tools and participated in their uninstallation resulting in $16 million saved this year</Box>
                    <Box mb={8}>Created an ergonomic solution to install O-rings using solidworks and 3d printing</Box>
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
                 <img src={Truss.src} alt='RMTC'
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
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}>Fairbanks Truss Company &#40;Summer 2021&#41;</Box>
                 <Box pl={8} w="90%" fontSize={20} fontWeight={500} pb={10}>
                <Box mb = {8} fontWeight={900}>Construction Worker</Box>
                    <Box mb={8}>Developed hands on construction experience</Box>
                    <Box mb={8}>Opereated heavy machinery as well as large vehicles</Box>
                </Box>
            </Box>
        </Flex>
        </>
    )
}