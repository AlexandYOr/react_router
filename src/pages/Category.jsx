import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

export default function Category () {
    const {name} = useParams()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        getFilteredCategory(name)
        .then(data => setMeals(data.meals))
    }, [name])

    return <>
        {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
    </>
}