import { useState, useEffect } from 'react'
import {getAllCategories} from '../api'
import CategoryList from '../components/CategoryList'

export default function Home () {
    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories)
        })
    }, [])

    return (
       <>
        {!catalog.length ? <h2>Страница пустая</h2> : 
        <CategoryList catalog={catalog}/>}
       </>
    )
}