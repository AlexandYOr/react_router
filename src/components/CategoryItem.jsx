import {
    Card,
    CardBody,
    CardFooter,
    Stack,
    Text,
    Heading,
    Link as ChakraLink,
    Divider,
    Button,
    Image,
    Tooltip
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function CategoryItem(props) {
    const {strCategory, strCategoryThumb, strCategoryDescription } = props
    return <Card bg={'#F6F4FB'} maxW='sm'>
        <CardBody>
            <Image
                src={strCategoryThumb}
                alt={strCategory + 'Image'}
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{strCategory}</Heading>
                <Text>
                    {strCategoryDescription.length > 100 ?
                        <Tooltip label={strCategoryDescription} aria-label='A tooltip'>
                            {strCategoryDescription.substring(0, 100) + '...'}
                        </Tooltip> : strCategoryDescription}
                </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ChakraLink as={Link} to={`/category/${strCategory}`}>
                <Button variant='solid' colorScheme='purple' bg={'#1A263D'}>
                        Watch category
                </Button>
            </ChakraLink>
        </CardFooter>
    </Card>
}