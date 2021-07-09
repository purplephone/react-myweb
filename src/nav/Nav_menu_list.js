import React, { Component } from 'react';

const Nav_menu_list = (props)=>{
    const {onClick, name} = props
    return(
        <li><a href="#" onClick={onClick}>{name}</a></li>
    )
}

export default Nav_menu_list