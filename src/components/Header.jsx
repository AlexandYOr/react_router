import {
    Box,
    Link as ChakraLink,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Menu from './Menu'


export default function Header() {
    
    return (
        <Box position='sticky' display='flex' justifyContent='space-between' bg='#322659' w='100%' p={4} color='white'>
            <ChakraLink as={Link} to='/' fontSize='2xl' color='#F6F4FB'>React Router</ChakraLink>
            <Menu/>
        </Box>
    )
}

