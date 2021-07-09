import Video_list_entry from './Video_list_entry';
import './Video_list.css'
import React from 'react';

const Video_list = (props) =>{
    return(
        <div className="video_list_frame">
            {props.videos.map((data)=>(
                <Video_list_entry
                    video={data}
                />
            ))}
        </div>
    )
}

export default Video_list