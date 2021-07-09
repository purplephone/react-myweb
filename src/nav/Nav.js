import './Nav.css';
import React from 'react';
import { render } from '@testing-library/react';
import Nav_logo from './Nav_logo';
import Nav_menu from './Nav_menu';
import Nav_icon from './Nav_icon';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <nav class="Nav">
        <Nav_logo onClick={() =>this.props.onClick(null)}/>
        <Nav_menu onClick={(i) =>this.props.onClick(i)}/>
        <Nav_icon/>

        <a href="#" class="nav_toggleBtn">
            <i class="fas fa-bars"></i>
        </a>
      </nav>
    );
  }
}

export default Nav;
