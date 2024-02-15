import {
    Box,
    Button,
    Link as ChakraLink,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerHeader,
    DrawerContent,
    DrawerBody,
    Grid
} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'



export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box position='sticky' display='flex' justifyContent='space-between' bg='#322659' w='100%' p={4} color='white'>
            <ChakraLink as={ReactRouterLink} to='/' fontSize='2xl' color='#F6F4FB'>React Router</ChakraLink>
            <Button bg={'#1A263D'} colorScheme='blue' onClick={onOpen}>
                Menu
            </Button>
            <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
                    <DrawerBody>
                        <Grid>
                        <ChakraLink as={ReactRouterLink} to='/contact'>Contacts</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to='/about'>About</ChakraLink>
                        </Grid>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

