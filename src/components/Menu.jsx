import {
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
import { Link } from 'react-router-dom'


export default function Menu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <>
        <Button bg={'#1A263D'} colorScheme='blue' onClick={onOpen}>
            Menu
        </Button>
        <Drawer placement={'right'} onClose={onClose} isOpen={isOpen} >
            <DrawerOverlay />
            <DrawerContent bg={'#F6F4FB'}>
                <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
                <DrawerBody>
                    <Grid>
                        <ChakraLink as={Link} to='/contact' onClick={onClose}>Contacts</ChakraLink>
                        <ChakraLink as={Link} to='/about' onClick={onClose}>About</ChakraLink>
                    </Grid>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
}