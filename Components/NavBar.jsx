import Link from 'next/link'
import FadeIn from 'react-fade-in/lib/FadeIn'
import {Flex, Text, Box, Spacer} from '@chakra-ui/react'

export default function NavBar() {
    return (
        <>
        <Box h='7vh' bg='#000000'></Box>
        <FadeIn>
            <Flex mb='18px' fontSize='17px' fontWeight='500'>
                <Box m='10' ml='0px' mr='15px'><Link className='navLink' href='/'>Home</Link></Box>
                <Box m='10' ml='15px' mr='15px'><Link className='navLink' href='/portfolio'>Portfolio</Link></Box>
                <Box m='10' ml='15px' mr='15px'><Link className='navLink' href='/workExperience'>Work&nbsp;Experience</Link></Box>
                <Box m='10' ml='15px' mr='15px' w='103px'><Link className='navLink' href='/extracurriculars'>extracurriculars</Link></Box>
                <Box m='10' ml='15px' mr='15px'><Link className='navLink' href='/contact'>Contact</Link></Box>
            </Flex>
        </FadeIn>
        </>
    )
}
