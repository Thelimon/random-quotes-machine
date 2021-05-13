import React, { Component } from 'react'
import {MainContainer} from '../styles/QuotesStyled'

export default class Quotes extends Component {
    constructor(props){
        super (props)
        this.state = {
            phrases: [],
            id: 0,
            color:0,
            flag: true
        }
    }
    componentDidMount(){
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json())
        .then(quoteCallback => this.setState({phrases:quoteCallback.quotes, flag: false}))
    }

    changeState(){
        this.setState({id:(Math.floor(Math.random() * this.state.phrases.length))})
        this.setState({color:(Math.floor(Math.random() * this.state.color.length))})
    }
    
    render() {
        return (
            <MainContainer>
                <h1>Hola</h1>
            </MainContainer>
        )
    }
}
