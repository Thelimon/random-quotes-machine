import {useState, useEffect} from 'react'

export const useQuotesApi = (url) => {
   
    const [state, setstate] = useState({
            data: [],
            error: null
        }
    )

    useEffect(() => {
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            setstate({
                error: null,
                data: data.quotes
            })
        })
    }, [url])
    return state;
}
