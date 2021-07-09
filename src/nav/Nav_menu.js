import React, { Component } from 'react';
import './Nav_menu.css';
import Nav_menu_list from './Nav_menu_list';
import Game from '../tictactoe/Game';
import Youtube from '../youtube/Youtube';


class Nav_menu extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <ul class="nav_menu">
                <Nav_menu_list name="Home" onClick={()=>this.props.onClick(null)}/>
                <Nav_menu_list name="Youtube" onClick={() => this.props.onClick(<Youtube/>)}/>
                <Nav_menu_list name="Game" onClick={()=>this.props.onClick(<Game/>)}/>
                <Nav_menu_list name="FAQ"/>
                <Nav_menu_list name="Setting"/>
            </ul>
        )
    }
}

export default Nav_menu