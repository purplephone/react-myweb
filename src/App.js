import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';

class App extends React.Component {
  render(){
    return(
      <nav>
        <div className="nav_logo">
          <i class="fas fa-bug"></i>
          <a href="">SaMag</a>
        </div>
        <ul class="nav_menu">
            <li><a href="home">Home</a></li>
            <li><a href="Daily">Daily</a></li>
            <li><a href="">Youtube</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Setting</a></li>
        </ul>

        <div class="nav_icon">
            <i class="fab fa-aws"></i>
            <i class="far fa-comments"></i>
            <a href="login">Login</a>
        </div>

        <a href="#" class="nav_toggleBtn">
            <i class="fas fa-bars"></i>
        </a>
      </nav>
      
    );
  }
}

export default App;
