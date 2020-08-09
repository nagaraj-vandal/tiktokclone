import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

function VideoFooter({ channel, description, song })
{
    return (
        <div>
            <div className="videoFooter">
                <div className="videoFooterText">
                    <h3>@{channel}</h3>
                    <p>{description}</p>
                    <MusicNoteIcon className="videoFooter_icon" />
                    <div className="videoFooter_ticker">
                        <Ticker mode="smooth">
                            {({ index }) =>
                                (
                                    <p>{song}</p>
                                )}
                        </Ticker>
                    </div>
                </div>
                <img src="https://static.thenounproject.com/png/934821-200.png" alt="" className="videoFooter_logo" />
            </div>
        </div>
    )
}

export default VideoFooter
