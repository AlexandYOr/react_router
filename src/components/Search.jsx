import { Stack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";   

export default function Search ({cb = Function.prototype}) {
    const [value, setValue] = useState('')
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        cb(value)
    }

    return <Stack justifyContent='center' direction='row' spacing='24px' minW={'70%'}>
    <Input type='search'
        id="search-field"
        placeholder="search"
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        />
        <Button colorScheme='purple' onClick={handleSubmit} >Search</Button>
</Stack>
    

}