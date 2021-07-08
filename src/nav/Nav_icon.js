import React, { Component } from 'react';
import './Nav_icon.css'

class Nav_icon extends Component{
    render(){
        return(
            <div class="nav_icon">
                <i class="fab fa-aws"></i>
                <i class="far fa-comments"></i>
                <a href="login">Login</a>
            </div>
        )
    }
}

export default Nav_icon