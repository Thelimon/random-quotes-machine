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


    // const [quotes, setQuotes] = useState([]);
    // useEffect(() => {
    //     axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    //     .then(response => {console.log(response)})
    //     .catch (error => {console.log(error)})
    // }, [])

    // console.log(quotes, "Hola");
    // return (
    //     <div>{"hola"}</div>
    // );
