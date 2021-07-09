import React from 'react';
import './Video_list_entey.css';

const Video_list_entry = (props) =>{
    return(
        <div className="video_list_entry">
            <div>
                <img className="video_image" 
                src={props.video.snippet.thumbnails.default.url}
                alt=""
                />
            </div>
            <div className="video_contents">
                <div className="video_title">{props.video.snippet.title}</div>
            </div>
        </div>
    )
}

export default Video_list_entry