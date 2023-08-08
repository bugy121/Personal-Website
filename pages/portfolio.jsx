import {Box,Flex} from '@chakra-ui/react'
import Image from 'next/Image'

export default function portfolio(){
    return(
        <>
        <Box h='40px'></Box>
        <Box h='90px' align='center' fontSize='50px' fontWeight='800' className='ContactTitle' >Portfolio</Box>
        <Flex direction='column'>
        <Image src='/images/WapplyLogo.png' width='400' height='400' alt=''/>
            
                <Box>Wapply</Box>
                <Box>cool stuff</Box>
            
        </Flex>
        <Flex direction='column'>
            <Image src='/images/logo_mini.png' width='400' height='400'></Image>
            <Box>Rate My Therapy Company</Box>
        </Flex>
        </>
    )
}