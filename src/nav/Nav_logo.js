import React, { Component } from "react";
import './Nav_logo.css'

function Nav_logo(props){
    return(
        <div className="nav_logo" onClick={props.onClick}>
            <i class="fas fa-bug"></i>
            <a href="#">SaMag</a>
        </div>
    )
}

export default Nav_logo