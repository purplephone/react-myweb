import React, { Component, useState } from 'react';
import { searchYoutube } from './searchYoutube';
import Search_bar from './Search_bar';

const search = {
  query : 'laboom',
  max : 10,
  key : '%REACT_APP_YOUTUBE_API%',
}

class Youtube extends Component{
  constructor(props){
    super(props);

    this.state ={
      videos:null,
      selectedVideo: {id:{videoId:'a'}}
    };
  }

  goToSearch(){
    searchYoutube(search,(result) => {
      this.setState({
        videos: [...result],
        selectedVideo: result[0]
      })
    })
  }
  
  componentDidMount(){
    this.goToSearch();
  }

  render(){
    return(
      <div>
        <Search_bar/>
        {this.state.selectedVideo ? '' : this.state.selectedVideo.id.videoId}
      </div>
    )
  }
}

export default Youtube;