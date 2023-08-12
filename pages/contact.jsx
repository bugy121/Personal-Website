import {Box,Flex,Spacer} from '@chakra-ui/react'
import Image from 'next/Image'
import Styles from '../styles/contact.module.css'
import useBreakpoint from 'use-breakpoint'

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }

export default function contact(){
    const { breakpoint, maxWidth, minWidth } = useBreakpoint(
        BREAKPOINTS,
        'desktop'
      )

    return(
        <>
        <Box className={Styles.frontText} paddingTop='30px' align='center' fontSize='50px' fontWeight='800' >Contact</Box>
        <Box justify-content='center' justifyContent='center' className={Styles.imageContainer} w='400px' h='400px'>
            <Image justify-content='center' src='/images/LukeNoBackground.png' layout='fill' alt=''/>
        </Box>
        
        
        </>
    )
}