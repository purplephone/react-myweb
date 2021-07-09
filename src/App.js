import React, { Component } from 'react';
import Main from './Main';
import Nav from './nav/Nav';
import ReactDOM from 'react-dom';
import './App.css'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            page : null
        }
    }

    handleClick(i){
        this.setState({
            page : i
        });
    }
    
    render(){
        return(
            <div className="App">
                <Nav onClick={(i) =>this.handleClick(i)}/>
                <Main page={this.state.page}/>
            </div>
        )
    }
}

export default App