import Video_list_entry from './Video_list_entry';
import './Video_list.css'
import React, { useEffect,useState } from 'react';

const Video_list = (props) =>{
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth
    })

    const handleResize=()=>{
        setWindowSize({
            width:window.innerWidth
        })
    }

    useEffect(()=>{
        window.addEventListener('resize',handleResize);
        return () => {
            window.removeEventListener('resize',handleResize);
        }
    }, []);

    return(
        <div className="video_list" width={windowSize.width *29/100}>
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