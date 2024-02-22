import {Box,Flex,Link} from '@chakra-ui/react'
import Image from 'next/image'
import RMTC from '../public/images/logo_mini.png'
import wapply from '../public/images/WapplyLogo.png'
import Styles from '../styles/portfolio.module.css'
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
        <Box h={breakpoint == "desktop" || breakpoint == "tablet" ? '10px' : '70px'}></Box>
        <Box color='black' h='90px' align='center' fontSize='50px' fontWeight='800' className={Styles.frontText} >Work Experience</Box>
        <Box h={breakpoint == "desktop" || breakpoint == "tablet" ? '10px' : '70px'}></Box>

        <Flex justify='center'>
            <Box
            className="boxShadow"
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
                    width: breakpoint === "mobile" ? 60 : 100,
                    position: "absolute",
                    top: 20,
                    right: 25
                 }}
                 />
                
                {breakpoint == "desktop" && (
                    <>
                    </>
                )}
                
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}>Intel &#40;Aug 2023 - Present&#41;</Box>
                <Box p={8} pt={0} fontSize={20} fontWeight={800}>Software Developer &#40;Strategic Planning&#41;</Box>
                <Box pl={8} w="90%" fontSize={20} fontWeight={500} pb={10}>
                <Box mb={8}>Presented data models to business executives by utilizing Jupyter Notebook, Pandas and PowerPoint, successfully demonstrating best course of action</Box>
                <Box mb={8}>Documented the use of data analysis and KNN implementation used in initial project with the hope of being used by other teams</Box>
                <Box>Currently working with MSOAI to create a UI solution within internal website to simplify inputting data into SQL database, Utilizing jQuery and Node, and update the MSOAI internal website to have the most up to date information regarding AI uses at Intel</Box>
                <Box mb={8}></Box>
                </Box>
            </Box>
        </Flex>

        <Flex justify='center'>
            <Box
            className="boxShadow"
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
                    width: breakpoint === "mobile" ? 60 : 100,
                    position: "absolute",
                    top: 20,
                    right: 25
                 }}
                 />
                
                {breakpoint == "desktop" && (
                    <>
                    </>
                )}
                { breakpoint === "mobile" && (
                    <Box h='24'/>
                )}
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}>Intel &#40;Jun 2023 - Aug 2023&#41;</Box>
                <Box pl={8} w="90%" fontSize={20} fontWeight={500} pb={10}>
                <Box mb = {8} fontWeight={900}>Process Engineer &#40;Dry Etch Department&#41;</Box>
                    <Box mb={8}>Pulled data from SQL database and analyzed data within JMP to create reports necessary to address errors and complete the tool qualification process</Box>
                    <Box mb={8}>Performed tool qualifications on a certain entity by running various tests within the tool interfaces (GUI) resulting in tool being brought up to productio</Box>
                    <Box mb={8}>Flagged tools for uninstallation by running tests in GUI, looking for wafer defects, analyzing data within JMP, creating presentation to display the data, and participating in uninstalling two tools resulting in minor decrease in production capabilities, but a total cost reduction of approximately $1,000,000 annually </Box>
                    <Box mb={8}>Reduced ergonomic constraints during scheduled maintenance cycles by designing a device to push in O-rings</Box>
                </Box>
                
            </Box>
        </Flex>

        <Flex justify='center'>
            <Box
            className="boxShadow"
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
                    position: "absolute",
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
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}> Rate My Therapy Company &#40;Aug 2022 - Present&#41;</Box>
                <Box p={8} pt={0} fontSize={20} fontWeight={400}> CoFounder & Developer</Box>

                <Box pl={8} w="90%" fontSize={20} fontWeight={500} pb={10} > {/* The main content of the seciton*/}
                    <Box mb={3}>Developed a full stack application allowing therapists to rate their workplace, and make informed decisions about future employers. Currently 60+ users.</Box>
                    <Box fontWeight={700} fontSize={24} pt={8}>What I did</Box>
                    <Box mb={3}>Integrated user authentication via encryption and flows for verifying contact info/resetting account info.</Box>
                    <Box mb={3}>Managed and handled data from 200+ companies and accounts into a MongoDB database, creating advanced search indicies and custom filtering.
                    </Box>
                    <Box mb={3}>
                        Created and implemented client designs, following essential techniques for good UI/UX design to make the interface
                        user-centered
                    </Box>
                    <Box align='center' fontWeight={800}><Link href="https://ratemytherapycompany.com">Rate My Therapy Company Website</Link></Box>
                    
                </Box>
            </Box>
        </Flex>

        <Flex justify='center'>
            <Box
            className="boxShadow"
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
                    width: breakpoint === "mobile" ? 60 : 100,
                    position: "absolute",
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
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}> Wapply &#40;Sep 2021 - May 2022&#41;</Box>
                <Box p={8} pt={0} fontSize={20} fontWeight={400}> CoFounder & Developer</Box>
                <Box pl={10} w="90%" fontSize={20} fontWeight={500} pb={10}>
                    <Box mb={3}>Co-founded and developed Wapply, a platform connecting small business owners with entry level workers</Box>
                    <Box fontWeight={700} fontSize={24} pt={8}>What I did</Box>
                    <Box mb={3}>Managed data from 100+ companies and users using firebase</Box>
                    <Box mb={3}>Used React Native, and implemented Google Maps API to create a user-centered interface</Box>
                    <Box mb={3}>Performed interviews and pitches even acheiving a YC interview</Box>
                    <Box align='center' fontWeight={800}><Link href="https://docs.google.com/presentation/d/1405pTefAMVkOIZqXX-8bzoU1JaTg5P1ib0h_Cp_Y8us/edit?usp=sharing">Wapply Pitch Deck</Link></Box>
                </Box>
            </Box>
        </Flex>

        <Flex justify='center'>
            <Box
            className="boxShadow"
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
                    position: "absolute",
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