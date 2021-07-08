import React, { Component } from 'react';

function Nav_menu_list(props){
    return(
        <li><a href={props.name}>{props.name}</a></li>
    )
}

export default Nav_menu_list