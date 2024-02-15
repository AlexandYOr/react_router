import { Stack } from "@chakra-ui/react"

import CategoryItem from "./CategoryItem"

export default function CategoryList({ catalog = [] }) {
    return <Stack wrap='wrap' justifyContent='center' direction='row' spacing='24px'>
        {catalog.map(el => (
            <CategoryItem key={el.idCategory} {...el} />
        ))}
    </Stack>
}