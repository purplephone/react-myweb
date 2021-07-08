import React, { Component } from 'react';
import './Nav_menu.css';
import Nav_menu_list from './Nav_menu_list';

class Nav_menu extends Component{
    render(){
        return(
            <ul class="nav_menu">
                <Nav_menu_list name="Home"/>
                <Nav_menu_list name="Daily"/>
                <Nav_menu_list name="Game"/>
                <Nav_menu_list name="FAQ"/>
                <Nav_menu_list name="Setting"/>
            </ul>
        )
    }
}

export default Nav_menu