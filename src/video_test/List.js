import React, { useEffect,useState } from 'react';

const List = () =>{
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
        </div>
    )
}

export default List