import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMealById } from "../api"
import Preloader from "../components/Preloader"
import MealRecipe from "../components/MealRecipe"

export default function Recipe() {
    const {id} = useParams()
    const [recipe, setRecipe] = useState([])
    

    useEffect(() => {
        getMealById(id)
        .then(data => setRecipe(data.meals[0]))
    }, [id])

    return <>
        {!recipe.idMeal ? <Preloader/> : <MealRecipe key={recipe.id} {...recipe}/>}
    </>
}