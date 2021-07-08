import React, { Component } from 'react';
import Game from './tictactoe/Game';
import Form from './Form';

class Select extends Component{
    constructor(props){
        super(props)
        this.state={
            page : null,
            contents : true
        }
    }

    handleClick = () =>{
        let changePage = this.state.contents ? <Game/> : null
        this.setState({
            page : changePage,
            contents : !this.state.contents
        })
    }

    render(){
        return(
            <div>
                {this.state.page}
                <Form onClick={this.handleClick}/>
            </div>
        )
    }
}

export default Select;