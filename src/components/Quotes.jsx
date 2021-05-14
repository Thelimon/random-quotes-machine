import React from 'react'
import {useQuotesApi} from '../hooks/useQuotesApi.jsx';
import {MainContainer} from '../styles/QuotesStyled.jsx';

const Quotes = () => {
    const quotes = useQuotesApi('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const {data, error} = quotes;
    return (
        <div>
            <MainContainer>
                <div>
                    <h3>{`${data[0] && data[0].quote}`}</h3>
                    <p>{`${data[0] && data[0].author}`}</p>
                </div>
            </MainContainer>     
        </div>
    )
}

export default Quotes
        