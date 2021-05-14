import React from 'react'
import {useQuotesApi} from '../hooks/useQuotesApi.jsx';
import {
    MainContainer,
    QuoteSection,
    FinalSection,
    QuoteH2Styled,
    QuotePStyled,
    IconStyled
} from '../styles/QuotesStyled.jsx';
import { FaTwitterSquare } from "react-icons/fa";
import { FaTumblrSquare } from 'react-icons/fa';

const Quotes = () => {
    const quotes = useQuotesApi('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const {data} = quotes;

    return (
        <>
            <MainContainer>
                <QuoteSection>
                    <QuoteH2Styled> {`${data[0] && data[0].quote}`} </QuoteH2Styled>
                    <QuotePStyled> {`${data[0] && data[0].author}`} </QuotePStyled>
                    <FinalSection>
                        <a href={"https://twitter.com/"}>
                            <IconStyled>
                                <FaTwitterSquare />
                            </IconStyled>
                        </a>
                        <a href="https://www.tumblr.com/">
                            <IconStyled>
                                <FaTumblrSquare />
                            </IconStyled>
                        </a>
                    </FinalSection>
                </QuoteSection>
            </MainContainer>     
        </>
    )
}

export default Quotes
        