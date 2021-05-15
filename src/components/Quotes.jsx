import { useState, useEffect } from 'react'
import {useQuotesApi} from '../hooks/useQuotesApi.jsx';
import { MainContainer, QuoteSection, FinalSection, QuoteH2Styled, QuotePStyled, IconStyled, ButtonStyled, ChangeColor} 
        from '../styles/QuotesStyled.jsx';      
import { FaTwitterSquare, FaTumblrSquare, FaQuoteLeft } from 'react-icons/fa';

const Quotes = () => {
    const quotes = useQuotesApi('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const {data} = quotes;

    const [color, setcolor] = useState('lightblue')
    
    useEffect(()=>{
        let colorTest = changeQuoteColor(); 
    });

    const handleClick = () =>{
        setcolor(changeQuoteColor());
    }

    const changeQuoteColor = () =>{
        let style = Math.floor(Math.random() * ChangeColor.length);
        return ChangeColor[style];
    }
    
    return (
        <>
            <MainContainer style={{background: color}}>
                <QuoteSection>
                    <QuoteH2Styled style={{color: color}}> 
                        <FaQuoteLeft />
                        {`${data[0] && data[0].quote}`}
                     </QuoteH2Styled>
                    <QuotePStyled style={{color: color}}> {`${data[0] && data[0].author}`} </QuotePStyled>
                    <FinalSection>
                        <a href={"https://twitter.com/"}>
                            <IconStyled>
                                <FaTwitterSquare />
                            </IconStyled>
                        </a>
                        <a href="https://www.tumblr.com/" >
                            <IconStyled >
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
        