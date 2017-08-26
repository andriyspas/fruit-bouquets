import React from 'react';

const Video = () =>
    <video loop autoPlay>
        <source src={require('../../../video/video.mp4')} type="video/mp4"/>
    </video>;

export default Video;