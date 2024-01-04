import {Box,Flex,Spacer,Link} from '@chakra-ui/react'
import Image from 'next/image'
import Styles from '../styles/contact.module.css'
import useBreakpoint from 'use-breakpoint'
import {EnvelopeAtFill, Instagram, Twitter, Facebook, Linkedin, Github} from 'react-bootstrap-icons';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }

export default function Contact(){
    const { breakpoint, maxWidth, minWidth } = useBreakpoint(
        BREAKPOINTS,
        'desktop'
      )

    return(
        <>
        <Box color='black' className={Styles.frontText} paddingTop={breakpoint == "desktop" || breakpoint == "tablet" ? '30px' : '70px'} align='center' fontSize='50px' fontWeight='800' >Contact</Box>
        {breakpoint == "desktop" && (
            <>
                <Flex mt='10px' justify='center' >
                <Flex align-items='center' direction='column' > 
                    <Box direction='row' h='55px' fontSize='20px' mb='30px' color='white' fontWeight='800' className={Styles["grow-on-hover"]}><EnvelopeAtFill color='black' fontSize = '60px' className={Styles.contactIcon}/> </Box>
                    <Box direction='row' h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><Github fontSize = '60px' className={Styles.contactIcon}/> </Box>
                    <Box h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><Linkedin fontSize = '60px' className={Styles.contactIcon}/> </Box>
                    <Box h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><Instagram fontSize = '60px' className={Styles.contactIcon}/> </Box>
                </Flex>
                <Flex align-items='center' direction='column' > 
                <Box h='15px'></Box>
                <Box h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><a color='black' className={Styles.link} href='mailto:luke.millam@gmail.com'>luke.millam@gmail.com</a></Box>
                <Box h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><Link color='black' className={Styles.link} target='_blank' href='https://github.com/bugy121' style={{textDecoration: 'none'}}>@bugy121</Link></Box>
                <Box h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><Link color='black' className={Styles.link} target='_blank' href='https://www.linkedin.com/in/luke-millam-877882225/' style={{textDecoration: 'none'}}>Luke Millam</Link></Box>
                <Box h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><Link color='black' className={Styles.link} target='_blank' href='https://www.instagram.com/scubamillam' style={{textDecoration: 'none'}}>@scubamillam</Link></Box>
                </Flex>
            </Flex>
            </>
        )}
        {breakpoint == "mobile" && (
            <>
                <Flex mt='10px' justify='center'>
                <Flex align-items='center' direction='column' > 
                    <Box direction='row' h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><EnvelopeAtFill color='black' fontSize = '60px' className={Styles.contactIcon}/> </Box>
                    <Box direction='row' h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><Github fontSize = '60px' className={Styles.contactIcon}/> </Box>
                    <Box h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><Linkedin fontSize = '60px' className={Styles.contactIcon}/> </Box>
                    <Box h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><Instagram fontSize = '60px' className={Styles.contactIcon}/> </Box>
                </Flex>
                <Flex align-items='center' direction='column' > 
                <Box h='15px'></Box>
                <Box h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><a color='black' className={Styles.link} href='mailto:luke.millam@gmail.com'>luke.millam@gmail.com</a></Box>
                <Box h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><Link color='black' className={Styles.link} target='_blank' href='https://github.com/bugy121' style={{textDecoration: 'none'}}>@bugy121</Link></Box>
                <Box h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><Link color='black' className={Styles.link} target='_blank' href='https://www.linkedin.com/in/luke-millam-877882225/' style={{textDecoration: 'none'}}>Luke Millam</Link></Box>
                <Box h='55px' fontSize='20px' mb='30px' color='black' fontWeight='800' className={Styles["grow-on-hover"]}><Link color='black' className={Styles.link} target='_blank' href='https://www.instagram.com/scubamillam' style={{textDecoration: 'none'}}>@scubamillam</Link></Box>
                </Flex>
            </Flex>
            </>
        )}
        
        
        
        </>
    )
}