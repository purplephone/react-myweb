import React, { useEffect,useState } from 'react';

const Player = () =>{
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
        <div className="video_player">
            <iframe 
                className="video_frame"
                allowFullScreen
                width={windowSize.width * 68 / 100}
                height={windowSize.width * 612 / 1600}
            />
        </div>
    )
}

export default Player