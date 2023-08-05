import {Box,Flex,Spacer} from '@chakra-ui/react'
import Image from 'next/image'

export default function contact(){
    return(
        <>
        <Box h='40px'></Box>
        <Box h='90px' align='center' fontSize='50px' fontWeight='800' className='ContactTitle' >Contact</Box>
        <Box align = 'center'>
            <Image src='/images/LukeNoBackground.png' width = '300' height = '400' alt=''/>
        </Box>
        </>
    )
}