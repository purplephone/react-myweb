import React, { Component } from 'react';
import Player from './Player';
import List from './List';
import Search_bar from '../youtube/Search_bar';

class Test extends Component{
    render(){
        return(
          <div>
            <Search_bar/>
            <div className="video">
            <Player/>
            <List/>
            </div>
          </div>
        )
      }
}

export default Test