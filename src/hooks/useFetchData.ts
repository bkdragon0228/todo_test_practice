import { useState, useEffect, SetStateAction } from 'react'
import { FetchData } from '../../utils/service'

export default function useFetchData<T>(ininalState : T) : [T, React.Dispatch<SetStateAction<T>>]  {
    const [data, setData] = useState<T>(ininalState)

    useEffect(() => {
      FetchData().then((res) => {
            setData(res)
        })
    }, [])


    return [data, setData]
}