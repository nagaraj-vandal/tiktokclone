import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'


function Video()
{
    const [play, setPlay] = useState(false)
    const videoRef = useRef(null)
    const onVideoPress = () =>
    {
        if (play) {
            videoRef.current.pause()
            setPlay(false)
        } else {
            videoRef.current.play()
            setPlay(true)
        }
    }

    return (
        <div className="video" >
            <video className="video_player" src="http://aws-static.kwai.net/udata/pkg/proweb/www/v_pcnew_0.mp4" loop ref={videoRef} onClick={onVideoPress}></video>
            <VideoFooter />
        </div>
    )
}

export default Video
