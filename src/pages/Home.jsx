import { useState, useEffect } from 'react'
import { getAllCategories } from '../api'
import CategoryList from '../components/CategoryList'
import Search from '../components/Search'
import { Stack } from '@chakra-ui/react'
import { useNavigate, useLocation } from 'react-router-dom'


export default function Home() {
    const [catalog, setCatalog] = useState([])
    const [filteredCatalog, setFilteredCatalog] = useState([])

    const { pathname, search } = useLocation()
    const navigate = useNavigate()

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )
        navigate({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories)
            setFilteredCatalog(search ?
                data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())) : data.categories)
        })
    }, [search])

    return (<Stack wrap='wrap' justifyContent='center' direction='row' spacing='24px'>
        <Search cb={handleSearch} />
        {!catalog.length ? <h2>Страница пустая</h2> :
            <CategoryList catalog={filteredCatalog} />}
    </Stack>
    )
}