import { useState } from 'react'
import {useQuotesApi} from '../hooks/useQuotesApi.jsx';
import { MainContainer, QuoteSection, FinalSection, QuoteH2Styled, QuotePStyled, IconStyled, ButtonStyled, ChangeColor} 
        from '../styles/QuotesStyled.jsx';      
import { FaTwitterSquare, FaTumblrSquare, FaQuoteLeft } from 'react-icons/fa';

const Quotes = () => {
    const quotes = useQuotesApi('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const {data} = quotes;

    const [color, setcolor] = useState('lightblue');
    const [phrase, setphrase] = useState(0);
    
    const handleClick = () =>{
        setcolor(changeQuoteColor());
        setphrase(changeQuotePhrase());
    }

    const changeQuotePhrase = () =>{
        let newQuote = Math.floor(Math.random() * data.length);
        console.log(newQuote);
        return data[newQuote];
    }

    const changeQuoteColor = () =>{
        let style = Math.floor(Math.random() * ChangeColor.length);
        console.log(style);
        return ChangeColor[style];
    }
    
    return (
        <>
            <MainContainer style={{background: color}}>
                <QuoteSection>

                    <QuoteH2Styled style={{color: color}}> 
                        <FaQuoteLeft />
                        {`${data[phrase] && data[phrase].quote}`}
                     </QuoteH2Styled>

                    <QuotePStyled style={{color: color}}> 
                        {`${data[phrase] && data[phrase].author}`} 
                    </QuotePStyled>

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

                        <ButtonStyled 
                            style={{background: color}}
                            onClick={() => handleClick()}
                            >
                                New quote
                        </ButtonStyled>
                    </FinalSection>
                </QuoteSection>
            </MainContainer>
  
        </>
    )
}

export default Quotes
        