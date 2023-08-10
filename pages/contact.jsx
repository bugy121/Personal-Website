import {Box,Flex,Spacer} from '@chakra-ui/react'
import Image from 'next/Image'
import Styles from '../styles/contact.module.css'

export default function contact(){
    return(
        <>
        <Box justify-content='center' justifyContent='center' className={Styles.imageContainer} w='400px' h='600px'>
            <Image justify-content='center' src='/images/LukeNoBackground.png' layout='fill' alt=''/>
        </Box>
        <Box className={Styles.frontText} paddingTop='30px' align='center' fontSize='50px' fontWeight='800' z-index='2'>Contact</Box>
        
        </>
    )
}