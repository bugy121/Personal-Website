import {Box,Flex,Link} from '@chakra-ui/react'
import Image from 'next/image'
import Styles from '../styles/portfolio.module.css'
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
        <Box h={breakpoint == "desktop" || breakpoint == "tablet" ? '10px' : '70px'}></Box>
        <Box className={Styles.frontText} h='90px' color = 'black' align='center' fontSize='50px' fontWeight='800'>Portfolio</Box>

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
                <Box p={8}  pb={0} fontSize={24} fontWeight={900}> Nutanix</Box>
                <Box p={8} pt={0} fontSize={20} fontWeight={400}> Project Consultant</Box>
                <Box pl={10} w="90%" fontSize={20} fontWeight={500} pb={10}>
                    <Box fontWeight={700} fontSize={24} pt={8}>What I did</Box>
                    <Box mb={3}>Conducted interviews of database developers to understand current needs and connect companies with Nutanix’s DBMS, resulting in 5 potential clients</Box>
                    <Box mb={3}>Presented a market strategy, based on interview responses, recommending specific companies and sectors most in need of Nutanix’s DBMS</Box>
                    
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
            className="boxShadow"
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
                    width: breakpoint === "mobile" ? 100 : 180,
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
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}> Space Tech and Rocketry&#40;STAR&#41;</Box>
                <Box p={8} pt={0} fontSize={20} fontWeight={400}> Project Mentor</Box>
                <Box pl={10} w="90%" fontSize={20} fontWeight={500} pb={10}>
                    <Box mb={3}>Member of Alula our liquid engine rocket</Box>
                    <Box fontWeight={700} fontSize={24} pt={8}>What I did</Box>
                    <Box mb={3}>Designed an elastic tank mount, in SolidWorks, capable of holding a liquid oxygen tank that expands during flight, by using a method of preloading and an elastic material with great thermal conductivity</Box>
                    <Box mb={3}>Constructed a holding mechanism for testing the liquid engine</Box>
                    <Box mb={3}>Designed and implemented method of containing the rocket parts before being inserted into the frame, allowing for the rocket parts to be easily inserted before launch</Box>
                    <Box mb={3}>Led group of students to complete intro projects and fully integrate them within the club</Box>
                    <Box align='center' fontWeight={800}><Link href="https://stars.berkeley.edu/alula.html">Alula Project Team Website</Link></Box>
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
                 
                {breakpoint == "desktop" && (
                    <>
                    </>
                )}
                { breakpoint === "mobile" && (
                    <Box h='12'/>
                )}
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}>Pet Feeder</Box>
                <Box pl={10} w="90%" fontSize={20} fontWeight={500} pb={10}>
                    <Box fontWeight={700} fontSize={24} pt={8}>What I did</Box>
                    <Box mb={3}> Created a circuit board utilizing an ESP 32 and Thonny IDE to create a pet feeder that automatically feeds pet, while keeping track of whether there is food available and how much the pet has eaten</Box>
                    <Box mb={3}>Created an MQTT signal that notifies user when the pet has eaten, how much the pet has eaten, and if there is no more available food within the feeder</Box>
                    <Box align='center' fontWeight={800}><Link href="https://youtu.be/x5bXShz52nY">Video</Link></Box>
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
                 
                {breakpoint == "desktop" && (
                    <>
                    </>
                )}
                { breakpoint === "mobile" && (
                    <Box h='12'/>
                )}
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}>Tic Tac Toe</Box>
                <Box pl={10} w="90%" fontSize={20} fontWeight={500} pb={10}>
                    <Box fontWeight={700} fontSize={24} pt={8}>What I did</Box>
                    <Box mb={3}> Created a circuit board utilizing an ESP 32 and Thonny IDE to create a tic tac toe game that lights up LED lights to show the board, and allows you to play against a computer that isn’t capable of losing.</Box>
                    <Box mb={3}>Created a mobile environment utilizing MQTT for IOT messaging and an MQTT broker that allows someone to play on the phone environment against someone playing on the circuit board attached to the ESP 32.</Box>
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
                
                {breakpoint == "desktop" && (
                    <>
                    </>
                )}
                { breakpoint === "mobile" && (
                    <Box h='12'/>
                )}
                 <Box p={8}  pb={0} fontSize={24} fontWeight={900}> Weather App</Box>
                <Box pl={10} w="90%" fontSize={20} fontWeight={500} pb={10}>
                    <Box fontWeight={700} fontSize={24} pt={8}>What I did</Box>
                    <Box mb={3}>Developed an application in React Native to show the weather using OpenWeather API to fetch temperature and other weather characteristics</Box>
                    <Box mb={3}>Created a dynamic interface that changes style elements based on the characteristics of the weather shown.</Box>
                    <Box align='center' fontWeight={800}><Link href="https://github.com/bugy121/weatherApp">Repository Link</Link></Box>
                    </Box>
            </Box>
        </Flex>
        </>
    )
}