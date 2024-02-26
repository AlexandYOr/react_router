import { Stack } from "@chakra-ui/react"
import Meal from "./Meal"

export default function MealList({ meals }) {


    return <Stack wrap='wrap' justifyContent='center' direction='row' spacing='24px'>
        {meals.map(meal => (
            <Meal key={meal.idMeal} {...meal} />
        ))}
    </Stack>
}