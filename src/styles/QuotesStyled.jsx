import styled from 'styled-components';

const ChangeColor = [
  '#A871BE',
  '#A0C2DF',
  '#AC4818',
  '#0F471C',
  '#852D6D',
  '#30EA25',
  '#A2866C',
  '#38240A',
  '#EB5965',
  '#991B52',
  '#490ECE',
  '#2A98D3',
  '#23BA5C',
  '#21230D',
  '#AB7A7C',
  '#4BADA4',
  '#9AE9D6',
  '#40A69A',
  '#EAEC8C'
];

const MainContainer = styled.main`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
`

const QuoteSection = styled.section`
    width: 28.75rem;
    padding: 2.5rem 3.75rem;
    border-radius: 1rem;
    background-color: #FFFFFF;
`

const FinalSection = styled.article`
    display:flex;   
`

const QuoteH2Styled = styled.h2`
    text-align:center;
`

const QuotePStyled = styled.p`
    text-align:right;
`

const IconStyled = styled.i`
  font-size: 2.3rem;
  &&:nth-child(1){
    margin-right: .5rem;
  }
`

const ButtonStyled = styled.button`
    height: 2.2rem;
    width: 6.5rem;
    margin-left: auto;
    border-radius: .4rem;
    border:none;
    color: #F0F0F0; 
    
`

export {ChangeColor, MainContainer, QuoteSection, FinalSection, QuoteH2Styled, QuotePStyled, ButtonStyled,
  IconStyled
}