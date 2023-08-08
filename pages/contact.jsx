import {Box,Flex,Spacer} from '@chakra-ui/react'
import Image from 'next/Image'
import Styles from '../styles/contact.module.css'

export default function contact(){
    return(
        <>
        <Box justify-content='center' alignItems='center'>
            <Image justify-content='center' className={Styles.backgroundImage} src='/images/LukeNoBackground.png' width='400' height='600' alt=''/>
        </Box>
        <Box className={Styles.frontText} paddingTop='30px' align='center' fontSize='50px' fontWeight='800' z-inderx='2'>Contact</Box>
        
        </>
    )
}