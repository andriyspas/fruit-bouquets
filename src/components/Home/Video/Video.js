import React from 'react';

const Video = () =>
    <video loop autoPlay>
        <source src={require('../../../images/video.mp4')} type="video/mp4"/>
    </video>;

export default Video;