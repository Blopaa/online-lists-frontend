import { useState } from "react"

export const useInput = (initialState = {}) => {
    const [value, setvalue] = useState(initialState)

    const handleInputChange = ({target}) => {
        setvalue({
            ...value,
            [target.name]: target.value
        })
    }

    return [value, handleInputChange]

}