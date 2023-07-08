import { useState, useEffect, SetStateAction } from 'react'

import axios from 'axios'

export default function useFetchData<T>(ininalState : T) : [T, React.Dispatch<SetStateAction<T>>, boolean]  {
    const [data, setData] = useState<T>(ininalState)
    const [isError, setIsError] = useState<boolean>(false)

    const fetchdata = async () => {
        try {
            const response = await axios.get("https://localhost:3000/tasks")
            const result = await response.data

            setData(result as T)
        } catch(error) {
            setIsError(true)
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return [data, setData, isError]
}