import React from 'react';
import { assets } from '../assets/db';
import '../assets/styles/components/Video.css';
const Video = () => {
    return (
        <div className='video-container'>
            <video autoPlay muted className='video-player'>
                <source src={assets.video} />
            </video>
        </div>
    )
}

export default Video;
