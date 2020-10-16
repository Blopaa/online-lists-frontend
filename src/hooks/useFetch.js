import {useEffect, useState} from 'react'

export const useFetch = (url, headers) => {
    const [state, setstate] = useState({data: []})

    useEffect(() => {
       headers ? 
       fetch(url, {headers:{"auth-token":headers}})
       .then(res => res.json())
       .then(data => setstate({data}))
       :
       fetch(url)
       .then(res => res.json())
       .then(data => setstate({data}))
    }, [])

    return state
}