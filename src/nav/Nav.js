import './Nav.css';
import React from 'react';
import { render } from '@testing-library/react';
import Nav_logo from './Nav_logo';
import Nav_menu from './Nav_menu';
import Nav_icon from './Nav_icon';

class Nav extends React.Component {
  render(){
    return(
      <nav>
        <Nav_logo/>
        <Nav_menu/>
        <Nav_icon/>

        <a href="#" class="nav_toggleBtn">
            <i class="fas fa-bars"></i>
        </a>
      </nav>
    );
  }
}

export default Nav;
