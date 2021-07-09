import Video_list_entry from './Video_list_entry';
import './Video_list.css'
import React from 'react';

const Video_list = (props) =>{
    return(
        <div className="video_list">
            {props.videos.map((data)=>(
                <Video_list_entry
                    onClick={() =>props.onClick(data.id.videoId)}
                    video={data}
                    key={data.id.videoId}
                />
            ))}
        </div>
    )
}

export default Video_list