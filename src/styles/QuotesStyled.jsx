import styled from 'styled-components';

export const ChangeColor = [
  '#A0C2DF',
  '#A871BE',
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

export const MainContainer = styled.main`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background-color: #A0C2DF;
`

export const QuoteSection = styled.main`
    width: 28.75rem;
    padding: 2.5rem 3.75rem;
    border-radius: 1rem;
    background-color: #FFFFFF;
`

const Quote = styled.h1`
    
`

export const QuoteStyled = ({quoteParam}) => <Quote>{quoteParam}</Quote>