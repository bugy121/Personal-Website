import Link from 'next/link'
import FadeIn from 'react-fade-in/lib/FadeIn'
import {Flex, Text, Box, Spacer, Checkbox, CheckboxGroup, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import Styles from '../styles/navBar.module.css'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter()

    const GoTo = (link) => {
        console.log('in the goto function', link)
        router.push(link)
      }

    return (
        <>
        <Box h='10vh' bg='#000000'></Box>
        <Flex className={Styles.navText} h='75px' pt='15' m='0' w='100vw' color='white' alignItems='center' justify='center'>
        <FadeIn>
            <Flex className={Styles.mainInfoBoxLarge} mb='18px' fontSize='17px' fontWeight='500'>
                <Box m='10' ml='0px' mr='30px' className={Styles["grow-on-hover"]}><Link className={Styles.navLink} href='/'>Home</Link></Box>
                <Box m='10' ml='30px' mr='30px' className={Styles["grow-on-hover"]}><Link className={Styles.navLink} href='/portfolio'>Portfolio</Link></Box>
                <Box m='10' ml='30px' mr='30px' className={Styles["grow-on-hover"]}><Link href='/workExperience' className={Styles.navLink}>Work&nbsp;Experience</Link></Box>
                <Box m='10' ml='30px' mr='0px' className={Styles["grow-on-hover"]}><Link className={Styles.navLink} href='/contact'>Contact</Link></Box>
            </Flex>
        </FadeIn>

        <FadeIn>
            <Box className={Styles.mainInfoBoxSmall}>
                <Menu>
                <MenuButton className={Styles["grow-on-hover"]} mb='17px' border='0px' fontSize='20px' bg='#000000' pb='3px' borderRadius='5px' fontWeight='900' color='white'><HamburgerIcon/></MenuButton>
                <MenuList bg='#000000'>
                    <MenuItem bg='#000000' className={Styles.menuItem} onClick={() => GoTo('/')} >
                        <Box m='10' ml='15px' mr='15px'><Link className={Styles.navLink} href='/'>Home</Link></Box>
                    </MenuItem>
                    <MenuItem bg='#000000' className={Styles.menuItem} onClick={() => GoTo('/portfolio')} >
                        <Box m='10' ml='15px' mr='15px'><Link className={Styles.navLink} href='/portfolio'>Portfolio</Link></Box>
                    </MenuItem>
                    <MenuItem bg='#000000'className={Styles.menuItem} onClick={() => GoTo('/workExperience')} >
                        <Box m='10' ml='15px' mr='15px'><Link className={Styles.navLink} href='/workExperience'>Work Experience</Link></Box>
                    </MenuItem>
                    <MenuItem bg='#000000' className={Styles.menuItem} onClick={() => GoTo('/contact')} >
                        <Box m='10' ml='15px' mr='15px'><Link className={Styles.navLink} href='/contact'>Contact</Link></Box>
                    </MenuItem>
                </MenuList>
                </Menu>
            </Box>
        </FadeIn>
        </Flex>
        
        </>
    )
}
