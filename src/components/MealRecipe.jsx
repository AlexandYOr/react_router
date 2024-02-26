import { Grid, GridItem, Image, Stack, Text, Link } from "@chakra-ui/react"


export default function MealRecipe(props) {
    const { strMeal, strCategory, strArea, strInstructions, strMealThumb, strYoutube } = props
    const ingredients = []
    const ingredientsValue = []

    for (const key in props) {
        if (key.includes('strIngredient') && props[key]) {
            ingredients.push(props[key])
        }
    }
    ingredients.map((el, i) => {
        let newElem
        for (const key in props) {
            if (key.includes('strMeasure' + (i + 1)) && props[key]) {
                newElem =  el + ': ' + props[key]
                
            }
        }
        return ingredientsValue.push(newElem)
    })



    return <Stack wrap='wrap' justifyContent='center' direction='row' spacing='24px'>
        <Grid
            maxW={'90%'}
            templateRows='repeat(auto-fit, (3, 1fr))'
            templateColumns='repeat(5, 1fr)'
            gap={4}
        >
            <GridItem rowSpan={2} colSpan={1} bg={'#F6F4FB'}>
                <Image src={strMealThumb} objectFit={'cover'} boxSize={'100%'} />
            </GridItem>
            <GridItem colSpan={2} bg={'#F6F4FB'}>
                <Text>Meal: {strMeal}</Text>
                <Text>Category: {strCategory}</Text>
                <Text>Country of origin: {strArea}</Text>
                {strYoutube ? <Text>Cooking video: <Link>{strYoutube}</Link></Text> : ''}
            </GridItem>
            <GridItem colSpan={2} bg={'#F6F4FB'}>
                <h2>{ingredientsValue.join(', ')}</h2>
            </GridItem>
            <GridItem colSpan={4} bg={'#F6F4FB'}><Text>{strInstructions}</Text></GridItem>
        </Grid>
    </Stack>
}