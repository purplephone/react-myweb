import React, { Component } from 'react';
import { searchYoutube } from './searchYoutube';
import Search_bar from './Search_bar';
import Video_list from './Video_list';
import { Fakedata } from './Fakedata';
import './Youtube.css'

const search = {
  query : '릴보이',
  max : 10,
  key : process.env.REACT_APP_YOUTUBE_API,
}

class Youtube extends Component{
  constructor(props){
    super(props);

    this.state ={
      input : '',
      videos: Fakedata,
      selectedVideo: Fakedata[0]
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

  handleKeyPress = e =>{
    if (e.key==='Enter'){
      this.handleSearch()
    }
  }

  handleChange= e =>{
    this.setState({
      input:e.target.value
    })
  }

  handleSearch= () =>{
    search.query= this.state.input
    this.goToSearch()
    this.setState({
      input : ''
    })
  }
  
  componentDidMount(){
    this.goToSearch();
  }

  render(){
    return(
      <div>
        <Search_bar input={this.state.input} onSearch={this.handleSearch} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
        <div className="video">
          <div className="video_player"></div>
          <div className="video_list">
            <Video_list videos={this.state.videos}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Youtube;