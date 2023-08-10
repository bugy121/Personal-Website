import {Box,Flex} from '@chakra-ui/react'
import Image from 'next/Image'
import Styles from '../styles/contact.module.css'

export default function workExperience(){
    return(
        <>
        <Box h='40px'></Box>
        <Box h='90px' align='center' fontSize='50px' fontWeight='800' className='ContactTitle' >Work Experience</Box>

        <Flex direction='row'>
        <Image src='/images/intel-Logo.png' width='400' height='400' alt=''/>
        <Flex direction='column'>
        <Box className={Styles.title}>Intel</Box>
        <Box mt='10px' fontSize='20px'>cool stuff</Box>
        <Box mt='10px' fontSize='20px'>See Pitch Deck</Box>
        </Flex>
        </Flex>

        <Flex direction='row'>
        <Image src='/images/intel-Logo.png' width='400' height='400' alt=''/>
        <Flex direction='column'>
        <Box className={Styles.title}>Intel</Box>
        <Box mt='10px' fontSize='20px'>cool stuff</Box>
        <Box mt='10px' fontSize='20px'>See Pitch Deck</Box>
        </Flex>
        </Flex>

        <Flex direction='row'>
        <Image src='/images/WapplyLogo.png' width='400' height='400' alt=''/>
        <Flex direction='column'>
        <Box className={Styles.title}>Intel</Box>
        <Box mt='10px' fontSize='20px'>cool stuff</Box>
        <Box mt='10px' fontSize='20px'>See Pitch Deck</Box>
        </Flex>
        </Flex>
        </>
    )
}