import Link from 'next/link'
import FadeIn from 'react-fade-in/lib/FadeIn'
import {Flex, Text, Box, Spacer} from '@chakra-ui/react'
import Styles from '../styles/navBar.module.css'

export default function NavBar() {
    return (
        <>
        <Box h='10vh' bg='#000000'></Box>
        <Flex className={Styles.navText} h='75px' pt='15' m='0' w='100vw' color='white' alignItems='center' justify='center'>
        <FadeIn>
            <Flex className={Styles.mainInfoBoxLarge} mb='18px' fontSize='17px' fontWeight='500'>
                <Box m='10' ml='0px' mr='30px'><Link className={Styles.navLink} href='/'>Home</Link></Box>
                <Box m='10' ml='30px' mr='30px'><Link className={Styles.navLink} href='/portfolio'>Portfolio</Link></Box>
                <Box m='10' ml='30px' mr='30px'><Link className={Styles.navLink} href='/workExperience'>Work&nbsp;Experience</Link></Box>
                <Box m='10' ml='30px' mr='30px' ><Link className={Styles.navLink} href='/extracurriculars'>Extracurriculars</Link></Box>
                <Box m='10' ml='30px' mr='0px'><Link className={Styles.navLink} href='/contact'>Contact</Link></Box>
            </Flex>
        </FadeIn>
        </Flex>
        
        
        </>
    )
}
