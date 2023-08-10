import {Box,Flex} from '@chakra-ui/react'
import Image from 'next/Image'
import Styles from '../styles/portfolio.module.css'

export default function portfolio(){
    return(
        <>
        <Box h='40px'></Box>
        <Box h='90px' align='center' fontSize='50px' fontWeight='800' className='ContactTitle' >Portfolio</Box>
        <Flex direction='row'>
        <Image src='/images/WapplyLogo.png' width='400' height='400' alt=''/>
        <Flex direction='column'>
        <Box className={Styles.title}>Wapply</Box>
        <Box mt='10px' fontSize='20px'>cool stuff</Box>
        <Box mt='10px' fontSize='20px'>See Pitch Deck</Box>
        </Flex>
        </Flex>
        
        <Flex direction='row'>
            <Image src='/images/logo_mini.png' width='400' height='400'></Image>
            <Flex direction='column'>
            <Box className={Styles.title}>Rate My Therapy Company</Box>
            <Box mt='10px' fontSize='20px'>yuh</Box>
            <Box mt='10px' fontSize='20px'>Visit Website</Box>
            </Flex>
        </Flex>

        <Flex direction='row'>
            <Image src='/images/logo_mini.png' width='400' height='400'></Image>
            <Flex direction='column'>
            <Box className={Styles.title}>Hemp Reinforced Ice Bridge Design&#40;Patented&#41;</Box>
            <Box mt='10px' fontSize='20px'>yuh</Box>
            <Box mt='10px' fontSize='20px'>Link to Presentation</Box>
            </Flex>
        </Flex>

        <Flex direction='row'>
            <Image src='/images/logo_mini.png' width='400' height='400'></Image>
            <Flex direction='column'>
            <Box className={Styles.title}>Space Tech and Rocketry&#40;STAR&#41;</Box>
            <Box mt='10px' fontSize='20px'>yuh</Box>
            <Box mt='10px' fontSize='20px'>Link for full rocket</Box>
            </Flex>
        </Flex>
        </>
    )
}