import { 
Card,
CardBody,
Image,
Stack,
Heading,
Link as ChakraLink,
Divider,
CardFooter,
Button
} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

export default function Meal(props) {
    const {strMeal, idMeal, strMealThumb } = props

    return <Card bg={'#F6F4FB'} maxW='sm'>
        <CardBody>
            <Image
                src={strMealThumb}
                alt={strMeal + 'Image'}
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{strMeal}</Heading>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ChakraLink as={Link} to={`/meal/${idMeal}`}>
                <Button variant='solid' colorScheme='purple' bg={'#1A263D'}>
                        Watch recipe
                </Button>
            </ChakraLink>
        </CardFooter>
    </Card>
}